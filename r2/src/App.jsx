import './buttons.scss';
import './sliders.scss';
import './App.scss';

import { useState, useReducer, useRef, useEffect } from 'react';
import counterReducer from './Reducers/counterReducer';
import { plus1, plusMany, reset } from './Actions/counterActions';


function App() {

    const [stateCounter, setStateCounter] = useState(0);
    const [reducerCounter, dispachCounter] = useReducer(counterReducer, 0);
    const [howMany, setHowMany] = useState(0);

    let A = 0;

    const B = useRef(0);
    const ElH2 = useRef();

    const stateCounterPlus = _ => {
        setStateCounter(s => s + 1);
    }

    // const reducerCounterPlus = _ => {
    //     const action = {
    //         type: PLUS_1
    //     }
    //     dispachCounter(action);
    // }

    const stateCounterReset = _ => {
        setStateCounter(0);
    }

    // const reducerCounterReset = _ => {
    //     const action = {
    //         type: RESET
    //     }
    //     dispachCounter(action);
    // }

    const stateCounterPlus5 = _ => {
        setStateCounter(s => s + 5);
    }

    // const reducerCounterPlusMany= _ => {

    //     const action = {
    //         type: PLUS_MANY,
    //         payload: howMany
    //     }
    //     dispachCounter(action);

    // }

    const handleA = _ => {
        B.current++;
        A++;
        console.log(A);
        console.log(B.current);
    }

    useEffect(_ => {
        console.log('useEffect');
        // const h2 = document.querySelector('h2');
        const h2 = ElH2.current;
        h2.style.color = 'crimson';
        // add focus to h2
        h2.focus();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    How are you today?
                </p>
                <h1>State Counter: {stateCounter}</h1>
                <h1>Reducer Counter: {reducerCounter}</h1>
                <div className="sq-bin">
                    <button className="blue" onClick={stateCounterPlus}>+</button>
                    <button className="yellow" onClick={stateCounterReset}>0</button>
                    <button className="green" onClick={stateCounterPlus5}>+5</button>
                </div>
                <div className="sq-bin">
                    <button className="blue" onClick={_ => dispachCounter(plus1())}>+</button>
                    <button className="yellow" onClick={_ => dispachCounter(reset())}>0</button>
                    <button className="green" onClick={_ => dispachCounter(plusMany(howMany))}>+++</button>
                    <input type="number" value={howMany} onChange={e => setHowMany(parseInt(e.target.value))} />
                </div>
                <div className="sq-bin">
                <button className="blue" onClick={handleA}>A</button>
                <input type="text" ref={ElH2}/>
                </div>

            </header>
        </div>
    );
}

export default App;
