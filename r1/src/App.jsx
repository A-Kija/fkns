import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './Components/Create';
import { useEffect, useState } from 'react';
import { read, store, destroy, lsUpdate } from './Functions/ls';
import List from './Components/List';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import axios from 'axios';

const KEY = 'colors';

function App() {

  const [colors, setColors] = useState(null);
  const [create, setCreate] = useState(null);
  const [remove, setRemove] = useState(null); // delete
  const [clear, setClear] = useState(null); // destroy
  const [edit, setEdit] = useState(null);
  const [update, setUpdate] = useState(null);


  useEffect(_ => {
    // imitate fetch from server
    setTimeout(_ => {
      setColors(read(KEY));
    }, 100);
  }, []);

  useEffect(_ => {
    if (null === create) {
      return;
    }
    const id = store(KEY, create);
    setColors(c => [{...create, id }, ...c]);
    getName(create.color, id);
  }, [create]);

  useEffect(_ => {
    if (null === clear) {
      return;
    }
    destroy(KEY, clear.id);
    setColors(c => c.filter(color => color.id !== clear.id));
    setClear(null);
    setRemove(null);
  }, [clear]);

  useEffect(_ => {
    if (null === update) {
      return;
    }
    lsUpdate(KEY, update.id, update);
    setColors(c => c.map(color => color.id === update.id ? update : color));
    getName(update.color, update.id);
    setUpdate(null);
    setEdit(null);
  }, [update]);

  const getName = (hex, id) => {
    hex = hex.replace('#', '');
    const url = 'https://www.thecolorapi.com/id?hex=' + hex;
    axios.get(url)
      .then(res => {
        const name = res.data.name.value;
        lsUpdate(KEY, id, { name });
        setColors(c => c.map(color => color.id === id ? { ...color, name } : color));
      })
      .catch(err => console.log(err));
  }


  return (
    <div className="container user-87548">
      <div className="row">
        <div className="col-5">
          <Create setCreate={setCreate} />
        </div>
        <div className="col-7">
          <List colors={colors} setRemove={setRemove} setEdit={setEdit} />
        </div>
      </div>
      <Delete remove={remove} setRemove={setRemove} setClear={setClear} />
      <Edit edit={edit} setEdit={setEdit} setUpdate={setUpdate} />  
    </div> 
  );
}

export default App;
