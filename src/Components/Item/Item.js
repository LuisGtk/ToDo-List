const Item = ({ title, completed, handleCompleted, index }) => {
    return (
        <li
            onClick={() => handleCompleted(index)}
            style={{ textDecoration: (completed ? "line-through" : "") }}
        >{title}</li>
    )
}

export default Item;