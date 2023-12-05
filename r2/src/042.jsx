import { useState } from 'react';
import './buttons.scss';
import './App.scss';
import Gran from './Components/042/Gran';
import { FamilyContext } from './Components/042/FamilyContext';
import { AnotherContext } from './Components/042/AnotherContext';


function App() {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const button = <button className="pink">HELLO</button>;



  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is CONTEXT
        </p>
        <button className="pink" onClick={_ => setCounter1(c => c + 1)}>Counter1: {counter1}</button>
        <button className="green" onClick={_ => setCounter2(c => c + 1)}>Counter2: {counter2}</button>
        <AnotherContext.Provider value={
          {
            hi: 'How are you?',
            button
          }
        }>


          <FamilyContext.Provider value={
            {
              counter2: counter2,
              hello: 'Hello from context'
            }
          }>
            <Gran counter1={counter1} />
          </FamilyContext.Provider>
        </AnotherContext.Provider>

      </header>
    </div>
  );
}

export default App;
