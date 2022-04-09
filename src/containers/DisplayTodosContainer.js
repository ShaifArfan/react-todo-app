import { connect } from "react-redux";
import { DisplayTodos } from "../components/DisplayTodos";

const mapState = (state) => ({
    todos: getTodos(state),
});

const mapDispatch = (dispatch) => ({});

export const DisplayTodosContainer = connect(
    mapState,
    mapDispatch
)(DisplayTodos);
