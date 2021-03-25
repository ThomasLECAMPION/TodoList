<template>
    <!-- Si l'utilisateur est connecté, on charge les composants des todolists -->
    <div v-if="getToken">
        <h1>TodoLists ({{ remainingTasks }})</h1>
        <hr>
        <div class='TodoList'>
            <Sidebar></Sidebar>
            <TodoList></TodoList>
        </div>
    </div>
    <!-- Sinon, on impose de se connecter -->
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
        //Chaque fois que cette vue est montée, on charge les listes via l'API s'il y a un token Bearer et si la TodoList est vide
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
            remainingTasks: function () {
                let cpt = 0;
                //Calcul la somme des tâches non complétées dans chaque listes
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