export function getTodoList(state) {
    return (listID) => {
        return state.todoList.find(list => list.id === listID);
    };
}

export function getFilter(state) {
    return state.filter;
}