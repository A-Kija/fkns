import Parent from './Parent';

export default function Gran({ counter1 }) {

    return (
        <div className="context-container">
            <h1>Granpa</h1>
            <Parent counter1={counter1} />
        </div>
    );
}