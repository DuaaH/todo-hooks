import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  function handleChange(e) {
    e.preventDefault()
    setNewTodo(e.target.value)
  }

  function handleNewTodo(e) {
    e.preventDefault()
    if (newTodo == '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo }])
    e.target.reset()
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id))
  }


  return (
    <div className="App">
      <h1>todo</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder="add todo .." onChange={handleChange} />
        <ul>
          {todos.map((todo) =>
            (
              <li key={todo.id}>{todo.text}
                <a href='#' onClick={() => removeTodo(todo.id)}>
                  x
            </a>
              </li>
            )
          )}
        </ul>
      </form>
    </div>
  );
}

export default App;
