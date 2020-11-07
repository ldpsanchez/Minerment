import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createProvider } from "./vue-apollo";
import vuetify from "./plugins/vuetify";
import "@/styles/styles.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  vuetify,
  render: (h) => {
    return h(App);
  },
}).$mount("#app");
