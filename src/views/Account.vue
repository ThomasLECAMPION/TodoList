<template>
    <!-- Si nous avons un token d'authentification, on considère être connecté -->
    <div v-if="getToken">
      <p>Connexion réussie !</p>
      <button v-on:click="disconnect(); setTodoList([]);">Déconnexion</button> <!-- Réinitialise le token et le contenu des TodoLists -->
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