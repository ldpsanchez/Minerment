<template>
  <v-container fluid>
    <v-row class="flex-nowrap justify-space-between">
        <v-card
          height="82px"
          width="200px"
          v-for="(item, index) in data"
          :key="index"
          class="align-center"
        >
          <v-card-title class="pa-0 text-center">
            <p>{{ item.text }}</p>
          </v-card-title>
          <v-card-text class="pa-0">{{ item.price }}</v-card-text>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MarketCoins",
  data: () => {
    return {
      data: [
        { text: "btc", price: 334 },
        { text: "etherium", price: 412 },
        { text: "dash", price: 334 },
        { text: "zetacash", price: 334 },
        { text: "tron", price: 334 },
        { text: "proton", price: 334 },
      ],
    };
  },
};
</script>

<style></style>
