import { useEffect, useState, useContext } from 'react';
import { CircleContext } from './CircleContext';

export default function Slider() {

    const [rangeValue, setRangeValue] = useState(180);
    const [rotation, setRotation] = useState();

    const { setERotation, reset } = useContext(CircleContext);

    useEffect(_ => {
        setRotation(rangeValue - 180);
        setERotation(rangeValue - 180);
    }, [rangeValue, setERotation]);

    useEffect(_ => {
        if (reset) {
            setRangeValue(180);
        }
    }, [reset]);

    return (
        <div className="slider">
            <input type="range" onChange={e => setRangeValue(e.target.value)} className="green" value={rangeValue} step="1" min="0" max="360" />
            <h6>{rotation}</h6>
        </div>
    );
}
