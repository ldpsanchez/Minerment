<template>
  <v-container fluid>
    <v-row>
      <p class="title-main-dashboard">alerts</p>
    </v-row>
    <v-row>
      <ControlAlert></ControlAlert>
    </v-row>
    <v-row>
      <AlertLog></AlertLog>
    </v-row>
  </v-container>
</template>

<script>
import ControlAlert from "@/components/ControlAlerts";
import AlertLog from "@/components/AlertRegisterTable";

export default {
  name: "AlertView",
  components: {
    ControlAlert,
    AlertLog
  },
};
</script>

<style lang="scss">
.title-main-dashboard {
  font-family: "PoppinsSemiBold";
  font-size: 30px;
  text-transform: capitalize;
}
</style>
