<template>
    <div v-if="getToken" class="container mt-5">
        <h1>TodoLists ({{ tachesRestantes }})</h1>
        <div class='TodoList'>
            <Sidebar></Sidebar>
            <TodoList></TodoList>
        </div>
    </div>
    <div v-else class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Veuillez vous connecter pour accéder à vos listes</h1>
        </div>
    </div>
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