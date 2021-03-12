<template>
  <div v-if="getTodoLists.length" class="liste">

    <h1>{{ getTodoList.name }}</h1>

    <ul> <!-- Liste des taches -->
      <li>
        <button v-on:click="createTodo">Ajouter une tâche</button>
      </li>
      <li v-for="todo in getTodoList.todos" :key="todo.id">
        <div v-if="filtered(todo.completed)"> <!-- affichage des taches selon le filtrage -->
          <input type='checkbox' v-model="todo.completed" v-bind:key="todo.id"> 
          <input type="text" v-model="todo.name" v-bind:key="todo.id">
          <button v-on:click="destroyTodo(todo)" v-bind:key="todo.id">x</button>
        </div>
      </li>
    </ul>

    <p>{{ getTodoList.todos.filter(todo => !todo.completed).length }} tâches restantes</p> 
    <!-- Liste des filtres disponibles -->
    <button v-on:click="setFilter('all')">Toutes</button>
    <button v-on:click="setFilter('remaining')">A faire</button>
    <button v-on:click="setFilter('done')">Faites</button>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'TodoList',
    methods: {
      ...mapActions('todolist', ['setFilter', 'destroyTodo', 'createTodo']),
      filtered(isCompleted) {
        return (this.getFilter=='all' || (this.getFilter=='remaining' && isCompleted==false) || (this.getFilter=='done' && isCompleted==true));
      },
    },
    computed: {
      ...mapGetters('todolist', ['getTodoList', 'getFilter', 'getLoadedListID', 'getTodoLists']),
    }
  }
</script>

<style scoped>
  .liste {
    background-color: rgb(28, 179, 166);
  }
  ul {
    list-style-type: none;
  }
</style>