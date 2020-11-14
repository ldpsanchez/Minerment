<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row no-gutters align-self-start>
        <v-col>
          <p>Dashboard</p>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <p>market</p>
        <MarketCoins></MarketCoins>
      </v-row>
      <v-row no-gutters>
        <p>GeneralInfo</p>
        <GeneralInfo></GeneralInfo>
      </v-row>
      <v-row no-gutters>
        <PoolsStats></PoolsStats>
      </v-row>
      <v-row no-gutters class="flex-nowrap">
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

export default {
  name: "DashboardMain",
  components: {
    MarketCoins,
    GeneralInfo,
    PoolsStats,
    TableOfMiningPools,
    TableOfMinersModels
  },
};
</script>

<style lang="scss">
</style>
