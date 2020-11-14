<template>
  <v-container
    fill-height
    fluid
  >
    <v-row
      class="flex-nowrap justify-space-between"
    >
    <v-card
      class="container-pool-stats"
    >
      <v-card-title
        class="pa-0"
        style="border: 0 !important;"
      >
        <p>Pool Stats</p>
      </v-card-title>
      <v-card-text
        class="pa-0"
      >
        <v-card
          width="650"
          height="460px"
          outlined
          class="container-pool-stats"
        >
          <v-card-title
            class="pa-0"
          >  
            <p>PoolsStats</p>
          </v-card-title>
          <v-card-subtitle></v-card-subtitle>
          <v-card-text>
            <highcharts :options="chartOptions"></highcharts>
          </v-card-text>
        </v-card>
      </v-card-text>
        </v-card>
        <v-card
          width="650"
          height="460px"
        >
          <v-card-title></v-card-title>
          <v-card-subtitle></v-card-subtitle>
          <v-card-text>
            <highcharts :options="chartOptions"></highcharts>
          </v-card-text>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PoolsStats",
  data: () => {
    return {
      chartOptions: {
        chart: {
          type: "spline"
        },
        series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
      }
    }
  }

}
</script>

<style lang="scss">
.container-pool-stats {
  border: 0 !important;
}

</style>