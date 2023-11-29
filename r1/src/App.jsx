import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './Components/Create';
import { useEffect, useState } from 'react';
import { read, store } from './Functions/ls';
import List from './Components/List';

const KEY = 'colors';

function App() {

  const [colors, setColors] = useState(null);
  const [create, setCreate] = useState(null);


  useEffect(_ => {
    // imitate fetch from server
    setTimeout(_ => {
      setColors(read(KEY));
    }, 1000);

    console.log(read(KEY));
  }, []);


  useEffect(_ => {
    if (null === create) {
      return;
    }
    const id = store(KEY, create);

    setColors(c => [{...create, id }, ...c]);

  }, [create]);



  return (
    <div className="container user-87548">
      <div className="row">
        <div className="col-5">
          <Create setCreate={setCreate} />
        </div>
        <div className="col-7">
          <List colors={colors} />
        </div>
      </div>
    </div>
  );
}

export default App;
