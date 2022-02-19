import React from 'react';
import { Comments } from './components/Comments/Comments.jsx';

import { Login } from './components/LoginFrom.jsx/Login';
import { Post } from './components/Posts/Post';
import { TodoForm } from './components/Todos/TodoForm';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Login />
      <TodoForm />
      <Post />
      </div>
      <Comments />
    </div>
  );
}

export default App;
