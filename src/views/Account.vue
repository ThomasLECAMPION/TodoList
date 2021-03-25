<template>
    <!-- Si nous avons un token d'authentification, on considère être connecté -->
    <div v-if="getToken">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Connexion réussie ! </h1>
                <button v-on:click="disconnect(); setTodoList([]);" class="btn btn-primary">Déconnexion</button>
            </div>
        </div>
    </div>
    <!-- Sinon, on charge les composants de formulaires de connexion -->
    <div v-else>
        <Login></Login>
        <Register></Register>
    </div>
</template>

<script>
    import Login from '@/components/Login.vue';
    import Register from '@/components/Register.vue';

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Account',
        components: {
            Login,
            Register
        },
        methods: {
            ...mapActions('account', ['disconnect']),
            ...mapActions('todolist', ['setTodoList']),
        },
        computed: {
            ...mapGetters('account', ['getToken']),
        }
    }
</script>