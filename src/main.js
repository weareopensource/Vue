/**
 * Module dependencies.
 */
import '@fortawesome/fontawesome-free/css/all.css';
import '@/lib/plugins';
import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import App from '@/modules/_app/app.vue';
import store from '@/modules/_app/app.store';
import router from '@/modules/_core/router/core.router';
import vuetify from '@/lib/plugins/vuetify';

// Vuetify
Vue.config.productionTip = false;

// auth
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = token;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
