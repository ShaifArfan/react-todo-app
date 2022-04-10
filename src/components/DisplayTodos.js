import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

export const DisplayTodos = (props) => {
    const [sort, setSort] = useState("active");

    let todosCase;
    if (sort === "active") {
        todosCase =
            props.activeTodos.length > 0
                ? props.activeTodos.map((todo) => (
                      <TodoItem
                          key={todo.id}
                          {...todo}
                          removeTodo={props.removeTodo}
                          updateTodo={props.updateTodo}
                          completeTodo={props.completeTodo}
                      />
                  ))
                : null;
    } else if (sort === "completed") {
        todosCase =
            props.completedTodos.length > 0
                ? props.completedTodos.map((todo) => (
                      <TodoItem
                          key={todo.id}
                          {...todo}
                          removeTodo={props.removeTodo}
                          updateTodo={props.updateTodo}
                          completeTodo={props.completeTodo}
                      />
                  ))
                : null;
    } else if (sort === "all") {
        todosCase =
            props.todos.length > 0 ? (
                props.todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                    />
                ))
            ) : (
                <p>Nothing ToDo!</p>
            );
        // null;
    } else {
        <p>Error?!</p>;
    }

    return (
        <div className="displaytodos">
            <div className="buttons">
                <button onClick={() => setSort("active")}>Active</button>
                <button onClick={() => setSort("completed")}>Completed</button>
                <button onClick={() => setSort("all")}>All</button>
            </div>
            <ul>{todosCase}</ul>
        </div>
    );
};
