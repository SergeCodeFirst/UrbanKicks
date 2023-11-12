import { useEffect, useState } from "react";


export function useLocalStorage(key, intialValue) {
    const [value , setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null){ 
            return JSON.parse(jsonValue)
        }else{
            return intialValue
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}