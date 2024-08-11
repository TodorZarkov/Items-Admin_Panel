import { useState } from "react";

export function useLocalStorage(key, initialValue) {

    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key);
        if(persistedStateSerialized) {
            const persistedState = JSON.parse(persistetStateSerialized);
            return persistedState;
        } else {
            return initialValue;
        }
    });


    const setLocalStorage = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    } ;

    
    return [state, setLocalStorage];
};