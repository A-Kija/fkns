import { useState } from 'react';
import './buttons.scss';
import './App.scss';
import Gran from './Components/042/Gran';
import { FamilyContext } from './Components/042/FamilyContext';


function App() {

    const [counter1, setCounter1] = useState(0);

  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is CONTEXT
        </p>
        <button className="pink" onClick={_ => setCounter1(c => c + 1)}>Counter1: {counter1}</button>
        <FamilyContext.Provider>
            <Gran counter1={counter1} />
        </FamilyContext.Provider>

        </header>
    </div>
  );
}

export default App;
