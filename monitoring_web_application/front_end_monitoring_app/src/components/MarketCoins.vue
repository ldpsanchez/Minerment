<template>
  <v-container fluid>
    <v-row class="flex-nowrap justify-space-between">
        <v-card
          height="82px"
          width="200px"
          v-for="(value, key) in response"
          :key="value.id"
          class="align-center"
        >
          <v-card-title class="pa-0 text-center">
            <p class="text-title-market">{{key}}</p>
          </v-card-title>
          <v-card-text class="pa-0 container-value-market">
            <span class="value-market">{{value.usd | fixedDecimal}} USD</span>
          </v-card-text>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MarketCoins",
  filters: {
    fixedDecimal(number) {
      return parseFloat(number.toFixed(3));
    }
  },
  data: () => {
    return {
      response: "",
      data: [
        { text: "btc", price: "12351,43 USD" },
        { text: "etherium", price: 412 },
        { text: "dash", price: 344 },
        { text: "zetacash", price: 334 },
        { text: "tron", price: 334 },
        { text: "proton", price: 334 },
      ]
    };
  },
  methods: {
    getDataMarket: async function () {
      const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ceos%2Ctron%2Clitecoin%2Cripple%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true";

      try {
        let response = await this.$http.get(apiUrl);
        this.response = response.data;
        console.log(response);
      } catch(error) {
        console.log(error)
      }
    },
    callGetDataMarket: function () {
      setInterval((call) => {
        this.getDataMarket();
      }, 10000)
    },
    getImage: async function () {
      const apiUrlImage = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Ceos%2Ctron%2Clitecoin%2Cripple%2Cethereum&order=market_cap_desc&per_page=100&sparkline=false&price_change_percentage=1h";

      let response = await this.$http.get(apiUrlImage);
      this.responseImage = response.data

      console.log(this.responseImage)
    }
  },
  created() {
    this.getDataMarket();
    this.getImage();
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.text-title-market {
  font-family: "PoppinsMedium";
  font-size: 18px;
  color: black;
}

.container-value-market {
  display: flex;
  flex-direction: row;
  justify-content: center !important;
}

.value-market {
  font-family: "PoppinsMedium";
  font-size: 18px;
  color: black;
}
</style>
