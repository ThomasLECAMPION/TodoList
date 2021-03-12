<template>
    <div v-if="!getToken">
        <input placeholder="E-mail" v-model="email" type="email">
        <input placeholder="Mot de passe" v-model="password" type="password">
        <button v-on:click="login([email,password])">Login</button>
    </div>
    <div v-else>
        <p>Bienvenu !</p>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Login',
    data: function(){
        return {
            email: '',
            password: '',
        }
    },
    methods: {
      ...mapActions('account', ['login']),
    },
    computed: {
      ...mapGetters('account', ['getToken']),
    }
  }
</script>

<style scoped>
</style>