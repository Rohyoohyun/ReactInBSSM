
const Todoitem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
    return (
      <div className="Todoitem">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onUpdate(id)}
        />
        <div className="content"> {content} </div>
        <div className="date"> {new Date(date).toLocaleDateString()} </div>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    );
  };
  
  export default Todoitem;
  