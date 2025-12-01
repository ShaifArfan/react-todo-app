import { createSlice, nanoid } from '@reduxjs/toolkit';

// ⭐ Load saved data from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
const savedStatus = localStorage.getItem("filterStatus") || "all";
const savedCategory = localStorage.getItem("filterCategory") || "All";
const savedSearch = localStorage.getItem("searchQuery") || "";
const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

const initialState = {
  todoList: savedTodos,
  filterStatus: savedStatus,
  filterCategory: savedCategory,
  searchQuery: savedSearch,
  darkMode: savedDarkMode,      // ⭐ persists
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todoList.unshift(action.payload);
        localStorage.setItem("todoList", JSON.stringify(state.todoList));
      },

      prepare(title, category = 'Personal', priority = 'medium') {
        return {
          payload: {
            id: nanoid(),
            title,
            status: 'incomplete',
            category,
            priority,
            time: new Date().toISOString(),
          },
        };
      },
    },

    updateTodo(state, action) {
      const index = state.todoList.findIndex(
        (t) => t.id === action.payload.id
      );
      if (index !== -1) {
        state.todoList[index] = action.payload;
        localStorage.setItem("todoList", JSON.stringify(state.todoList));
      }
    },

    deleteTodo(state, action) {
      state.todoList = state.todoList.filter((t) => t.id !== action.payload);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    toggleTodo(state, action) {
      const todo = state.todoList.find((t) => t.id === action.payload);
      if (todo) {
        todo.status =
          todo.status === 'incomplete' ? 'complete' : 'incomplete';
      }
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },

    setFilterStatus(state, action) {
      state.filterStatus = action.payload;
      localStorage.setItem("filterStatus", action.payload);
    },

    setFilterCategory(state, action) {
      state.filterCategory = action.payload;
      localStorage.setItem("filterCategory", action.payload);
    },

    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      localStorage.setItem("searchQuery", action.payload);
    },

    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
  setFilterStatus,
  setFilterCategory,
  setSearchQuery,
  toggleDarkMode,
} = todoSlice.actions;

export default todoSlice.reducer;
