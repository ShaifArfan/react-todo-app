export const getTodos = (state) => state;

export const getActive = (state) =>
    state.filter((todo) => todo.completed === false);

export const getCompleted = (state) =>
    state.filter((todo) => todo.completed === true);
