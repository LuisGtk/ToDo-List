import { useState } from 'react';
import './App.css';
import ToDoListData from './data/toDoListData'
import ItemForm from './Components/ItemForm/ItemForm'


function App() {

  const [listData, setListData] = useState(ToDoListData);
  const [toDoItem, setToDoNewItem] = useState({});

  return (
    <div className="App">
      <h1>My To Do List:</h1>
      <ItemForm setToDoNewItem={setToDoNewItem} />
    </div>
  );
}

export default App;