<template>
  <v-card class="d-flex flex-column justify-center align-center ma-0 pa-0 login-card" height="550px" width="555px" outlined>
    <v-card-title class="d-flex flex-row justify-center pa-2 ma-2">
      <p>welcome back!</p>
    </v-card-title>
    <v-card-subtitle class="d-flex flex-row justify-center pa-2 mtb-2">
      <p>please sign in to your account</p>
    </v-card-subtitle>
    <v-card-text class="pa-0 card-container-form">
    <v-form
      v-model="valid"
      lazy-validation
      class="d-flex flex-column align-center"
    >
      <v-text-field
      v-model="username"
      label="username"
      placeholder="enter your username"
      :rules="usernameRules"
      ></v-text-field>
      <v-text-field
      v-model="password"
      label="password"
      placeholder="enter your password"
      :rules="passwordRules"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      @click:append="show1 = !show1"
      class="mb-10"
      ></v-text-field>
      <v-btn width="260" height="60" class="button-login" color="#070F26" @click="Saludar(`hola`, $event)">Login</v-btn>
      <router-link :to="{ name: `registration` }" class="button-link">forgot password?</router-link>
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
      show1: false,
      form: {
        subtitle: "prueba de subtitulo"
      }
    };
  },
  methods: {
    Saludar: function(mensaje, event) {
      if(event) {
        event.preventDefault();
        alert("Haz iniciado sesion");
      }
    }
  }
};
</script>

<style lang="scss">
.card-container-form {
  margin-top: 50px;
}
.login-card {
  border: 0 !important;
}

.v-card__title {
  p {
    font-family: "PoppinsBold", Arial, Helvetica, sans-serif;
    font-size: 36px !important;
    text-transform: capitalize;
  }
}

.v-card__subtitle {
  p {
    font-family: "PoppinsRegular", Arial, Helvetica, sans-serif;
    font-size: 22px !important;
    color: black !important;
    text-transform: capitalize !important;
  }

  p::first-letter {
    text-transform: capitalize;
  }
}

.v-text-field__slot {
  label {
    font-family: "PoppinsSemiBold", Arial, Helvetica, sans-serif !important;
    font-size: 20px !important;
    color: black !important;
  }

  label::first-letter {
    text-transform: uppercase;
  }
  input {
    width: 400px !important;
    margin-top: 20px;
    &::placeholder {
      font-family: "PoppinsRegular" !important;
      font-size: 20px !important;
      text-transform: capitalize;
      color: #5E6372 !important;
    }
  }
}

.v-input {
  width: 400px;
}
.button-login {
  color: white !important;
  span {
    font-family: "PoppinsSemiBold", Arial, Helvetica, sans-serif;
    text-transform: capitalize !important;
    font-size: 19px;
  }
}

.button-link {
  font-family: "PoppinsMedium", Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  text-decoration: none;
  color: #070F26 !important;
  margin-top: 20px;
}
</style>