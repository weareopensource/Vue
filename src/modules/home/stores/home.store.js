/**
 * Module dependencies.
 */
import Vue from 'vue';
import _ from 'lodash';
import config from '@/config';
import model from '@/lib/middlewares/model';
import GhostContentAPI from '@tryghost/content-api';

const api = `${config.api.protocol}://${config.api.host}:${config.api.port}/${config.api.base}`;
const whitelists = ['email', 'news'];

/**
 * Getters: get state
 */
const getters = {
  news: (state) => state.news,
  subscription: (state) => state.subscription,
};

/**
 * Actions
 */
const actions = {
  getNews: async ({ commit }) => {
    try {
      const ghost = new GhostContentAPI({
        url: config.home.blog.url,
        key: config.home.blog.key,
        version: 'v3',
      });
      const res = await ghost.posts.browse({ limit: 3 });
      commit('news_set', res);
    } catch (err) {
      commit('news_error', err);
    }
  },
  createSubscription: async ({ commit }, params) => {
    try {
      const obj = model.clean(params, whitelists);
      obj.news = true;
      const res = await Vue.prototype.axios.post(`${api}/${config.api.endPoints.subscriptions}/`, obj);
      commit('subscription_set', res.data.data);
    } catch (err) {
      commit('subscription_error', err);
    }
  },
};

/**
 * Mutation: change state in a Vuex store is by committing a mutation
 */
const mutations = {
  // news
  news_error(err) {
    console.log(err);
  },
  news_set(state, data) {
    state.news = data;
  },
  // mail
  subscription_error(err) {
    console.log(err);
  },
  subscription_set(state, data) {
    state.subscription = data;
  },
  subscription_update(state, data) {
    _.merge(state.subscription, data);
  },
};

/**
 * State
 */
const state = {
  news: [],
  subscription: {},
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
