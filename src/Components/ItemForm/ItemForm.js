import { useState } from 'react';

function NewForm({ setToDoNewItem, setListData, listData, toDoItem }){

    const [title, setNewTitle] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        setToDoNewItem({
            title: title,
            completed: false
        })
        setListData([...listData,toDoItem])
        setNewTitle('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="newItem">New Item</label>
            <input 
            type="text"
            name="newItem"
            id="newItem"
            placeholder="New Item"
            value={title}
            onChange={event => setNewTitle(event.target.value)}
            />
        </form>
    )
}

export default NewForm;