/**
 * Module dependencies.
 */

import { createVuetify } from 'vuetify';
import config from '@/config/index.cjs';

export default createVuetify({
  theme: config.vuetify.theme,
  icons: config.vuetify.icons,
});
