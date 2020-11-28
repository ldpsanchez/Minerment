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
  </v-container>
</template>

<script>
export default {
  name: "AlertRegisterTable",
  data: () => {
    return {
      headers: [
        {
          text: "date",
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
