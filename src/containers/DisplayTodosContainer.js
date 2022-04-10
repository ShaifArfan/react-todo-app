import { connect } from "react-redux";
import { getTodos, getActive, getCompleted } from "../redux/selector";
import { DisplayTodos } from "../components/DisplayTodos";
import {
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos,
} from "../redux/reducer";

const mapState = (state) => ({
    todos: getTodos(state),
    activeTodos: getActive(state),
    completedTodos: getCompleted(state),
});

const mapDispatch = (dispatch) => ({
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
});

export const DisplayTodosContainer = connect(
    mapState,
    mapDispatch
)(DisplayTodos);
