import React, {Component} from 'react';
import './App.css';
import {createStore} from 'redux'
import TodoList from './components/todolist'
import Header from './components/header'

let todos = [
    'Fare il corso React',
    'Adorazione alle 23:00',
    'Andare dal veterinario giovedì 20/08 ore 17:00',
    'Andare in banca di Piacenza a Carpaneto giovedì 20/08 alle 9:00'
];

function storeReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_TODO' :
            return {
                todos: [
                    action.todo,
                    ...state.todos
                ]
            }
        case 'REMOVE_TODO' :
            return {
                todos: [
                    ...state.todos.slice(0, action.id),
                    ...state.todos.slice(action.id + 1)
                ]
            }
        default:
            return {...state};

    }

}


const store = createStore(storeReducer, {todos: [...todos]});


class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };

        this.todoInput = React.createRef();
    }

    componentDidMount() {

        this.setState({todos: [...store.getState().todos]});
        store.subscribe(() => {
            console.log(store.getState());
            this.setState({todos: [...store.getState().todos]});
        })
    }

    addTodo = () => {
        const todo = this.todoInput.current.value;
        store.dispatch({
            type: 'ADD_TODO',
            todo

        });
        //console.log(todo);
    }
    removeTodo = (i) => {
        console.log(i)
        store.dispatch({
            type: 'REMOVE_TODO',
            id: i
        });
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <input ref={this.todoInput}/>
                <button onClick={this.addTodo}>Aggiungi</button>
                <TodoList todos={todos}/>
            </div>
        );
    }
}


export default App;
