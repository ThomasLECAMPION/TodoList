<template>
  <div class="liste">

    <h1>{{ getTodoList(1).name }}</h1>

    <ul> <!-- Liste des taches -->
      <li>
        <button v-on:click="createTodo(1)">Ajouter une tâche</button>
      </li>
      <li v-for="todo in getTodoList(1).todos" :key="todo.id">
        <div v-if="filtered(todo.completed)"> <!-- affichage des taches filtrees -->
          <input type='checkbox' v-model="todo.completed" v-bind:key="todo.id"> 
          <input v-model="todo.name" v-bind:key="todo.id">
          <button v-on:click="destroyTodo([1,todo])" v-bind:key="todo.id">x</button>
        </div>
      </li>
    </ul>

    <p>{{ getTodoList(1).todos.filter(todo => !todo.completed).length }} tâches restantes</p> 
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
  props: ['time'],
  methods: {
    ...mapActions('todolist', ['setFilter', 'destroyTodo', 'createTodo']),
    filtered(isCompleted) {
      return (this.getFilter=='all' || (this.getFilter=='remaining' && isCompleted==false) || (this.getFilter=='done' && isCompleted==true));
    },
  },
  computed: {
    ...mapGetters('todolist', ['getTodoList', 'getFilter']),
  }
}
</script>

<style scoped>
.liste {
  background-color: rgb(28, 179, 166);
}
</style>
