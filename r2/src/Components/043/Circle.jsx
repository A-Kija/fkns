import { useContext } from 'react';
import { CircleContext } from './CircleContext';

export default function Circle() {

    const { circleColor } = useContext(CircleContext);

    return (
        <div className="circle">
            <h1>Circl<span style={{color: circleColor}}>e</span></h1>
        </div>
    );
}