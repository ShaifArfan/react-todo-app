import React, { Provider } from "react";

// import "./App.css";
import "./css/main.css";
import { DisplayTodosContainer } from "./containers/DisplayTodosContainer";
import { TodosContainer } from "./containers/TodosContainer";

export const App = () => {
    return (
        <div className="App">
            <h1>ToDo App</h1>
            <TodosContainer />
            <DisplayTodosContainer />
        </div>
    );
};
