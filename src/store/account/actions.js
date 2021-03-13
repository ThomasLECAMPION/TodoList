import axios from "axios";

export async function login ({ commit }, [email, password]) {
    try {
        const request = await axios.post('http://138.68.74.39/api/login', null, {params: {email: email, password: password}});
        commit('setToken', request.data.token);
    } catch(error) {
        console.log('erreur :', error);
    }
}

export async function register ({ commit }, [name, email, password]) {
    try {
        const request = await axios.post('http://138.68.74.39/api/register', null, {params: {name: name, email: email, password: password}});
        commit('setToken', request.data.token);
    } catch(error) {
        console.log('erreur :', error);
    }
}

export function disconnect ({ commit }) {
    commit('setToken', '');
}

export function setToken ({ commit }, token) {
    commit('setToken', token);
}