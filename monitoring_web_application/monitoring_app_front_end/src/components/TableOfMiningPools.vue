<template>
  <v-container>
    <v-simple-table>
      <thead>
        <tr>
          <th 
          v-for="iterador in tableTitle"
          :key="iterador"
          >
            {{iterador}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
          v-for="iteradorRow1 in tableSimple.tableData.row"
          :key="iteradorRow1"
          >
          {{iteradorRow1}}
          </td>
        </tr>
        <tr>
          <td
            v-for="iteradorRow2 in tableSimple.tableData.row"
            :key="iteradorRow2"
          >
            {{iteradorRow2}}
          </td>
        </tr>
        <tr>
          <td
            v-for="iteradorRow3 in tableSimple.tableData.row"
            :key="iteradorRow3"
          >
            {{iteradorRow3}}
          </td>
        </tr>
        <tr>
          <td
            v-for="iteradorRow4 in tableSimple.tableData.row"
            :key="iteradorRow4"
          >
            {{iteradorRow4}}
          </td>
        </tr>
        <tr>
          <td
            v-for="iteradorRow5 in tableSimple.tableData.row"
            :key="iteradorRow5"
          >
            {{iteradorRow5}}
          </td>
        </tr>
        <tr>
          <td 
            v-for="iteradorRow6 in tableSimple.tableData.row"
            :key="iteradorRow6"
          >
            {{iteradorRow6}}
          </td>
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
      tableTitle: ["pool", "miner", "algorithm", "hashrate"],
      tableData: {
        data: [123,123,453,5234]
      },
      tableSimple: {
        tableTitle: ["pool", "miner", "algorithm", "hashrate"],
        tableData: {
          row: {
            
              pool: "pool.btc.miners.com",
              miners: "20",
              algorithm: "btc",
              hashrate: 156.23
            
          }
        }
      }
    }
  }

}
</script>

<style>

</style>