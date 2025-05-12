import TodoItem from '../Todoitem/Todoitem';
import './style.css';

export default function List({ todos, deleteTodo, toggleComplete, searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="list-header">Todo List 🌱</div>
      <div className="list-search">
        <input
          type="text"
          className="list-search-input"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))
        ) : null}
      </ul>
    </>
  );
}
