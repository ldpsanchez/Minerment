import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createProvider } from "./vue-apollo";
import vuetify from "./plugins/vuetify"; //Plugin: Vuetify, framework UI
import HighchartsVue from 'highcharts-vue' //Plugin: HighCharts

// importing styles globally
import "@/styles/styles.scss";

Vue.use(HighchartsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  vuetify,
  render: application => application(App)
}).$mount("#app");
