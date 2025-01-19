import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '@/store/todoSlice.js';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
