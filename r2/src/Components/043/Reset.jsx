import { useContext } from 'react';
import { CircleContext } from './CircleContext';

export default function Reset() {

    const { setERotation } = useContext(CircleContext);

    return (
        <button className="blue" onClick={_=> setERotation(0)}>Reset</button>
    )
}