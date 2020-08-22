import React from "react";
import Todo from './todo';

export default function todolist({todos, removeTodo}){
  return(  <ul>
        {
            todos.map((todo, i) => <Todo id={i} key={i} onClick={removeTodo} todo={todo}/>)
        }
    </ul>)
}
