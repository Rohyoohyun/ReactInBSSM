import React from "react";

function Editor({ todo, setTodo, handleAdd }) {
  return (
    <div className="add-section">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="새로운 Todo..."
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}

export default Editor;