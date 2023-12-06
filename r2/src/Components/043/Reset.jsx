import { useContext } from 'react';
import { CircleContext } from './CircleContext';

export default function Reset() {

    const { setReset } = useContext(CircleContext);

    return (
        <button className="blue" onClick={_=> setReset(true)}>Reset</button>
    )
}