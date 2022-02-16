import { configureStore } from '@reduxjs/toolkit';

import LoginSlice from '../features/LoginSlice';
import TodoSlice from '../features/TodoSlice';
import PostSlice from '../features/PostSlice';

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    todos: TodoSlice,
    posts: PostSlice,
  }
})