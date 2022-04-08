import React, { useRef, useState } from "react";
import { v4 } from "uuid";

export const Todos = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setTodo(e.target.value);
    };

    const handleAddClick = () => {
        return props.addTodo({
            id: v4(),
            item: todo,
            completed: false,
        });
    };
    console.log("props: ", props);

    return (
        <div className="addTodos">
            <input
                type="text"
                // value={todo}
                onChange={(e) => handleChange(e)}
                className="todo-input"
            />
            <button className="add-btn" onClick={() => handleAddClick()}>
                Add
            </button>
            <br />
            <ul>
                {props.todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodos}
                        />
                    );
                    {
                        /* return <li key={todo.id}>{todo.item}</li>; */
                    }
                })}
            </ul>
        </div>
    );
};

const TodoItem = ({ id, item, completed, removeTodo, updateTodo }) => {
    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    const handleRemoveClick = (id) => {
        if (typeof removeTodo === "function") {
            removeTodo(id);
        }
    };

    const update = (id, value, e) => {
        if (typeof updateTodo === "function") {
            console.log(e.which);
            // 13 - key code for enter
            if (e.which === 13) {
                updateTodo({
                    id,
                    item: value,
                });

                inputRef.current.disabled = true;
            }
        }
    };

    return (
        <li>
            <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item}
                onKeyPress={(e) => update(id, inputRef.current.value, e)}
            />
            <button onClick={() => handleRemoveClick(id)}>Remove</button>
            <button onClick={changeFocus}>Edit</button>
        </li>
    );
};
