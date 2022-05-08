/**
 * Module dependencies.
 */
import { createApp } from 'vue';
import store from './modules/_app/app.store';
import router from './modules/_app/app.router';
import plugins from './lib/plugins';
import config from './config/index.cjs';
import App from './modules/_app/app.vue';

const app = createApp(App);

app.config.globalProperties.config = config;

app
  .use(store(app))
  .use(router(app))
  .use(plugins.aos)
  .use(plugins.axios)
  .use(plugins.images)
  .use(plugins.lodash)
  .use(plugins.markdown)
  .use(plugins.matomo)
  .use(plugins.moment)
  .use(plugins.vuetify)
  .mount('#app');
