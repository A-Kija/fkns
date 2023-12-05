import { createContext, useState } from 'react';

export const CircleContext = createContext();

export default function CircleProvider({children}) {

    const circleColor = 'crimson';
    const [eRotation, setERotation] = useState(0);

    return (
        <CircleContext.Provider value={{
            circleColor,
            eRotation,
            setERotation
            }}>
            {children}
        </CircleContext.Provider>
    );
}
