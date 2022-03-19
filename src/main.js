/**
 * Module dependencies.
 */
import { createApp } from 'vue';
import store from '@/modules/_app/app.store';
import router from '@/modules/_app/app.router';
import vuetify from '@/lib/plugins/vuetify';
import config from '@/config/index.cjs';
import App from '@/modules/_app/app.vue';

const app = createApp(App);

app.config.globalProperties.config = config;

app.use(router(app)).use(store(app)).use(vuetify).mount('#app');
