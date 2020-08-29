export const addTodo = (todo) => {
    console.log(todo);
    return {
        type: 'ADD_TODO',
        todo

    };

}

export const removeTodo = (i) => {
    //console.log(i);
    return {
        type: 'REMOVE_TODO',
        id: i
    };
}