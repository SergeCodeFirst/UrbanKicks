import { createContext, useContext } from "react";

const shoppingCartContext = createContext({});

export function useShoppinCart(){
    return useContext(shoppingCartContext)
}


export function ShoppinCartProvider({ children }){
    return (
    <shoppingCartContext.Provider value={{}}>
        {children}
    </shoppingCartContext.Provider>
    )
}