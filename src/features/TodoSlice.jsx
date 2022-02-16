import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleCompleteTodo: (state, action) => {
            const obj = state.todos.find(todo => todo.id === action.payload)
            obj.completed = !obj.completed
            
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {createTodo, toggleCompleteTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer