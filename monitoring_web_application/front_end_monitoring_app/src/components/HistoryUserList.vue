<template>
<v-container>
<v-card flat>
  <v-card-title class="d-flex justify-start">
    <p class="title-table-userList">user list</p>
  </v-card-title>
  <v-card-text>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="users"
          :item-per-pages="10"
          :search="search"
        ></v-data-table>
      </v-card-text>
    </v-card>
  </v-card-text>
</v-card>
</v-container>
</template>

<script>
export default {
  name: "HistoryUserList",
  data: () => {
    return {
      search: '',
      headers: [
        {
          text: "User",
          value: "user"
        },
        {text: "E-mail", value: "email"},
        {text: "password", value: "password"},
        {text: "role", value: "role"}
      ],
      users: [
        {
          user: "ldpsanchez",
          email: "ldpsanchez@smartpro.com",
          password: "123asd123",
          role: "admin"
        },
        {
          user: "maythe",
          email: "maythe@smartpro.com",
          password: "123123asa41",
          role: "operador"
        }
      ]
    }
  }
}
</script>

<style lang="css">
.title-table-userList {
  font-family: "PoppinsMedium";
  font-size: 29px;
  text-transform: capitalize;
}

</style>