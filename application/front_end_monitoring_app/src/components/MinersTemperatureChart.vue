<template>
<v-container>
  <v-card flat>
    <v-card-title>
      <p class="title-chart-temperature">temperature</p>
    </v-card-title>
    <v-card-text>
      <v-card>
        <v-card-text>
          <highcharts :options="chartOptions"></highcharts>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: "MinersTemperatureChart",
  data: () => {
    return {
      chartOptions: {
        type: "area",
        series: [
          {
            name: "sensor1",
            type: "area",
            data: [45, 53, 34, 64, 65, 76, 87, 88, 99, 123]
          },
          {
            name: "sensor2",
            type: "area",
            data: [34, 45, 64, 65, 76, 34, 64, 76, 76, 124]
          },
          {
            name: "sensor3",
            type: "area",
            data: [6, 11, 32, 110, 235, 369, 124.44, 234, 35]
          },
          {
            name: "sensor4",
            type: "area",
            data: [3, 5, 6, 4, 6, 123, 22, 44, 55, 88]
          },
          {
            name: "sensor5",
            type: "area",
            data: [2, 4, 6, 55, 76, 45, 74, 67, 42, 135]
          },
          {
            name: "sensor6",
            type: "area",
            data: [24, 53, 123, 90, 78, 76, 65, 67, 87, 89]
          },
          {
            name: "sensor7",
            type: "area",
            data: [23, 53, 35, 54, 67, 54, 12, 45, 11, 130]
          },
          {
            name: "sensor8",
            type: "area",
            data: [43, 34, 54, 54, 23, 67, 86, 65, 66, 123]
          },
          {
            name: "sensor9",
            type: "area",
            data: [23, 43, 434, 46, 56, 74, 67, 89, 123]
          },
          {
            name: "sensor10",
            type: "area",
            data: [90, 80, 99, 100, 123, 150, 170, 177, 124, 122]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.title-chart-temperature {
  font-family: "PoppinsSemiBold";
  font-size: 25px;
  text-transform: capitalize;
  color: black;
}
</style>