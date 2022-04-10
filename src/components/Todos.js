import React, { useState } from "react";
import { v4 } from "uuid";

export const Todos = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setTodo(e.target.value);
    };

    const handleAddClick = (e) => {
        const todoObj = {
            id: v4(),
            item: todo,
            completed: false,
        };
        e.target.value = "lalalal";
        console.log(e.target.value);
        return props.addTodo(todoObj);
    };
    // console.log("props: ", props);

    return (
        <div className="addTodos">
            <input
                type="text"
                name="inputTodo"
                className="todo-input"
                onChange={(e) => handleChange(e)}
            />
            <button className="add-btn" onClick={(e) => handleAddClick(e)}>
                Add
            </button>
        </div>
    );
};
