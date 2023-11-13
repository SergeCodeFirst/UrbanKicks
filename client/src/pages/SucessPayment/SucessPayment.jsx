import React, { useEffect } from "react";
import './SucessPayment.css'
import { useShoppingCard } from "../../context/shoppingCartContext";


const SucessPayment = (props) => {
    const { clearCart } = useShoppingCard();
    
    useEffect(()=> {
        clearCart()
    }, [clearCart])
    return(
        <h1 className="success">Success</h1>
    )
}

export default SucessPayment;