import { ADD_TODO, REMOVE_TODO, SET_TODO_INPUT } from "./constant";

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const removeTodo = (payload) => ({
    type: REMOVE_TODO,
    payload,
});
