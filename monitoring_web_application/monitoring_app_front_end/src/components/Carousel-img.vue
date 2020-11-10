<template>
  <v-carousel
    :show-arrows="false" 
    hide-delimiters 
    cycle
    style="height: 100vh; max-height: 100%;"
  >
    <v-carousel-item
      v-for="(item, i) in images"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data: function() {
    return {
      images: [
        { src: require("@/assets/carousel-image1.jpg") },
        { src: require("@/assets/carousel-image2.jpg") },
        { src: require("@/assets/carousel-image3.jpg") },
        { src: require("@/assets/carousel-image4.jpg") },
      ]
    };
  }
};
</script>

<style lang="scss">
.v-image {
  height: 100% !important;
}

</style>