import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import LoginSlice from '../features/LoginSlice';
import TodoSlice from '../features/TodoSlice';
import PostSlice from '../features/PostSlice';
import { commentsApi } from '../service/CommentsSerivce';

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    todos: TodoSlice,
    posts: PostSlice,
    [commentsApi.reducerPath]: commentsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commentsApi.middleware)
})