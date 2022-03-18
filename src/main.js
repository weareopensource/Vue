/**
 * Module dependencies.
 */
import '@fortawesome/fontawesome-free/css/all.css';
import '@/lib/plugins';
import 'vuetify/dist/vuetify.min.css';

import { createApp } from 'vue';
import App from '@/modules/_app/app.vue';
import store from '@/modules/_app/app.store';
import router from '@/modules/_app/app.router';
import vuetify from '@/lib/plugins/vuetify';
import config from '@/config/index.cjs';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);
app.use(config);

app.mount('#app');
