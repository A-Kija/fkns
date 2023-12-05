import Baby from './Baby';
import { useContext } from 'react';
import { AnotherContext } from './AnotherContext';

export default function Parent({ counter1 }) {

    const { hi } = useContext(AnotherContext);

    return (
        <div className="context-container">
            <h1>Parent</h1>
            <h3>{hi}</h3>
            <Baby counter1={counter1} />
        </div>
    );
}