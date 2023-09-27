/**
 * Module dependencies.
 */
import { createApp } from 'vue';
import { createMetaManager, plugin as vueMetaPlugin } from 'vue-meta';
import store from './modules/app/app.store';
import router from './modules/app/app.router';
import plugins from './lib/plugins';
import config from './config/index.cjs';
import App from './modules/app/app.vue';

const app = createApp(App);

app.config.globalProperties.config = config;

app
  .use(store(app))
  .use(router(app))
  .use(createMetaManager())
  .use(vueMetaPlugin)
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
