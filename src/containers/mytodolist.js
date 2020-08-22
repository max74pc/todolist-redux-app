import TodoList from '../components/todolist';
import {connect} from 'react-redux';
import {removeTodo} from "../actions/index";

const mapStateToProps = (state, ownProps) => {
    return {
        todos: [...state.todos]
    }
}
const myConnect = connect(mapStateToProps, {removeTodo});
const MyTodoList = myConnect(TodoList);

export default MyTodoList;