import { connect } from "react-redux";
import { Todos } from "../components/Todos";
import { addTodos, removeTodos, updateTodos } from "../redux/reducer";

const mapState = (state) => ({
    todos: state,
});

const mapDispatch = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodos(todo)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (item) => dispatch(updateTodos(item)),
});

export const TodosContainer = connect(mapState, mapDispatch)(Todos);
