import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },
        removeTodos: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        updateTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        // id: action.payload.id,
                        item: action.payload.item,
                        // completed: true,
                    };
                }
                return todo;
            });
        },
    },
});

export const { addTodos, removeTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
