import React, { useState } from "react";
import { v4 } from "uuid";
import { TodoItem } from "./TodoItem";

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
    // console.log("props: ", props);

    return (
        <div className="addTodos">
            <input
                type="text"
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
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
