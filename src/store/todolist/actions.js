/* Fonctions TodoList.vue */
export function setFilter ({ commit }, filter) {
    commit('setFilter', filter);
}

export function destroyTodo ({ commit }, todo) {
    commit('destroyTodo', todo);
}

export function createTodo ({ commit }) {
    commit('createTodo');
}

/* Fonctions Sidebar.vue */
export function createList ({ commit }) {
    commit('createList');
}

export function destroyList ({ commit }, list) {
    commit('destroyList', list);
}

export function goToList ({ commit }, list) {
    commit('goToList', list);
}