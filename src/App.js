import React from 'react';

import { Login } from './components/LoginFrom.jsx/Login';
import { Post } from './components/Posts/Post';
import { TodoForm } from './components/Todos/TodoForm';

function App() {
  return (
    <div className="App">
      <Login />
      <TodoForm />
      <Post />
    </div>
  );
}

export default App;
