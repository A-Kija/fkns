import { createContext, useEffect, useState } from 'react';

export const CircleContext = createContext();

export default function CircleProvider({children}) {

    const circleColor = 'crimson';
    const [eRotation, setERotation] = useState(0);
    const [reset, setReset] = useState(false);


    useEffect(_ => {
        if (reset) {
            setERotation(0);
        }
    }, [reset]);

    useEffect(_ => {
        setReset(false);
    }, [reset]);

    return (
        <CircleContext.Provider value={{
            circleColor,
            eRotation,
            setERotation,
            reset,
            setReset
            }}>
            {children}
        </CircleContext.Provider>
    );
}
