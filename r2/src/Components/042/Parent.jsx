import Baby from './Baby';

export default function Parent({ counter1 }) {

    return (
        <div className="context-container">
            <h1>Parent</h1>
            <Baby counter1={counter1} />
        </div>
    );
}