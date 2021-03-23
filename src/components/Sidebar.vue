<template>
  <ul class='liste mr-5 nav flex-column'> <!-- Liste des listes -->
    <li>
      <input type="text" v-model="list_name" placeholder="Nouvelle liste" class="form-control mb-2 nav-item">
      <button v-on:click="createList([list_name, getToken]); list_name='';" class="btn btn-primary">Ajouter une liste</button>
    </li>
    <li v-for="list in getTodoLists" :key="list.id" class="nav-item">
      <div>
        <label v-on:click="goToList(list)" v-bind:key="list.id" v-bind:class="{active: list.id == getLoadedListID}"> {{ list.name }} ({{ list.todos.filter(todo => !todo.completed).length }})</label>
      </div>
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