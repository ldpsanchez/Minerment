<template>
  <v-container>
    <v-simple-table>
      <thead>
        <tr>
          <th
            v-for="value in tableSimple.tableTitle"
            :key="value.id"
            class="header-text-table-miner-model"
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
          <td :class="tableSimple.dataTableStyle">{{value.modelMiner}}</td>
          <td :class="tableSimple.dataTableStyle">{{value.quantity}}</td>
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
        dataTableStyle: "data-table-miner-model", 
        tableTitle: ["miner's model", "Miner's quantity"],
        tableData: [
          {
            modelMiner: "ADW-34-ME",
            quantity: 23
          },
          {
            modelMiner: "UHYUN-24",
            quantity: 30
          },
          {
            modelMiner: "TADOUTSX",
            quantity: 16
          },
          {
            modelMiner: "LJUH-244",
            quantity: 12
          },
          {
            modelMiner: "TBAUS-234",
            quantity: 48
          }
        ]
      }
    }
  }
}
</script>

<style>
.header-text-table-miner-model {
  font-family: "PoppinsSemiBold";
  font-size: 20px !important;
  text-transform: capitalize;
  color: black !important;
  text-align: center !important;
}

.data-table-miner-model {
  font-family: "PoppinsMedium";
  font-size: 16px !important;
  color: black !important;
  text-transform: capitalize !important;
  text-align: center !important;
}
</style>