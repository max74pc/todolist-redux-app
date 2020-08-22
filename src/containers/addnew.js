import {connect} from 'react-redux';
import addTodoComponent from '../components/addtodo';
import {addTodo} from '../actions/index';

/*
const mapDispatchToProps = (dispatch) => {
    return {
        addnew: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}
export default connect(null,mapDispatchToProps)(addTodoComponent);
*/

const methods = {
    addTodo
}
export default connect(null, methods)(addTodoComponent);