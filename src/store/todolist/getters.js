export function getTodoList(state) {
    return state.todoList.find(list => list.id === state.loadedListID);
}

export function getFilter(state) {
    return state.filter;
}

export function getLoadedListID(state) {
    return state.loadedListID;
}

export function getTodoLists(state) {
    return state.todoList;
}