/* Fonctions TodoList.vue */
export function setFilter(state, filter) {
    state.filter = filter;
}

export function destroyTodo(state, todo) {
    let todos = state.todoList.find(list => list.id === state.loadedListID).todos;
    todos.splice(todos.indexOf(todo),1);
}

export function createTodo(state) {
    let todos = state.todoList.find(list => list.id === state.loadedListID).todos;
    if(!todos.length) { //S'il n'y a pas de todo dans la liste
        todos.push({id: 1, name: 'Nouvelle tâche', completed: false});
    }
    else {
        todos.push({id: todos[todos.length-1].id+1, name: 'Nouvelle tâche', completed: false});
    }
}

/* Fonctions Sidebar.vue */
export function createList(state) {
    if(!state.todoList.length) { //S'il n'y a pas de liste
        state.todoList.push({id: 1, name: 'Nouvelle liste', todos: []});
    }
    else {
        state.todoList.push({id: state.todoList[state.todoList.length-1].id+1, name: 'Nouvelle liste', todos: []});
    }
}

export function destroyList(state, list) {
    if(state.loadedListID != list.id) { //La liste est detruite si elle n'est pas chargee
        state.todoList.splice(state.todoList.indexOf(list),1);
    }
    else if(state.todoList.length == 1) { //Si c'est la seule liste
        state.todoList.splice(state.todoList.indexOf(list),1);
        state.loadedListID = 1;
    }
}

export function goToList(state, list) {
    state.loadedListID = list.id;
}