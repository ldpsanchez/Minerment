import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import HighchartsVue from 'highcharts-vue'
import Axios from "axios";
// import dependencias de apollo plugin
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

// importando estilos
import "./styles/styles.scss";


// configurando vue-apollo
const httpLink = new createHttpLink({
  uri: "https://countries-274616.ew.r.appspot.com/"
});

const cacheApolloVue = new InMemoryCache();

const clientGraphql = new ApolloClient({
  link: httpLink,
  cache: cacheApolloVue
})

const apolloProvider = new VueApollo({
  defaultClient: clientGraphql
});

// importando plugins para usar
Vue.use(VueApollo);
Vue.use(HighchartsVue);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
