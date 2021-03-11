export function setFilter(state, filter) {
    state.filter = filter;
}

export function destroyTodo(state, [listID, todo]) {
    let todos = state.todoList.find(list => list.id === listID).todos;
    todos.splice(todos.indexOf(todo),1);
}

export function createTodo(state, listID) {
    let todos = state.todoList.find(list => list.id === listID).todos;
    todos.push({id: todos[todos.length-1].id+1, name: 'tâche indéfinie', completed: false});
}