/**
 * Module dependencies.
 */
import 'vuetify/lib/styles/main.sass';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';
import config from '@/config/index.cjs';

export default createVuetify({
  components,
  directives,
  theme: config.vuetify.theme,
  icons: config.vuetify.icons,
});
