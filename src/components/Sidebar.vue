<template>
    <ul class='liste'> <!-- Liste des listes -->
      <li>
        <button v-on:click="createList">Ajouter une liste</button>
      </li>
      <li v-for="list in getTodoLists" :key="list.id">
        <div>
          <input type="text" v-model="list.name" v-on:click="goToList(list)" v-bind:key="list.id">
          <button v-on:click="destroyList(list)" v-bind:key="list.id">x</button>
        </div>
      </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Sidebar',
        methods: {
            ...mapActions('todolist', ['createList', 'goToList', 'destroyList']),
        },
        computed: {
            ...mapGetters('todolist', ['getTodoLists']),
        }
    }
</script>