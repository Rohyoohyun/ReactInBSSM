import './style.css';

export default function Editor({ newTodo, setNewTodo, addTodo }) {
  return (
    <div className="editor-container">
      <input
        type="text"
        className="editor-input"
        placeholder="새로운 Todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo} className="editor-btn">추가</button>
    </div>
  );
}