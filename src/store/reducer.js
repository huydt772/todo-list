import { ADD_TODO, REMOVE_TODO, SET_TODO_INPUT } from "./constant";

const initState = {
    todoInput: "",
    todoList: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case REMOVE_TODO:
            const newTodoList = [...state.todoList];
            newTodoList.splice(action.payload, 1);
            return {
                ...state,
                todoList: newTodoList,
            };
        default:
            throw new Error("Invalid action");
    }
};

export { initState };
export default reducer;
