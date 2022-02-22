<template>
  <v-container
    fluid
    fill-height
    class="ma-0 pa-0"
  >
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col 
        cols="7"
        xl="7"
      >
        <Carousel></Carousel>
      </v-col>
      <v-col
        cols="5"
        style="height: 100vh; max-height: 100%;"
      >
        <v-container  
          fill-height
          fluid
          class="pa-0"
        >
          <v-row 
            no-gutters
            class="align-self-start pa-0"
          >
            <v-col
              class="d-flex flex-row justify-end pa-0"
            >
              <div class="logo-container">
                <div class="logo-img">
                  <img :src="data.src" alt="">
                </div>
                <div class="logo-text">
                  <p class="ma-0">minerment</p>
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
              <Registration></Registration>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "@/components/CarouselImg";
import Registration from "@/components/RegistrationForm";

export default {
  name: "log-view",
  components: {
    Carousel,
    Registration    
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
.logo-container {
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