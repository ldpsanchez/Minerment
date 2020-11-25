<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        <p class="title-of-graph-chart ma-0">hashrate stats</p>
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
  name: "HashrateGraphOfMiner",
  data: () => {
    return {
      chartOptions: {
        type: "spline",
        xAxis: {
          categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "Agust"]
        },
        series: [
          {
            name: "daily max",
            data: [5, 12, 24, 46, 67, 123, 224, 567],
            color: "#6fcd98"
          },
          {
            name: "daily min",
            data: [13, 43, 24, 122, 55, 144, 56, 435],
            color: "#FC6A8C"
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.title-of-graph-chart {
  font-family: "PoppinsSemiBold";
  font-size: 20px;
  color: black;
  text-transform: capitalize;
}

</style>