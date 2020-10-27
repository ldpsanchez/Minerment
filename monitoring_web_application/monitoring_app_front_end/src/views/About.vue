<template>
  <div class="about">
    <p>Hola a todos!</p>
    <MessageApp />
  </div>
</template>

<script>
import MessageApp from "@/components/MessageApp.vue";

export default {
  name: "About",
  components: {
    MessageApp
  }
};
</script>
