import React from "react";

export default function todo({todo, onClick, id}) {
    return (<li onClick={() => onClick(id)}>
        <span></span>
        {todo}
        {/*<button onClick={() => onClick(id)}>-</button>*/}
    </li>)
}
