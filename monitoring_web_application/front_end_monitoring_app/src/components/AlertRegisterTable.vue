<template>
  <v-container fluid>
    <v-card flat>
      <v-card-title class="d-flex justify-start">
        <p class="ma-0 main-title-alert">alert history</p>
      </v-card-title>
      <v-card-text>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-table-search"
              label="search"
              single-line
            >
            </v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="miners"
            :search="search"
          >
          </v-data-table>
        </v-card>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>
        <p>tabla getCountries</p>
      </v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>country</th>
                <th>country</th>
                <th>country</th>
                <th>country</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="value of countries" :key="value.id">
                <td>{{value._id}}</td>
                <td>{{value.name}}</td>
                <td>{{value.area}}</td>
                <td>{{value.capital}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "AlertRegisterTable",
  data: () => {
    return {
      countries: [],
      search: '',
      headers: [
        {
          text: "aloja",
          value: "date"
        },
        {
          text: "miner",
          value: "miner"
        },
        {
          text: "model",
          value: "model"
        },
        {
          text: "alert description",
          value: "alertDescription"
        }
      ],
      miners: [
        {
          date: "2020-09-10, 16h:45m:42s UTC-5",
          miner: "ATS-432-AFS342-4A",
          model: "ATS-432-AFS342-4A",
          alertDescription: "high fan speed"
        }
      ]
    }
  },
  apollo: {
    countries: gql` query getCountries {
      countries: Country {
        _id
        name
        area
        capital
      }
    }`
  }

};
</script>

<style lang="scss">
.main-title-alert {
  font-family: "PoppinsSemiBold";
  font-size: 25px;
  text-transform: capitalize;
  color: black;
}
</style>
