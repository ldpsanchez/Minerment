<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col>
          <p class="text-title-dashboardMain">Dashboard</p>
        </v-col>
      </v-row>
      <v-row no-gutters class="ma-4">
        <p class="text-subtitle">market</p>
        <MarketCoins></MarketCoins>
      </v-row>
      <v-row no-gutters class="ma-4">
        <p class="text-subtitle">general info</p>
        <GeneralInfo></GeneralInfo>
      </v-row>
      <v-row no-gutters class="flex-nowrap ma-4">
        <PoolsStats></PoolsStats>
        <HashrateStats></HashrateStats>
      </v-row>
      <v-row no-gutters class="flex-nowrap ma-4">
        <TableOfMiningPools></TableOfMiningPools>
        <TableOfMinersModels></TableOfMinersModels>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MarketCoins from "@/components/MarketCoins";
import GeneralInfo from "@/components/GeneralInfo";
import PoolsStats from "@/components/PoolsStats";
import TableOfMiningPools from "@/components/TableOfMiningPools";
import TableOfMinersModels from "@/components/TableOfMinersModels";
import HashrateStats from "@/components/HashrateStats";

export default {
  name: "DashboardMain",
  components: {
    MarketCoins,
    GeneralInfo,
    PoolsStats,
    HashrateStats,
    TableOfMiningPools,
    TableOfMinersModels
  },
};
</script>

<style lang="scss">
.text-title-dashboardMain {
  font-family: "PoppinsSemiBold";
  font-size: 30px;
  color: black;
  text-transform: capitalize;
}

.text-subtitle {
  font-family: "PoppinsSemiBold";
  font-size: 25px;
  color: black;
  text-transform: capitalize;
}
</style>
