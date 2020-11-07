<template>
  <v-card class="d-flex flex-column justify-center align-center ma-0 pa-0 login-card" height="550px" width="555px" outlined>
    <v-card-title class="d-flex flex-row justify-center pa-1">
      <p class="ma-1">Welcome Back!</p>
    </v-card-title>
    <v-card-subtitle class="d-flex flex-row justify-center pa-1">
      <p class="ma-1">Sign in to your account</p>
    </v-card-subtitle>
    <v-card-text>
    <v-form
      v-model="valid"
      lazy-validation
      class="d-flex flex-column align-center"
    >
      <v-text-field
      v-model="username"
      label="Username"
      placeholder="Enter your username"
      :rules="usernameRules"
      full-width
      ></v-text-field>
      <v-text-field
      v-model="password"
      label="Password"
      placeholder="Enter your password"
      :rules="passwordRules"
      ></v-text-field>
      <v-btn width="200" class="button-login" color="#070F26" @click="Saludar(`hola`, $event)">Login</v-btn>
      <v-btn width="200" text color="#060C17">Forgot password?</v-btn>
    </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      title: "prueba de titulo",
      form: {
        subtitle: "prueba de subtitulo"
      }
    };
  },
  methods: {
    Saludar: function(mensaje, event) {
      if(event) {
        event.preventDefault();
        alert(typeof(mensaje));
      }
    }
  }
};
</script>

<style lang="scss">
.button-login {
  color: #F0EDEA !important;
}

.login-card {
  border: 0 !important;
}
</style>