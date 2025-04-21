import React from "react";
import TodoItem from "./Todoitem";

function List({ todos, handleDelete, search, setSearch }) {
  return (
    <div>
      <h3>Todo List 🌱</h3>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default List;