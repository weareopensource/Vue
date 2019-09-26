/**
 * Module dependencies.
 */
import config from '@/config';

/**
 * Getters: get state
 */
const getters = {
  drawer: state => state.drawer,
};

/**
 * Mutation:change state in a Vuex store is by committing a mutation
 */
const mutations = {
  setDrawer(state, data) {
    state.drawer = data;
  },
};

/**
 * State
 */
const state = {
  drawer: config.vuetify.drawer.model,
};

/**
 * Export default
 */
export default {
  state,
  getters,
  mutations,
};
