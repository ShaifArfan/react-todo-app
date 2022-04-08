import React, { StrictMode } from "react";

import ReactDOM from "react-dom";
import { App } from "./App";
import "./styles/GlobalStyles.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById("root")
);
