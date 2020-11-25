<template>
<v-container>
  <v-card flat>
    <v-card-title>
      <p class="main-title-card ma-0">general info</p>
    </v-card-title>
    <v-card-text>
      <v-card class="d-flex justify-space-between pa-3">
        <v-col>
          <p class="header-title-info-card-pool ma-0 pa-2">pool</p>
          <p class="text-title-pool ma-0 pa-2">btc.miner.pool:8080</p>
        </v-col>
        <v-col class="d-flex align-center justify-center contain-img-svg">
          <v-icon size="40px" color="black">mdi-bitcoin</v-icon>
        </v-col>
      </v-card>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: "MinersPoolInfoCard"
}
</script>

<style lang="scss">
.main-title-card {
  font-family: "PoppinsSemiBold";
  font-size: 25px;
  text-transform: capitalize;
  color: black;
}

.header-title-info-card-pool {
  font-family: "PoppinsSemiBold";
  font-size: 29px;
  text-transform: capitalize;
  color: black
}

.contain-img-svg {
  position: relative;
  right: 4em;
}

.text-title-pool {
  font-family: "PoppinsRegular";
  font-size: 22px;
  color: black;
}
</style>