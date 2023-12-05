import { useContext } from 'react';
import { CircleContext } from './CircleContext';

export default function Circle() {

    const { circleColor, eRotation } = useContext(CircleContext);

    return (
        <div className="circle">
            <h1>Circl<span style={{
                color: circleColor,
                transform: `rotate(${eRotation}deg)`
                }}>e</span></h1>
        </div>
    );
}