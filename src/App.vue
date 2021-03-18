<template>
  <div id='nav'>
    <router-link to='/'>Home</router-link>
    <router-link to='/Account'>Login</router-link>
  </div>
  <router-view />
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    //Décharge le localStorage dans le store quand l'application est montée
    mounted() {
      if(localStorage.token) {this.setToken(localStorage.token)}
      if(JSON.parse(localStorage.todoList)) {this.setTodoList(JSON.parse(localStorage.todoList))}
    },
    methods: {
      ...mapActions('account', ['setToken']),
      ...mapActions('todolist', ['setTodoList']),
    },
  }
</script>

<style>
  ul {
    list-style-type: none;
  }
  .active {
    color: rgb(28, 179, 166);
    font-weight: bold;
  }
  div {
    font-family: Calibri;
  }
</style>