import { useEffect, useState } from 'react';

export default function Create({ setCreate, addMessage }) {

    const [color, setColor] = useState('#ffffff');
    const [size, setSize] = useState(100);

    const [errors, setErrors] = useState({});

    const add = _ => {
        let error = false;
        setErrors({});
        if (color === '#ffffff') {
            setErrors(e => ({ ...e, color: 'Please select a color' }));
            error = true;
        }
        if (parseInt(size) > 150) {
            setErrors(e => ({ ...e, size: 'Please select correct size' }));
            error = true;
        }
        if (error) {
            addMessage('danger', 'Please correct the errors');
            return;
        }
        setCreate(
            {
                color,
                size: parseInt(size),
                name: 'New Color'
            }
        );
        setColor('#ffffff');
        setSize(100);
    }

    useEffect(_ => {
        if (errors.color) {
            const e = { ...errors };
            delete e.color;
            setErrors(e);
        }
    }, [color]);

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">Create new Color</h5>
                <div className="mb-3">
                    <label className="form-label">Color <span className="error">{errors.color ?? null}</span></label>
                    <input type="color" value={color} onChange={e => setColor(e.target.value)} className="form-control form-control-color" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Size <b>{size}</b>  <span className="error">{errors.size ?? null}</span></label>
                    <input type="range" min={100} max={200} step={1} value={size} onChange={e => setSize(e.target.value)} className="form-range" />
                </div>
                <button type="button" onClick={add} className="btn btn-outline-primary">Add Color</button>
            </div>
        </div>
    );
}