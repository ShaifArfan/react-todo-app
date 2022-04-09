import React, { useState, useRef } from "react";

export const TodoItem = ({
    id,
    item,
    removeTodo,
    updateTodo,
    completeTodo,
}) => {
    const inputRef = useRef(true);
    const [button, setButton] = useState(true);

    // console.log("props: ", props);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
        setButton(false);
    };

    const handleCompleteClick = (id) => {
        if (typeof completeTodo == "function") {
            completeTodo(id);
        } else {
            console.log("complete is not a function");
        }
    };

    const handleRemoveClick = (id) => {
        if (typeof removeTodo === "function") {
            removeTodo(id);
        } else {
            console.log("remove is not a function");
        }
    };

    const save = (id, value) => {
        if (typeof updateTodo === "function") {
            updateTodo({
                id,
                item: value,
            });
            inputRef.current.disabled = true;
            setButton(true);
        } else {
            console.log("save is not a function");
        }
    };

    let whichButton;
    if (button) {
        whichButton = <button onClick={changeFocus}>edit</button>;
    } else {
        whichButton = (
            <button onClick={() => save(id, inputRef.current.value)}>
                save
            </button>
        );
    }
    return (
        <li>
            <textarea ref={inputRef} disabled={inputRef} defaultValue={item} />
            {whichButton}
            <button onClick={() => handleCompleteClick(id)}>Completed</button>
            <button onClick={() => handleRemoveClick(id)}>Remove</button>
        </li>
    );
};
