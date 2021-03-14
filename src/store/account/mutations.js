export function setToken (state, token) {
    state.token = localStorage.token = token;
}