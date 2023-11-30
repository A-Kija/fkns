import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './Components/Create';
import { useEffect, useState } from 'react';
import { read, store, destroy, lsUpdate } from './Functions/ls';
import List from './Components/List';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import axios from 'axios';
import Messages from './Components/Messages';
import { v4 as uuidv4 } from 'uuid';

const KEY = 'colors';

function App() {

  const [colors, setColors] = useState(null);
  const [create, setCreate] = useState(null);
  const [remove, setRemove] = useState(null); // delete
  const [clear, setClear] = useState(null); // destroy
  const [edit, setEdit] = useState(null);
  const [update, setUpdate] = useState(null);
  const [messages, setMessages] = useState([]);


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
    addMessage('success', 'Color added');
  }, [create]);

  useEffect(_ => {
    if (null === clear) {
      return;
    }
    destroy(KEY, clear.id);
    setColors(c => c.filter(color => color.id !== clear.id));
    setClear(null);
    setRemove(null);
    addMessage('danger', 'Color removed');
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
    addMessage('success', 'Color updated');
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

  const addMessage = (type, text) => {
    const id = uuidv4();
    setMessages(m => [{ id, type, text }, ...m]);
    setTimeout(_ => {
      setMessages(m => m.filter(message => message.id !== id));
    }, 5000);
  }

  const removeMessage = id => {
    setMessages(m => m.filter(message => message.id !== id));
  }


  return (
    <div className="container user-87548">
      <div className="row">
        <div className="col-5">
          <Create setCreate={setCreate} addMessage={addMessage} />
        </div>
        <div className="col-7">
          <List colors={colors} setRemove={setRemove} setEdit={setEdit} />
        </div>
      </div>
      <Delete remove={remove} setRemove={setRemove} setClear={setClear} />
      <Edit edit={edit} setEdit={setEdit} setUpdate={setUpdate} /> 
      <Messages messages={messages} removeMessage={removeMessage} /> 
    </div> 
  );
}

export default App;
