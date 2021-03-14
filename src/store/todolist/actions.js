import axios from 'axios';

//Fonctions sur les listes
export async function setTodoListAPI ({ commit }, token) {
    try {
        const request = await axios.get('http://138.68.74.39/api/todolists', {headers: {authorization: 'Bearer ' + token}});
        commit('setTodoList', request.data);
    } catch(error) {
        console.log('erreur :', error);
    }
}

export function setTodoList ({ commit }, todoList) {
    commit('setTodoList', todoList);
}

export async function createList ({ commit }, [name, token]) {
    try {
        const request = await axios.post('http://138.68.74.39/api/todolist', null, {params: {name: name}, headers: {authorization: 'Bearer ' + token}});
        commit('createList', [request.data.id, request.data.name]);
    } catch(error) {
        console.log('erreur :', error);
    }
}

export function goToList ({ commit }, list) {
    commit('goToList', list);
}

//Fonctions sur les taches d'une liste
export async function createTodo ({ commit }, [name, list_id, token]) {
    try {
        const request = await axios.post('http://138.68.74.39/api/todo', null, {params: {name: name, completed: 0, todolist_id: list_id}, headers: {authorization: 'Bearer ' + token}});
        commit('createTodo', [list_id, request.data.id, request.data.name, parseInt(request.data.completed)]);
    } catch(error) {
        console.log('erreur :', error);
    }
}

export async function completeTodo ({ commit }, [todo_id, completed, todolist_id, token]) {
    try {
        const request = await axios.post('http://138.68.74.39/api/completeTodo/'+todo_id, null, {params: {completed: completed ? 0 : 1, todolist_id: todolist_id}, headers: {authorization: 'Bearer ' + token}});
        commit('completeTodo', request.data);
    } catch(error) {
        console.log('erreur :', error);
    }
}

export async function modifyTodo ({ commit }, [todo_id, name, completed, todolist_id, token]) {
    try {
        await axios.patch('http://138.68.74.39/api/todo/'+todo_id, null, {params: {name: name, completed: completed, todolist_id: todolist_id}, headers: {authorization: 'Bearer ' + token}});
        commit('updateLocalStorage');
    } catch(error) {
        console.log('erreur :', error);
    }
}

export function setFilter ({ commit }, filter) {
    commit('setFilter', filter);
}