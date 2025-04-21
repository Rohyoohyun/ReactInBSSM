const List = ({ todos, handleDelete, search, setSearch }) => {
  return (
    <div className="list">
      <h4>Todo List 🌱</h4>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="todos_wrapper">
        {todos.map((todo) => (
          <li key={todo.id} className="todoitem">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
            />
            <div
              className="content"
              style={{
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </div>
            <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;