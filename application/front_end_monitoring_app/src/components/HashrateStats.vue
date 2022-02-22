<template>
  <v-container fluid>
    <v-col>
      <v-container fluid>
        <v-card>
          <v-card-title class="justify-start">
            <p class="text-label-grafic-hash">hashrate stats</p>
          </v-card-title>
          <v-card-text>
            <highcharts
              class="d-flex flex-nowrap"
              :options="chartOptions"
            ></highcharts>
          </v-card-text>
        </v-card>
      </v-container>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "HashrateStats",
  data: () => {
    return {
      chartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Hashrate",
        },
        xAxis: {
          categories: ["Hashrate", "Miners", "on"],
        },
        yAxis: {
          text: "values",
        },
        series: [
          {
            name: "XSD-434AF33",
            data: [23, 4, 5, 3, 10.3434333, 21314],
          },
          {
            name: "SAD-213-SDA",
            data: [123, 232.33334, 45423.34343, 345, 546, 564],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.text-label-grafic-hash {
  font-family: "PoppinsSemiBold";
  font-size: 25px;
}
</style>
