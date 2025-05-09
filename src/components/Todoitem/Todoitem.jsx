import './style.css';

export default function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="todo-checkbox"
        />
        <span className={todo.completed}>
          {todo.text}
        </span>
      </div>
      <div className="todo-right">
        <span className="todo-date">{todo.date}</span>
        <button onClick={() => deleteTodo(todo.id)} className="todo-delete">삭제</button>
      </div>
    </li>
  );
}
