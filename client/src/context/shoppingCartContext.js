import { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({});

export function useShoppingCard() {
    return useContext(ShoppingCartContext);
}

// shoppingCartProvider component
export function ShoppingCartProvider ({ children }) {
    const [cartItems, setCartItems] = useLocalStorage("my_Card_items",[])

    function getCartItems(){
        return cartItems;
    }
    
    function getItemQuantity(id){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const getCartItemsTotalPrice = cartItems.reduce((total, item) => {
        return (item.quantity * item.pricePerUnitInCents) + total
    } , 0)

    const cartQuantity = cartItems.reduce((quantity, item) => {
        return item.quantity + quantity
    }, 0)

    function addToCart(item) {
        // Check if the item is already in the cart
        const itemToAdd = {
            id: item.id,
            quantity: item.quantity,
            pricePerUnitInCents: item.price * 100,
            productName: item.name,
            image: item.image
        }
        const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
        if (existingItem) {
            // If the item already exists, update its quantity
            setCartItems(prevCartItems => {
                return prevCartItems.map(cartItem => {
                    if (cartItem.id === itemToAdd.id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    } else {
                        return cartItem;
                    }
                });
            });
        } else {
            // If the item is not in the cart, add it with quantity 1
            setCartItems(prevCartItems => [...prevCartItems, { ...itemToAdd, quantity: 1 }]);
        }
    }

    function clearCart(){
        setCartItems([])
    }

    function incrementCardQuantity(id) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) === null){
                return [...currentItems, {id, quantity: 1}]
            } else {
                return currentItems.map(item => {
                    if (item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    } else{
                        return item
                    }
                })
            }
        })
    }

    function decrementCardQuantity(id) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1){
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    } else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCard(id){
        setCartItems(currentItems => { 
            return currentItems.filter(item => item.id !== id) 
        })
    }

    return(
        <ShoppingCartContext.Provider value={{ 
            getCartItems, 
            getItemQuantity, 
            incrementCardQuantity, 
            decrementCardQuantity, 
            removeFromCard,
            addToCart,
            clearCart,
            cartItems,
            cartQuantity,
            getCartItemsTotalPrice 
            }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}