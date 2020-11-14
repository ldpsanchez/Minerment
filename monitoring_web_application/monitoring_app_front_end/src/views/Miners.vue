<template>
  <v-app>
    <v-container
      fluid
      fill-height
      class="flex-grow-1"
    >
      <v-row>
        <v-row
          no-gutters
        >
          <p>miner's list</p>
        </v-row>
      </v-row>
      <v-row
        no-gutters
      >
        <v-row>
          <MinersStats></MinersStats>
        </v-row>
        <v-row>
          <GeneralTableOfMiners></GeneralTableOfMiners>
        </v-row>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MinersStats from "@/components/MinersStats"
import GeneralTableOfMiners from "@/components/GeneralTableOfMiners";

export default {
  name: "Miners",
  components: {
    MinersStats,
    GeneralTableOfMiners
  }

}
</script>

<style>

</style>