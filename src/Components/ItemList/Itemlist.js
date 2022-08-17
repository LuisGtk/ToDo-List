function ItemList( {listData, toDoItem}){
    return(
        <>
            <div>
                <h2>To Do Items:</h2>
                {listData.map((list, index) =>{
                    if(list.completed === false){
                    return(
                    <ul key={index}>
                        <li>{list.title} <button>COMPLETE</button></li>
                        
                    </ul>
                    )}
                })}
                <li>{toDoItem.title}</li>
                
            </div>
            <div>
                <h2>Completed</h2>
                {listData.map((list, index) =>{
                    if(list.completed === true){
                        return(
                            <ul key={index}>
                                <li>{list.title} <button>REMOVE</button></li>
                            </ul>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default ItemList;