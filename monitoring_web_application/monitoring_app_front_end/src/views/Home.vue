<template>
  <v-container fluid  fill-height class="ma-0 pa-0">
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        xl="7"
        cols="7"
        class="d-flex flex-column justify-center align-center pa-0"
      >
        <Carousel></Carousel>
      </v-col>
      <v-col 
        xl="5"
        cols="5" 
        class="d-flex justify-center align-center pa-0 ma-0"
      >
        <v-row class="d-flex flex-row" no-gutters>
          <v-col cols="12">
            <div class="container-image">
            <v-img src="@/assets/minerment_logo.svg"></v-img>
          </div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <Login></Login>
          </v-col>
        </v-row>
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
.container-image {
  height: 188px;
  width: 100%;
}
</style>