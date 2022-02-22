<template>
  <v-container>
    <v-simple-table>
      <thead>
        <tr>
          <th 
          v-for="value in tableSimple.tableTitle"
          :key="value.id"
          class="header-table-text"
          >
            {{value}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="value of tableSimple.tableData"
          :key="value.id"
        >
          <td class="data-table">{{value.pool}}</td>
          <td class="data-table">{{value.miner}}</td>
          <td class="data-table">{{value.algorithm}}</td>
          <td class="data-table">{{getRandomNumber}} {{value.hashrate}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "TableOfMiningPools",
  mounted() {
    setInterval(() => {
      let numberMax = 80;
      let numberMin = 10;
      

      let generateData = (Math.random() * (+numberMax - numberMin) + numberMax) * 3;

      this.getRandomNumber = generateData.toFixed(4);
    }, 3000)
  },
  data: () => {
    return {
      getRandomNumber: '',
      tableSimple: {
        tableTitle: ["pool", "miner", "algorithm", "hashrate"],
        tableData: [
          {
            pool: "12.68.111.43",
            miner: "XSWE-341",
            algorithm: "btc",
            hashrate: "Hs"
          },
          {
            pool: "120.118.12.4",
            miner: "XSWE-21D3F4",
            algorithm: "eth",
            hashrate: "Hs"
          },
          {
            pool: "56.168.212.123",
            miner: "XE-341-21DF4",
            algorithm: "trx",
            hashrate: "Hs"
          },
          {
            pool: "100.168.1.200",
            miner: "XSE-31-2134",
            algorithm: "eos",
            hashrate: "Hs"
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.header-table-text {
  font-family: "PoppinsSemiBold";
  font-size: 20px !important;
  text-transform: capitalize;
  text-align: center !important;
  color: black !important;
}

.data-table {
  font-family: "PoppinsMedium";
  font-size: 16px !important;
  color: black;
  text-align: center;
}
</style>