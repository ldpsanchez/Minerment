<template>
  <v-container fluid>
    <v-row class="flex-nowrap justify-space-between">
      <v-card width="440px" height="180px">
        <v-card-title>{{ miners.textTitle }}</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <div>
                  <span class="value-info">{{miners.efficiency}}</span>
                </div>
                <div>
                  <p class="text-info-label color-aquamarine ma-0">efficiency</p>
                </div>
              </v-col>
              <v-col>
                <div>
                  <span class="value-info">{{miners.of}}</span>
                </div>
                <div>
                  <p class="text-info-label color-red ma-0">off</p>
                </div>
              </v-col>
              <v-col>
                <div>
                  <span class="value-info">{{miners.on}}</span>
                </div>
                <div>
                  <p class="text-info-label color-green">on</p>
                </div>
              </v-col>
              <v-col>
                <div>
                  <span class="value-info">{{miners.idle}}</span>
                </div>
                <div>
                  <p class="text-info-label color-gris">idle</p>
                </div>
              </v-col>
              <v-col>
                <div>
                  <span class="value-info">{{ miners.electriciy }}</span>
                </div>
                <div>
                  <p class="text-info-label color-electrico">electriciy</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
      <v-card width="441px" height="182px">
        <v-card-title>{{ hashrate.title }}</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <div>
                  <span class="value-info">{{hashrate.current}}</span>
                </div>
                <div>
                  <p class="text-info-label color-aquamarine">current</p>
                  </div>
              </v-col>
              <v-col>
                <div>
                  <span class="value-info">{{hashrate.dailyMind}}</span>
                </div>
                <div>
                  <p class="text-info-label color-red">daily min</p>
                </div>
              </v-col>
              <v-col>
                <div>
                  <span class="value-info">{{hashrate.dailyMax}}</span>
                </div>
                <div>
                  <p class="text-info-label color-green">daily max</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
      <v-card width="441px" height="182px">
        <v-card-title>{{ temperature.title }}</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <div>
                  <span class="value-info color-green">{{ temperature.min }}</span>
                </div>
                <div>
                  <p class="text-info-label">min</p>
                </div>
              </v-col>
              <v-col>
                <div>
                  <span class="value-info color-gris">{{ temperature.average }}</span>
                </div>
                <div>
                  <p class="text-info-label">average</p>
                </div>
              </v-col>
              <v-col>
                <div>
                  <span class="value-info color-red">{{ temperature.max }}</span>
                </div>
                <div>
                  <p class="text-info-label">max</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "generalInfo",
  data: () => {
    return {
      miners: {
        textTitle: "miners",
        textLabel: ["efficiency", "off", "aloja", "idle"],
        efficiency: "77%",
        of: 10,
        on: 30,
        electriciy: "143w",
        idle: 5
      },
      hashrate: {
        title: "hashrate",
        current: 16.43,
        dailyMind: 125.45,
        dailyMax: 1235.34,
      },
      temperature: {
        title: "temperature",
        min: "50 C",
        average: "56 C",
        max: "90 C",
      },
    };
  },
};
</script>

<style lang="scss">
.v-card__title {
  justify-content: center;
  font-family: "PoppinsSemiBold";
  font-size: 20px;
  text-transform: capitalize;
}

.text-info-label {
  font-family: "PoppinsMedium";
  font-size: 18px;
  text-transform: capitalize;
  color: black;
}

.value-info {
  font-family: "PoppinsMedium";
  font-size: 25px;
  color: black;
}

.color-aquamarine {
  color: aqua;
}

.color-red {
  color: red;
}

.color-green {
  color: green;
}

.color-electrico {
  color: purple;
}

.color-gris {
  color: #BCC6EB;
}
</style>
