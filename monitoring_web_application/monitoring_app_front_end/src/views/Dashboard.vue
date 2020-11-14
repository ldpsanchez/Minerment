<template>
<v-app>
    <v-app-bar 
      app
      flat
    >
    </v-app-bar>
    <v-navigation-drawer
      app
      class="navbar-navigation-local"
    >
      <v-list
        dense
        nav
      >
        <v-list>
          <v-list-item-group
            color="blue"
          >
            <v-list-item
              v-for="(item, index) of items"
              :key="index"
              :to="{ name: item.link }"
            >
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{item.text}}</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-main
      class="pa-0"
    >
      <v-container 
        fluid
        fill-height
        class="flex-shrink-0"
      >
        <router-view></router-view>
      </v-container>
    </v-main>
</v-app>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => {
    return {
      drawer: false,
      sizeWidth: 60,
      group: null,
      items: [
        { 
          text: "Dashboard", 
          icon: "mdi-view-dashboard",
          link: "dashboardMain"
        },
        {
          text: "Miner's", 
          icon: "mdi-pickaxe",
          link: "miners"
        },
        {
          text: "Alerts", 
          icon: "mdi-bell-ring",
          link: "alerts"
        }
      ]
    }
  }
};
</script>

<style lang="scss">
/* .navbar-navigation-local {
  background-color: #070F26 !important;
} */

/* .v-list-item--active {
  &:hover {
    background: #00C9FF !important;
    background: -webkit-linear-gradient(to right, #92FE9D, #00C9FF) !important;  
    background: linear-gradient(to right, #92FE9D, #00C9FF) !important;
  }
} */
</style>
