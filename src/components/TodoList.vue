<template>
  <div class="card">
      <div class="card-header">
          <h1>{{ getTodoList.name }} ({{ getTodoList.todos.filter(todo => !todo.completed).length }} tâches à faire)</h1>
      </div>
      <div class="card-body">
        <ul>
        </ul>
        <ul class="list-group">
           <!-- Liste des taches -->
           <li  class="list-group-item">
            <input type="text" v-model="todo_name" placeholder="Nouvelle tâche">
            <button v-on:click="createTodo([todo_name, getLoadedListID, getToken]); todo_name='';">Ajouter une tâche</button>
          </li>
          <li  class="list-group-item" v-for="todo in getTodoList.todos" :key="todo.id">
            <div v-if="filtered(todo.completed)"> <!-- affichage des taches selon le filtrage -->
              <input v-if="todo.completed" checked type='checkbox' v-on:click="completeTodo([todo.id, todo.completed, getTodoList.id, getToken])">
              <input v-else type='checkbox' v-on:click="completeTodo([todo.id, todo.completed, getTodoList.id, getToken])"> 
              <input type="text" v-model="todo.name" v-on:blur="modifyTodo([todo.id, todo.name, todo.completed, getLoadedListID, getToken])">
            </div>
          </li>
        </ul>
      </div>
      
      <div class="card-footer text-muted">
        <!-- Liste des filtres disponibles -->
        <legend>Filtres: </legend>
        <button v-on:click="setFilter('all')" v-bind:class="{ active: getFilter=='all' }">Toutes</button>
        <button v-on:click="setFilter('remaining')" v-bind:class="{ active: getFilter=='remaining' }">A faire</button>
        <button v-on:click="setFilter('done')" v-bind:class="{ active: getFilter=='done' }">Faites</button>
      </div>
  </div>
  
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'TodoList',
    data: function() {
      return {
        todo_name: '',
      }
    },
    methods: {
      ...mapActions('todolist', ['setFilter', 'createTodo', 'completeTodo', 'modifyTodo', 'destroyTodo']),
      //Doit-on afficher la tâche? (par rapport au filtre sélectionné)
      filtered(isCompleted) {
        return (this.getFilter=='all' || (this.getFilter=='remaining' && !isCompleted) || (this.getFilter=='done' && isCompleted));
      },
    },
    computed: {
      ...mapGetters('todolist', ['getTodoList', 'getFilter', 'getLoadedListID']),
      ...mapGetters('account', ['getToken']),
    }
  }
</script>

<style scoped>
  .liste {
    background: rgb(28, 179, 166);
  }
</style>