<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        <p class="title-header-table-hardware ma-0">hardware</p>
      </v-card-title>
      <v-card-text>
        <v-card>
          <v-card-title>
            <p>saphire radeon rx s70</p>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="value of data1" :key="value.id">
                <v-card flat>
                  <v-card-title>
                    <p class="title-table-data-info">{{value.title}}</p>
                  </v-card-title>
                  <v-card-text>
                    <p class="data-table-info-hardware">{{value.data}}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="value2 of data2" :key="value2.id">
                <v-card flat>
                  <v-card-title>
                    <p class="title-table-data-info">{{value2.title}}</p>
                  </v-card-title>
                  <v-card-text>
                    <p class="data-table-info-hardware">{{value2.data}}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="value3 of data3" :key="value3">
                <v-card flat>
                  <v-card-title>
                    <p class="title-table-data-info">{{value3.title}}</p>
                  </v-card-title>
                  <v-card-text>
                    <p class="data-table-info-hardware">{{value3.data}}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MinersHardwareInfoTable",
  data: () => {
    return {
      data1: [
        {
          title: "bus",
          data: "123.123.123.125"
        },
        {
          title: "mem",
          data: "1000 mhz"
        }
      ],
      data2: [
        {
          title: "memory",
          data: "sic inix cors"
        },
        {
          title: "core",
          data: "1500 mhz"
        }
      ],
      data3: [
        {
          title: "bios",
          data: "tc-23cb-433c-123"
        },
        {
          title: "load",
          data: "100%"
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.title-header-table-hardware {
  font-family: "PoppinsBold";
  font-size: 30px;
  text-transform: capitalize;
}

.title-table-data-info {
  font-family: "PoppinsSemiBold";
  font-size: 29px;
  text-transform: capitalize;
  margin: 0 !important;
}

.data-table-info-hardware {
  font-family: "PoppinsRegular";
  font-size: 22px;
  text-transform: uppercase;
  white-space: nowrap;
}
</style>
