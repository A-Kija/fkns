import { useContext } from 'react';
import { FamilyContext } from './FamilyContext'; 
import { AnotherContext } from './AnotherContext'; 

export default function Baby({ counter1}) {

    const { counter2, hello } = useContext(FamilyContext);
    const { hi, button } = useContext(AnotherContext);

    return (
        <div className="context-container">
            <h1>Baby, {hello}</h1>
            <h3>{hi}</h3>
            <h2>Counter1: {counter1}</h2>
            <h2>Counter2: {counter2}</h2>
            {button}
        </div>
    );
}