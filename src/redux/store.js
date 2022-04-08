import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

// const middleware = [logger, thunk];

export const store = configureStore({
    reducer,
    // composeWithDevTools(applyMiddleware(...middleware)),
});
