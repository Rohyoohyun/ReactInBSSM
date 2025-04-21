import React from "react";

function Todoitem({ todo, handleDelete }) {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={todo.done}/>
      <span>{todo.text}</span>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default Todoitem;