<template>
    <div>
        <input placeholder="E-mail" v-model="email" type="email">
        <input placeholder="Mot de passe" v-model="password" type="password">
        <button v-on:click="login([email,password])">Se connecter</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

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
  }
</script>
