import { configureStore } from '@reduxjs/toolkit';
import postReducer from './components/slices/postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});