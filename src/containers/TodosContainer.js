import { connect } from "react-redux";
import { Todos } from "../components/Todos";
import {
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos,
} from "../redux/reducer";
import { getTodos } from "../redux/selector";

const mapState = (state) => ({
    todos: getTodos(state),
});

const mapDispatch = (dispatch) => ({
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
});

export const TodosContainer = connect(mapState, mapDispatch)(Todos);
