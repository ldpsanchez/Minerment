<template>
<v-container fluid>
  <v-card width="540">
    <v-card-text class="d-flex flex-wrap justify-center align-center pa-0">
      <v-card flat height="100px" width="220px" class="pa-2" v-for="value of info" :key="value.id">
        <v-card-title class="pa-1">
          <p class="ma-0 text-title-info-pool">{{value.title}}</p>
        </v-card-title>
        <v-card-text class="pa-1">
          <p class="text-data-info-pool ma-0">{{value.data}}</p>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: "MinersPoolInfoCardAddOn",
  data: () => {
    return {
      info: [
        {
          title: "Local IP",
          data: "192.168.1.1"
        },
        {
          title: "Uptime",
          data: "16d 12h 42m 20s"
        },
        {
          title: "Remote IP",
          data: "100.200.123.0"
        },
        {
          title: "Last Sync",
          data: "5 minutes"
        },
        {
          title: "Client",
          data: "adoux-09"
        },
        {
          title: "Speed",
          data: "24.54 mh/s"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.text-title-info-pool {
  font-family: "PoppinsSemiBold";
  font-size: 29px;
  text-align: center;
  color: black;
}

.text-data-info-pool {
  font-family: "PoppinsRegular";
  font-size: 22px;
  text-transform: uppercase;
  color: black;
}
</style>