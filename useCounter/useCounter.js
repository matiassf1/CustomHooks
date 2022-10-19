import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const incrementCounter = (value = 1) => {
        setCounter((current) => current + value);
    }
    const substrCounter = (value = 1) => {
        if (counter > 0) {
            setCounter((current) => current - value);    
        }
    }
    const resetCounter = () => {
        setCounter(10);
    }
    return {
        counter,
        incrementCounter,
        resetCounter,
        substrCounter
    }
}
