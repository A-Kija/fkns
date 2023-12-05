import { createContext } from 'react';

export const CircleContext = createContext();

export default function CircleProvider({children}) {

    const circleColor = 'crimson';

    return (
        <CircleContext.Provider value={{circleColor}}>
            {children}
        </CircleContext.Provider>
    );
}
