<template>
    <div> <!-- Formulaire d'inscription -->
        <input placeholder="Nom" v-model="username" type="text">
        <input placeholder="E-mail" v-model="email" type="email">
        <input placeholder="Mot de passe" v-model="password" type="password">
        <button v-on:click="register([username,email,password])">S'enregistrer</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

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
  }
</script>