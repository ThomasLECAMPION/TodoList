//import axios from 'axios';

export function setFilter ({ commit }, filter) {
    commit('setFilter', filter);
}

export function destroyTodo ({ commit }, [listID, todo]) {
    commit('destroyTodo', [listID, todo]);
}

export function createTodo ({ commit }, listID) {
    commit('createTodo', listID);
}