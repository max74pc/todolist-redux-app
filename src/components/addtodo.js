import React from "react";

export default function addtodoComponent({addTodo}) {
    let todoInput;
    return (
        <div className='addtodo'>
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
        </div>
    )
}
