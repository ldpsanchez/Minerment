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
          <td class="data-table">{{value.hashrate}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "TableOfMiningPools",
  data: () => {
    return {
      tableSimple: {
        tableTitle: ["pool", "miner", "algorithm", "hashrate"],
        tableData: [
          {
            pool: "192.168.1.4",
            miner: "XSWE-341-21D3F4",
            algorithm: "btc",
            hashrate: 1235545.545
          },
          {
            pool: "192.168.1.4",
            miner: "XSWE-341-21D3F4",
            algorithm: "btc",
            hashrate: 1235545.545
          },
          {
            pool: "192.168.1.4",
            miner: "XSWE-341-21D3F4",
            algorithm: "btc",
            hashrate: 1235545.545
          },
          {
            pool: "192.168.1.4",
            miner: "XSWE-341-21D3F4",
            algorithm: "btc",
            hashrate: 1235545.545
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