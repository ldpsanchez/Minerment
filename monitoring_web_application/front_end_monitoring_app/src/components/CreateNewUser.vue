<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-card flat>
        <v-card-title>
          <p class="ma-0 title-of-table">create new user</p>
        </v-card-title>
      <v-card>
        <v-card-text>
          <v-row>
            <v-col>
              <v-card flat width="500px" height="150px">
                <v-card-title>
                  <p class="ma-0 title-of-table">username</p>
                </v-card-title>
                <v-card-text>
                  <v-text-field></v-text-field>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card flat width="500px" height="150px">
                <v-card-title>
                  <p class="ma-0 title-of-table">e-mail</p>
                </v-card-title>
                <v-card-text>
                  <v-text-field></v-text-field>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card flat width="500px" height="150px">
                <v-card-title>
                  <p class="ma-0 title-of-table">password</p>
                </v-card-title>
                <v-card-text>
                  <v-text-field></v-text-field>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="justify-end">
              <v-card flat width="500px" height="150px">
                <v-card-title>
                  <p class="ma-0 title-of-table">role</p>
                </v-card-title>
                <v-card-text>
                  <v-select
                    :items="itemsValues"
                    label="select role"
                  >
                  </v-select>
                </v-card-text>
              </v-card>
              <div class="d-flex flex-row justify-end">
                <v-btn color="#101B3A" class="button-created"><p class="title-button">created</p></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreateNewUser",
  data: () => {
    return {
      itemsValues: ["administrador", "operador"]
    }
  }
};
</script>

<style lang="scss">
.button-created {
  span {
    color: white !important;
  }
}

.title-button {
  color: white !important;
  margin: 0 !important;
}

.title-of-table {
  font-family: "PoppinsBold";
  font-size: 29px;
  text-transform: capitalize;
}
</style>
