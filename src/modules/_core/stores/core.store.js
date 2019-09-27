/**
 * Module dependencies.
 */
// import _ from 'lodash';
import Vue from 'vue';
import _ from 'lodash';
import config from '@/config';

/**
 * Getters: get state
 */
const getters = {
  drawer: state => state.drawer,
  nav: state => state.nav,
};

/**
 * Actions
 */
const actions = {
  refreshNav: ({ commit, rootGetters }) => {
    const nav = _.pickBy(Vue.prototype.$routes, (i) => {
      if (i.meta.display !== false) { // hidden item
        if (!('auth' in i.meta)) return i; // auth undefined, always displayed
        if (!i.meta.auth && !rootGetters.isLoggedIn) return i; // auth false, not logged
        if (i.meta.auth && rootGetters.isLoggedIn) return i; // auth true and logged
      }
    });
    commit('set_nav', nav);
  },
};

/**
 * Mutation:change state in a Vuex store is by committing a mutation
 */
const mutations = {
  set_drawer(state, data) {
    state.drawer = data;
  },
  set_nav(state, data) {
    state.nav = data;
  },
};

/**
 * State
 */
const state = {
  drawer: config.vuetify.drawer.model,
  nav: [],
};

/**
 * Export default
 */
export default {
  state,
  getters,
  actions,
  mutations,
};
