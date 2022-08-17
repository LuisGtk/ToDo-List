import { useState } from 'react';
import './App.css';
import ToDoListData from './data/toDoListData'


function App() {

  const [listData, setListData] = useState(ToDoListData);
  const [toDoItem, setToDoNewItem] = useState({});

  return (
    <div className="App">
      <h1>My To Do List:</h1>

    </div>
  );
}

export default App;