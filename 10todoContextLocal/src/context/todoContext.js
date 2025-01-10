import React, { useContext } from 'react';

export const TodoContext = React.createContext({
    todos: [
        {
            id: Date.now(),
            todo: "todos",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    toggleComplete: (id)=>{}
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}