<template>
    <div v-if="getToken">
      <p>Connexion réussie !</p>
      <button v-on:click="disconnect(); setTodoList([]);">Déconnexion</button>
    </div>
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