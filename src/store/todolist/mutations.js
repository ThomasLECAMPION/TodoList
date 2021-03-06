//Fonctions sur les listes
export function setTodoList(state, todoList) { //Utile pour charger todoList via le local ou l'API
    state.todoList = todoList;
    updateLocalStorage(state);
    if(state.todoList[0]) { //On ouvre automatiquement la premiere liste -> QOL++
        state.loadedListID = state.todoList[0].id;
    }
}

export function updateLocalStorage(state) {
    localStorage.todoList = JSON.stringify(state.todoList);
}

export function createList(state, [id, name]) {
    state.todoList.push({id: id, name: name, todos: []});
    state.loadedListID = id;
    updateLocalStorage(state);
}

export function goToList(state, list) {
    state.loadedListID = list.id;
}

export function destroyList(state, todolist) {
    state.todoList.splice(state.todoList.indexOf(todolist),1);
    updateLocalStorage(state);
}

//Fonctions sur les taches d'une liste
export function createTodo(state, [todo_id, name, completed]) {
    let todos = state.todoList.find(list => list.id === state.loadedListID).todos;
    todos.push({id: todo_id, name: name, completed: Boolean(completed)});
    updateLocalStorage(state);
}

export function completeTodo(state, todoAPI) {
    let todo = state.todoList.find(list => list.id === state.loadedListID).todos.find(todo => todo.id === todoAPI.id);
    todo.completed = Boolean (todoAPI.completed);
    updateLocalStorage(state);
}

export function setFilter(state, filter) {
    state.filter = filter;
}

export function destroyTodo(state, todo) {
    let todos = state.todoList.find(list => list.id === state.loadedListID).todos;
    todos.splice(todos.indexOf(todo),1);
    updateLocalStorage(state);
}