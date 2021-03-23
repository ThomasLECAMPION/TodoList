<template>
  <ul class='liste'> <!-- Liste des listes -->
    <li>
      <input type="text" v-model="list_name" placeholder="Nouvelle liste">
      <button v-on:click="createList([list_name, getToken]); list_name='';">Ajouter une liste</button>
    </li>
    <li v-for="list in getTodoLists" :key="list.id">
      <button v-on:click="destroyList([list, getToken])">x</button>
      <label v-on:click="goToList(list)" v-bind:class="{active: list.id == getLoadedListID}"> {{ list.name }} ({{ list.todos.filter(todo => !todo.completed).length }})</label>
    </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Sidebar',
        data: function() {
          return {
            list_name: '',
          }
        },
        methods: {
            ...mapActions('todolist', ['createList', 'goToList', 'destroyList']),
        },
        computed: {
            ...mapGetters('todolist', ['getTodoLists', 'getLoadedListID']),
            ...mapGetters('account', ['getToken']),
        },
    }
</script>