import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import storeReducer from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let todos = [
    'Fare il corso React',
    'Adorazione alle 23:00',
    'Andare dal veterinario giovedì 20/08 ore 17:00',
    'Andare in banca di Piacenza a Carpaneto giovedì 20/08 alle 9:00'
];

const store = createStore(storeReducer, {todos: [...todos]});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
