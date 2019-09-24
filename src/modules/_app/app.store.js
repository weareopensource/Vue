/**
 * Module dependencies.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import app from '@/modules/_core/stores/core.store';
import auth from '@/modules/auth/stores/auth.store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/**
 * Export default
 */
export default new Vuex.Store({
  modules: {
    app,
    auth,
  },
  strict: debug,
});
