/**
 * Module dependencies.
 */
/* eslint-disable import/extensions */
import 'vuetify/styles';
import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.css';

// Vuetify
import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/lib/iconsets/fa';
import { mdi } from 'vuetify/lib/iconsets/mdi';

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});
