import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1,
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name: 'todo', 
    initialState, 
    reducers: {
        addTodo: (state, action) => {},
        removeTodo: () => {},
    }
})