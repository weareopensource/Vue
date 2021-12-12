/**
 * Module dependencies.
 */
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import config from '@/config/index.cjs';

Vue.use(Vuetify);

/**
 * Export default
 */
export default new Vuetify({
  theme: config.vuetify.theme,
  icons: config.vuetify.icons,
});
