<template>
  <v-container fluid>
    <v-card flat>
      <v-card-title class="d-flex justify-start">
        <p class="ma-0 pa-0 title-main-control">alerts notificacions</p>
      </v-card-title>
      <v-card-text>
        <v-card>
          <v-card-text>
            <v-simple-table>
              <template>
                <thead>
                  <tr>
                    <th
                      class="text-title-table-alert"
                      v-for="value of tableTitle"
                      :key="value.id"
                    >
                      {{ value }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="data-table-alerts">GPU temperature</td>
                    <td class="data-table-alerts">
                      <v-switch v-model="switch1"></v-switch>
                    </td>
                    <td class="data-table-alerts">
                      <v-switch v-model="switch2"></v-switch>
                    </td>
                    <td class="data-table-alerts">
                      <v-select
                        :items="items"
                        label="Outlined style"
                        outlined
                        dense
                      ></v-select>
                    </td>
                  </tr>
                  <tr>
                    <td class="data-table-alerts">fan speed</td>
                    <td class="data-table-alerts">
                      <v-switch v-model="switch3"></v-switch>
                    </td>
                    <td class="data-table-alerts">
                      <v-switch v-model="switch4"></v-switch>
                    </td>
                    <td class="data-table-alerts">
                      <v-select
                        :items="items"
                        label="Outlined style"
                        outlined
                        dense
                        color="black"
                      ></v-select>
                    </td>
                  </tr>
                  <tr>
                    <td class="data-table-alerts">hashrate drop</td>
                    <td class="data-table-alerts">
                      <v-switch v-model="switch5"></v-switch>
                    </td>
                    <td class="data-table-alerts">
                      <v-switch v-model="switch6"></v-switch>
                    </td>
                    <td class="data-table-alerts">
                      <v-select
                        :items="items"
                        label="Outlined style"
                        outlined
                        dense
                      ></v-select>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ControlAlerts",
  data: () => {
    return {
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
      switch5: false,
      switch6: false,
      items: ["15 minutes", "1 hour", "2 days"],
      tableTitle: ["event", "e-mail", "telegram", "setting"],
    }
  }
};
</script>

<style lang="scss">
.v-text-field__details {
  margin: 0 !important;
  padding: 0 !important;
}

.v-input__control {
  display: flex;
  align-content: flex-end;
}

.v-input__slot {
  margin: 0 !important;
  padding: 0 !important;
}

.text-title-table-alert {
  font-family: "PoppinsSemiBold";
  font-size: 29px !important;
  text-transform: capitalize;
  text-align: center !important;
  color: black !important;
}

.data-table-alerts {
  font-family: "PoppinsSemiBold";
  font-size: 25px;
  text-transform: capitalize;
  text-align: center;
  justify-items: center;
  color: black !important;
}

.title-main-control {
  font-family: "PoppinsSemiBold";
  font-size: 25px;
  text-transform: capitalize;
}
</style>
