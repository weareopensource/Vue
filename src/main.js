/**
 * Module dependencies.
 */
import { createApp } from 'vue';
import { createHead } from '@unhead/vue'; // createHead existe bien dans @unhead/vue
import store from './modules/app/app.store';
import router from './modules/app/app.router';
import plugins from './lib/plugins';
import config from './config/index.js';
import App from './modules/app/app.vue';

const app = createApp(App);
const head = createHead();

app.config.globalProperties.config = config;

app
  .use(head) // Il suffit de passer l'instance head, pas besoin de plugin supplémentaire
  .use(store(app))
  .use(router(app))
  .use(plugins.aos)
  .use(plugins.axios)
  .use(plugins.images)
  .use(plugins.lodash)
  .use(plugins.markdown)
  .use(plugins.posthog)
  .use(plugins.moment)
  .use(plugins.vuetify)
  .use(plugins.gravatar)
  .mount('#app');
