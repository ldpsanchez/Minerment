<template>
  <v-container
    fluid
  >
    <v-card
      width="1442px"
      height="68px"
    >
      <v-card-text>
        <v-container
          fluid
        >
          <v-row
            class="d-flex flex-nowrap"
          >
              <div 
                class="container-general-info"
                v-for="iterador in dataMiners.dataFull"
                :key="iterador"
              >
                <div class="general-ico">
                  {{iterador.icon}}
                </div>
                <div class="general-info-text">
                  {{iterador.text1}}
                  {{iterador.text2}}
                </div>
              </div>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MinersStats",
  data: () => {
    return {
      dataMiners: {
        dataFull: [
          {
            icon: "hashrate",
            text1: 123,
            text2: 11
          },
          {
            icon: "hashrate",
            text1: 123,
            text2: 11
          },
          {
            icon: "hashrate",
            text1: 123,
            text2: 11
          },
          {
            icon: "hashrate",
            text1: 123,
            text2: 11
          },
          {
            icon: "hashrate",
            text1: 123,
            text2: 11
          },
          {
            icon: "hashrate",
            text1: 123,
            text2: 11
          }
        ]
      }
    }
  }

}
</script>

<style>

</style>