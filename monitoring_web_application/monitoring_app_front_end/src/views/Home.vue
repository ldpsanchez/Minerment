<template>
  <v-container 
    fluid
    fill-height 
    class="ma-0 pa-0"
  >
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <v-col
        xl="7"
        cols="7"
      >
        <Carousel></Carousel>
      </v-col>
      <v-col 
        xl="5"
        cols="5"
        style="height: 100vh; max-height: 100%;"
      >
        <v-container
          fluid
          fill-height
          class="pa-0"
        >
          <v-row
            no-gutters
            class="align-self-start"
          >
            <v-col
              class="d-flex flex-row justify-end pa-0"
            >
              <div class="container-logo">
                <div
                  class="logo-img"
                >
                  <img :src="data.src" alt="">
                </div>
                <div
                  class="logo-text"
                >
                  <p>minerment</p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row
            no-gutters
          >
            <v-col
              justify="center"
              align="center"
            >
              <Login></Login>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
  </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Carousel from "@/components/Carousel-img.vue";

export default {
  name: "Home",
  components: {
    Login,
    Carousel
  },
  data: () => {
    return {
      data: {
        src: require("@/assets/minerment_logo.svg")
      }
    }
  }
};
</script>

<style lang="scss">
.container-logo {
  width: 220px;
  height: 40px;
  display: flex;
  flex-direction: row;

  .logo-text {
    height: 100%;
    width: 150px;
    display: flex;
    flex-direction: column;
    vertical-align: end;

    p {
      font-family: "MoonBold";
      font-size: 33px;
      text-transform: capitalize;
      color: black;
    }
  }
}

.logo-img {
  height: 72%;
  width: 40px;
  align-self: flex-end;
}

.logo-img > img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>