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
            name: "Jane",
            data: [1.2, 4.43, 45, 21231],
          },
          {
            name: "John",
            data: [5.4, 5],
          },
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
