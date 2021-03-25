<template>
    <ul class='liste mr-5 ml-5 mt-5 nav flex-column'> <!-- Liste des listes -->
      <li class="mb-2">
        <input type="text" v-model="list_name" placeholder="Nouvelle liste" class="form-control mb-2 nav-item">
        <button v-on:click="createList([list_name, getToken]); list_name='';" class="btn btn-success">Ajouter une liste</button>
      </li>
      <li v-for="list in getTodoLists" :key="list.id" class="nav-item mb-2">
        <div>
          <button v-on:click="destroyList([list, getToken])" class="btn btn-danger mr-2"><img src="../assets/delete.png" alt="delete" style="width: 15px; height: 15px;"></button>
          <label class="btn btn-primary" v-on:click="goToList(list)" v-bind:key="list.id" v-bind:class="{active: list.id == getLoadedListID}"> {{ list.name }} ({{ list.todos.filter(todo => !todo.completed).length }})</label>
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