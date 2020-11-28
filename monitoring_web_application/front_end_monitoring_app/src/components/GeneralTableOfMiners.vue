<template>
  <v-container
    fill-height
  >
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Miners
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="miners"
            :search="search"
          >
            <template
              v-slot:item.name="{ item }"
              :class="stylesText"
            >
              <router-link
                :to="{name: `viewOfMiner`}"
              >{{item.name}}</router-link>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GeneralTableOfMiners",
  data: () => {
    return {
      stylesText: "text-link-miners",
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"

        },
        {text: "Model", value: "model"},
        {text: "Status", value: "status"},
        {text: "IP", value: "ip"},
        {text: "Hashrate", value: "hashrate"},
        {text: "Temp", value: "temp"},
        {text: "Fans", value: "fans"},
        {text: "Power", value: "power"},
        {text: "Uptime", value: "uptime"}
      ],
      miners: [
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        },
        {
          name: "XASY-WQ2-231",
          model: "Bitmain Antminer Z15",
          status: "on",
          ip: "192.168.1.2",
          hashrate: "145.4 Kh/s",
          temp: "78 C",
          fans: "4334 RPM",
          power: "645W",
          uptime: "16d 22h 47min"
        }
      ]
    }
  }
};
</script>

<style></style>
