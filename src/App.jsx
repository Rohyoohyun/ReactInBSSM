import './App.css';
import Header from './components/Header/Header';
import Editor from './components/Editor/Editor';
import List from './components/List/List';
import { useState } from 'react';

export default function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 공부하기', completed: false, date: '2025. 5. 9.' },
    { id: 2, text: '빨래하기', completed: false, date: '2025. 5. 9.' },
    { id: 3, text: '노래 연습하기', completed: false, date: '2025. 5. 9.' },
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') {
      alert('내용을 입력해주세요!');
      return;
    }

    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setTodos([...todos, { id: newId, text: newTodo, completed: false, date: dateString }]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <Editor
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
      />
      <List
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
