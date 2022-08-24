import { useRef } from "react";
import { useStore } from "./store";
import { actions } from "./store";

function App() {
    const [state, dispatch] = useStore();
    const { todoInput, todoList } = state;

    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(""));

        inputRef.current.focus();
    };

    const handleRemove = (index) => {
        dispatch(actions.removeTodo(index));
    };

    return (
        <div className="App">
            <h2>Todo</h2>
            <input
                ref={inputRef}
                type="text"
                value={todoInput}
                placeholder="Enter todo..."
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
