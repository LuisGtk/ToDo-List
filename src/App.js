import { useState } from 'react';
import './App.css';
import ToDoListData from './data/toDoListData'
import ItemForm from './Components/ItemForm/ItemForm'
import ItemList from './Components/ItemList/ItemList'


function App() {

  const [listData, setListData] = useState(ToDoListData);
  const [toDoItem, setToDoNewItem] = useState({});

  return (
    <div className="App">
      <h1>My To Do List:</h1>
      <ItemForm 
      setToDoNewItem={setToDoNewItem}
        setListData={setListData}
        listData={listData}
        toDoItem={toDoItem}
      />
       <ItemList
          listData={listData}
          toDoItem={toDoItem}
           />
    </div>
  );
}

export default App;