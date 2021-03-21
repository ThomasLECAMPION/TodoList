<template>
    
    
    <div class="container mt-5">
    
        <div class="card">
          <div class="card-header bg-primary">
            S'inscrire
          </div>
          <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">username</label>
                <input placeholder="Nom" v-model="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="username">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input placeholder="E-mail" v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="form-group">
                    <label for="exampleInputEmail1">Mot de passe</label>
                    <input placeholder="Mot de passe" v-model="password" type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <button v-on:click="register([username,email,password])" class="btn btn-primary">S'enregistrer</button>
          </div>
        </div>
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