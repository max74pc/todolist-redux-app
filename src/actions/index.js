export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo

    };
    //console.log(todo);
}

export const removeTodo = (i) => {
    //console.log(i);
    return {
        type: 'REMOVE_TODO',
        id: i
    };
}