<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="container-logo d-flex flex-row">
        <div class="contain-img d-flex align-center">
          <img :src="navbarImg" alt="hola" />
        </div>
        <div class="contain-text d-flex align-center">
          <p class="ma-0">minerment</p>
        </div>
      </div>
      <div class="d-flex justify-end">
        <v-row>
          <v-col>
            <v-btn icon>
              <v-icon>mdi-fullscreen</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon>
              <v-icon>mdi-moon-waning-crescent</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon>
              <v-icon>mdi-bell-outline</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon>
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-menu
              bottom
              offset-y
              left
            >
              <template
                v-slot:activator="{on, attrs}"
              >
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(value, key) in listItems"
                  :key="key"
                  :to="{name: value.link}"
                >
                  <v-list-item-icon>
                    <v-icon>{{value.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <p class="text-dropdown ma-0">{{value.text}}</p>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      app
      class="navbar-navigation-local"
      color="#070f26"
      width="200px"
    >
      <v-list dense nav>
        <v-list>
          <v-list-item-group color="#53e7c7" active-class>
            <v-list-item
              v-for="(item, index) of items"
              :key="index"
              :to="{ name: item.link }"
            >
              <v-list-item-icon>
                <v-icon color="#53e7c7">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ item.text }}</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-main class="pa-0">
      <v-container fluid fill-height class="flex-shrink-0">
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
      listItems: [
        {
          icon: "mdi-account-settings-outline",
          text: "setting",
          link: "settings"
        },
        {
          icon: "mdi-account-cog",
          text: "user manager",
          link: "manageUser"
        },
        {
          icon: "mdi-power",
          text: "logout",
          link: "home"
        }
      ],
      navbarImg: require("@/assets/minerment_logo.svg"),
      drawer: false,
      sizeWidth: 60,
      group: null,
      items: [
        {
          text: "Dashboard",
          icon: "mdi-view-dashboard",
          link: "dashboardMain",
        },
        {
          text: "Miner's",
          icon: "mdi-pickaxe",
          link: "miners",
        },
        {
          text: "Alerts",
          icon: "mdi-bell-ring",
          link: "alerts",
        },
      ],
    };
  },
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

.v-list-item__content {
  color: white !important;
}

.container-logo {
  width: 200px;
  height: 100%;
}

.contain-img {
  height: 100%;
  width: 45px;

  img {
    height: 100%;
    width: 90%;
    object-fit: contain;
  }
}

.contain-text {
  width: 100%;
  p {
    font-family: "MoonBold";
    font-size: 30px;
    text-transform: capitalize;
    font-weight: bold;
    color: black;
  }
}

.v-toolbar__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.navbar {
  width: 100vh !important;
}

.text-dropdown {
  font-family: "PoppinsMedium";
  font-size: 15px;
  text-transform: capitalize;
}
</style>
