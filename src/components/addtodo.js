import React, {Fragment} from "react";

export default function addtodoComponent({addTodo}) {
    let todoInput;
    return (
        <Fragment>
            <input ref={node => {
                todoInput = node
            }}/>
            <button onClick={
                () => {
                    addTodo(todoInput.value);
                    todoInput.value = '';
                }
            }
            >Aggiungi
            </button>
        </Fragment>
    )
}
