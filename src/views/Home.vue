<template>
    <div v-if="getToken">
        <h1>TodoLists ({{ tachesRestantes }})</h1>
        <p v-if="!getTodoLists.length">Chargement des listes...</p>
        <div v-else class='TodoList'>
            <Sidebar></Sidebar>
            <TodoList></TodoList>
        </div>
    </div>
    <p v-else>Veuillez vous connecter pour accéder à vos listes.</p>
</template>

<script>
    import TodoList from '@/components/TodoList.vue';
    import Sidebar from '@/components/Sidebar.vue';

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Home',
        components: {
            TodoList,
            Sidebar,
        },
        mounted() {
            if(this.getToken && !this.getTodoLists.length) {
                this.setTodoListAPI(this.getToken);
            }
        },
        methods: {
            ...mapActions('todolist', ['setTodoListAPI']),
        },
        computed: {
            ...mapGetters('account', ['getToken']),
            ...mapGetters('todolist', ['getTodoLists']),
            tachesRestantes: function () {
                let cpt = 0;
                this.getTodoLists.forEach(list => {
                    cpt += list.todos.filter(todo => !todo.completed).length
                });
                return cpt;
            },
        }
    }
</script>

<style scoped>
    .TodoList {
        display: flex;
    }
</style>