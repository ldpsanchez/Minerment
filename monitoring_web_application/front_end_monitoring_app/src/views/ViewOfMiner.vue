<template>
  <v-container fluid>
    <v-row>
      <div class="d-flex flex-row header-view">
        <v-col class="d-flex align-center pa-0">
          <v-btn class="button-go-back pr-2" icon link :to="{name:'miners'}">
            <v-icon color="black" size="30px" class="icon-go-back">mdi-arrow-left</v-icon>
          </v-btn>
        </v-col>
        <v-col class="d-flex align-center pa-0">
          <p class="title-of-view ma-0">miner's list</p>
        </v-col>
        <v-col class="d-flex align-center justify-start pa-0">
          <v-icon size="35px" color="black">mdi-chevron-right</v-icon>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <p class="text-name-miner ma-0">name miner</p>
        </v-col>
      </div>
    </v-row>
    <v-row>
      <GeneralInfoMiner></GeneralInfoMiner>
    </v-row>
    <v-row>
      <v-col>
        <HashrateGraphOfMiner></HashrateGraphOfMiner>
        <MinersTemperatureChart></MinersTemperatureChart>
      </v-col>
      <v-col>
        <p>columna</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GeneralInfoMiner from "@/components/GeneralInfoAboutTheMiner";
import HashrateGraphOfMiner from "@/components/HashrateGraphOfMiner";
import MinersTemperatureChart from "@/components/MinersTemperatureChart"

export default {
  name: "ViewOfMiner",
  components: {
    GeneralInfoMiner,
    HashrateGraphOfMiner,
    MinersTemperatureChart
  }
};
</script>

<style lang="scss">
.header-view {
  height: 100px;
}
.title-of-view {
  white-space: nowrap;
  font-family: "PoppinsMedium";
  font-size: 30px !important;
  text-transform: capitalize;
}

.text-name-miner {
  white-space: nowrap;
  font-family: "PoppinsBold";
  font-size: 30px !important;
  text-transform: capitalize;
}
</style>
