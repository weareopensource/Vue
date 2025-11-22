/**
 * Module dependencies.
 */
import { createApp } from 'vue';
import { createHead } from 'unhead';
import { VueHeadMixin } from '@unhead/vue';
import { createPinia } from 'pinia';
import initializeStores from './modules/app/app.store';
import router from './modules/app/app.router';
import plugins from './lib/plugins';
import config from './config/index.js';
import App from './modules/app/app.vue';

const app = createApp(App);
const head = createHead();
const pinia = createPinia();

const appRouter = router();
const routes = appRouter.options.routes;
app.config.globalProperties.config = config;
app.config.globalProperties.routes = routes;

app
  .mixin(VueHeadMixin)
  .use(pinia)
  .use(appRouter)
  .use(plugins.aos)
  .use(plugins.images)
  .use(plugins.lodash)
  .use(plugins.markdown)
  .use(plugins.posthog)
  .use(plugins.dayjs)
  .use(plugins.vuetify)
  .use(plugins.gravatar);

// Set the head instance
app.config.globalProperties.$head = head;

// Initialize stores after all plugins are loaded
initializeStores(routes);

app.mount('#app');
