<template>
  <v-container fluid>
    <v-row class="flex-nowrap justify-space-between">
      <v-card width="440px" height="180px">
        <v-card-title>{{ miners.text }}</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <div>{{ miners.efficiency }}</div>
                <div><p>current</p></div>
              </v-col>
              <v-col>
                <div>{{ miners.of }}</div>
                <div>{{ miners.text }}</div>
              </v-col>
              <v-col>
                <div>{{ miners.on }}</div>
                <div>{{ miners.text }}</div>
              </v-col>
              <v-col>
                <div>{{ miners.electriciy }}</div>
                <div>{{ miners.text }}</div>
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
                <div>{{ hashrate.current }}</div>
                <div><p>current</p></div>
              </v-col>
              <v-col>
                <div>{{ hashrate.dailyMind }}</div>
                <div>daily min</div>
              </v-col>
              <v-col>
                <div>{{ hashrate.dailyMax }}</div>
                <div>daily max</div>
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
                <div>{{ temperature.min }}</div>
                <div><p>min</p></div>
              </v-col>
              <v-col>
                <div>{{ temperature.average }}</div>
                <div>average</div>
              </v-col>
              <v-col>
                <div>{{ temperature.max }}</div>
                <div>max</div>
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
        text: "miners",
        efficiency: "77%",
        of: 10,
        on: 30,
        electriciy: "143w",
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
