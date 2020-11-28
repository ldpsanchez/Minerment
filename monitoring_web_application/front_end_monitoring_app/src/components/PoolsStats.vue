<template>
  <v-container fluid>
    <v-col>
      <v-container fluid>
        <v-card width="620px">
          <v-card-title class="justify-start">
            <p class="text-label-grafic-pools">pools stats</p>
          </v-card-title>
          <v-card-text>
            <highcharts :options="chartOptions"></highcharts>
          </v-card-text>
        </v-card>
      </v-container>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "PoolsStats",
  data: () => {
    return {
      chartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Pools",
        },
        series: [
          {
            name: "F2Pool",
            data: [1.2, 4.43, 45, 21231],
          },
          {
            name: "BTC.com",
            data: [5.4, 5],
          },
          {
            name: "Poolin",
            data: [41,312,52,21,412]
          },
          {
            name: "AntPool",
            data: [123,123,13,123,123544,512,34]
          },
          {
            name: "Binance Pool",
            data: [12,42,56,12,45,67,87]
          }
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.container-pool-stats {
  border: 0 !important;
}

.text-label-grafic-pools {
  font-family: "PoppinsSemiBold";
  font-size: 25px;
}

.container-grafic {
  width: 100% !important;
}
</style>
