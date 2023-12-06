import './buttons.scss';
import './sliders.scss';
import './App.scss';
import Circle from './Components/043/Circle';
import CircleProvider from './Components/043/CircleContext';
import Slider from './Components/043/Slider';
import Reset from './Components/043/Reset';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    How are you?
                </p>
                <CircleProvider>
                    <Slider />
                    <div className="circle-container">
                        <Circle />
                        <Circle />
                    </div>
                    <Reset />
                </CircleProvider>
            </header>
        </div>
    );
}

export default App;
