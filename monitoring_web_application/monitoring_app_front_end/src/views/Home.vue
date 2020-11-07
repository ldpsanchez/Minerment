<template>
    <v-container fluid ma-0 pa-0 class="d-flex flex-row fill-height">
  <v-row
    class="fill-height"
  >
    <v-col
        xl="7"
        cols="7"
        class="d-flex flex-column justify-center align-center pa-0 ma-0"
      >
        <Carousel></Carousel>
      </v-col>
      <v-col 
        xl="5"
        cols="5" 
        class="d-flex flex-column justify-center align-center pa-0 ma-0">
        <Login></Login>
      </v-col>
  </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Carousel from "@/components/home-carousel-img.vue";

export default {
  name: "Home",
  components: {
    Login,
    Carousel
  }
};
</script>
