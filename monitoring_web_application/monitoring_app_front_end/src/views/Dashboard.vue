<template>
  <div class="about">
    <router-link to="/">inicio</router-link>
    <MessageApp />
  </div>
</template>

<script>
import MessageApp from "@/components/MessageApp.vue";

export default {
  name: "Dashboard",
  components: {
    MessageApp
  }
};
</script>
