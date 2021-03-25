<template>
  <div id='nav'>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">TODO</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <li class="nav-item">
                <router-link to='/' class="nav-link ">Home</router-link>
                </li>
              <li class="nav-item">
                <router-link to='/Account'  class="nav-link ">Login</router-link>
              </li>
              
            </div>
          </div>
      </nav>
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