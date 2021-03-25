import { createStore } from 'vuex'

import todolist from './todolist';
import account from './account';

export default createStore({
  modules: {
    todolist,
    account
  }
})
