<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col v-for="value of dataGeneral" :key="value.id" class="d-flex align-center justify-center">
            <v-card flat>
              <v-card-title class="justify-center">
                <img :src="value.icon" alt="algo" class="img-info" />
              </v-card-title>
              <v-card-subtitle>
                <p class="text-subtitle-info ma-0 pa-3">{{ value.textTitle }}</p>
              </v-card-subtitle>
              <v-card-text>
                <p class="text-data-info ma-0">{{ value.data }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "GeneralInfoAboutTheMiner",
  data: () => {
    return {
      dataGeneral: [
        {
          icon: require("@/assets/icons/mining.svg"),
          textTitle: "miner status",
          data: "on",
        },
        {
          icon: require("@/assets/icons/hashrate.svg"),
          textTitle: "hashrate",
          data: "378,975 KH/s",
        },
        {
          icon: require("@/assets/icons/temp.svg"),
          textTitle: "temp",
          data: "60 C*",
        },
        {
          icon: require("@/assets/icons/energetic.svg"),
          textTitle: "power",
          data: "643 W",
        },
        {
          icon: require("@/assets/icons/fan.svg"),
          textTitle: "fans",
          data: "4354 rpm",
        },
        {
          icon: require("@/assets/icons/speedMeter.svg"),
          textTitle: "efficiency",
          data: "97%",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.text-subtitle-info {
  font-family: "PoppinsSemiBold";
  font-size: 24px;
  text-transform: capitalize;
  color: black;
  text-align: center;
  white-space: nowrap;
}

.text-data-info {
  font-family: "PoppinsMedium";
  font-size: 20px;
  text-transform: uppercase;
  color: black;
  text-align: center;
}

.img-info {
  width: 55px;
  height: 45px;
}
</style>
