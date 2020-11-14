<template>
  <v-container>
    <v-simple-table>
      <thead>
        <tr>
          <th
            v-for="iteradorRow in tableSimple.tableTitle"
            :key="iteradorRow"
          >
            {{iteradorRow}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            v-for="iteradorRow2 in tableSimple.tableData"
            :key="iteradorRow2"
          >
            {{iteradorRow2}}
          </td>
        </tr>
        <tr>
          <td
            v-for="iteradorRow3 in tableSimple.tableData"
            :key="iteradorRow3"
          >
            {{iteradorRow3}}
          </td>
        </tr>
        <tr>
          <td
            v-for="iteradorRow4 in tableSimple.tableData"
            :key="iteradorRow4"
          >
            {{iteradorRow4}}
          </td>
        </tr>
        <tr>
          <td
            v-for="iteradorRow5 in tableSimple.tableData"
            :key="iteradorRow5"
          >
            {{iteradorRow5}}
          </td>
        </tr>
        <tr>
          <td
            v-for="iteradorRow6 in tableSimple.tableData"
            :key="iteradorRow6"
          >
            {{iteradorRow6}}
          </td>
          <tr>
            <td
              v-for="iteradorRow7 in tableSimple.tableData"
              :key="iteradorRow7"
            >
              {{iteradorRow7}}
            </td>
          </tr>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "TableOfMinersModels",
  data: () => {
    return {
      tableSimple: {
        tableTitle: ["miner's model", "Miner's quantity"],
        tableData: {
          modelMiner: "modelo1",
          quantity: 23
        }
      }
    }
  }
}
</script>

<style>

</style>