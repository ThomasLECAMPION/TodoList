<template>
    <div>
        <input placeholder="Nom" v-model="username" type="text">
        <input placeholder="E-mail" v-model="email" type="email">
        <input placeholder="Mot de passe" v-model="password" type="password">
        <button v-on:click="register([username,email,password])">Register</button>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Register',
    data: function(){
        return {
            username: '',
            email: '',
            password: '',
        }
    },
    methods: {
      ...mapActions('account', ['register']),
    },
    computed: {
      ...mapGetters('account', ['getToken']),
    }
  }
</script>

<style scoped>
</style>