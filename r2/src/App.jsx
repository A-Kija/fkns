import { useState } from 'react';
import './buttons.scss';
import './App.scss';
import Square from './Components/042/Square';

function App() {

  const [plusCounter, setPlusCounter] = useState(0);

  const plus = _ => {
    setPlusCounter(c => c + 1); // edit
    setPlusCounter(c => c + 1);
    setPlusCounter(c => c + 1);
    setPlusCounter(c => c + 1);
  }

  const reset = _ => {
    setPlusCounter(0); // create
  }

  const [squares, setSquares] = useState([]);

  const add = _ => {
    setSquares(s => [{ count: 0 }, ...s]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {plusCounter}</h1>
        <p>
          This is a REACT STATE #2-2
        </p>
        <div className="sq-bin">
          {
            squares.map((s, i) => <Square key={i} square={s} />)
          }
        </div>
        <div className="sq-bin">
        <button className="pink" onClick={add}>Add One Square</button>
        <button className="blue" onClick={plus}>+1</button>
        <button className="yellow" onClick={reset}>reset</button>
        </div>
      
      </header>
    </div>
  );
}

export default App;
