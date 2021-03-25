<template>
    
    <div class="container">
    
        <div class="card">
          <div class="card-header bg-dark text-white">
            Se connecter
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="emailLogin">Email address</label>
              <input placeholder="E-mail" v-model="email" type="email" class="form-control" id="emailLogin" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
                  <label for="pswdlogin">Mot de passe</label>
                  <input placeholder="Mot de passe" v-model="password" type="password" class="form-control" id="pswdlogin" aria-describedby="emailHelp">
            </div>
            <button v-on:click="login([email,password])" class="btn btn-primary">Se connecter</button>
          </div>
        </div>
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