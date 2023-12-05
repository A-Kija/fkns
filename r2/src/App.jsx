import './buttons.scss';
import './App.scss';
import Circle from './Components/043/Circle';
import CircleProvider from './Components/043/CircleContext';



function App() {

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    How are you?
                </p>
                <CircleProvider>
                    <div className="circle-container">
                        <Circle />
                        <Circle />
                    </div>
                </CircleProvider>
            </header>
        </div>
    );
}

export default App;
