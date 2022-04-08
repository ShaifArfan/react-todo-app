import React, { Provider } from "react";

import "./App.css";
import { TodosContainer } from "./containers/TodosContainer";

export const App = () => {
    return (
        <div className="App">
            <TodosContainer />
        </div>
    );
};
