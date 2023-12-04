export default function Square({ square, plusOne }) {

    return (
        <div className="sq">
            <b>{square.count}</b>
            <button className="blue" onClick={_ => plusOne(square)}>+1</button>
        </div>
    );   
}