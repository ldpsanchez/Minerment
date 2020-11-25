import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import HighchartsVue from 'highcharts-vue'
import Axios from "axios";

// importando estilos
import "./styles/styles.scss";

Vue.use(HighchartsVue);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
