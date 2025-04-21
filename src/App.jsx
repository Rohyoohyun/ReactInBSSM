import React, { useState } from "react";
import Header from "./Header";
import Editor from "./Editor";
import List from "./List";
import "./App.css";

export default function App() {
  const today = new Date();

  const [todo, setTodo] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "React 공부하기", date: today, done: false },
    { id: 2, text: "빨래하기", date: today, done: false },
    { id: 3, text: "노래 연습하기", date: today, done: false },
  ]);

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: todo, date: new Date(), done: false },
      ]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filtered = todos.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header today={today} />
      <Editor todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <List todos={filtered} handleDelete={handleDelete} search={search} setSearch={setSearch} />
    </div>
  );
}