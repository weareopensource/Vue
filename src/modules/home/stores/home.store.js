/**
 * Module dependencies.
 */
import Vue from 'vue';
import _ from 'lodash';
import config from '@/config';
import model from '@/lib/middlewares/model';
import tools from '@/lib/helpers/tools';
import GhostContentAPI from '@tryghost/content-api';

const api = `${config.api.protocol}://${config.api.host}:${config.api.port}/${config.api.base}`;
const whitelists = ['email', 'news'];

/**
 * Getters: get state
 */
const getters = {
  contents: (state) => state.contents,
  news: (state) => state.news,
  subscription: (state) => state.subscription,
  contact: (state) => state.contact,
  statistics: (state) => state.statistics,
};

/**
 * Actions
 */
const actions = {
  getChangelogs: async ({ commit }) => {
    try {
      const changelogs = await Vue.prototype.axios.get(
        `${api}/${config.api.endPoints.core}/changelogs`,
      );
      commit(
        'contents_set',
        changelogs.data.data.map((item) => ({
          title: item.title,
          markdown: decodeURIComponent(
            Array.prototype.map
              .call(
                atob(item.data.content),
                (c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`,
              )
              .join(''),
          ),
        })),
      );
    } catch (err) {
      commit('error', err);
    }
  },
  getNews: async ({ commit }) => {
    try {
      const ghost = new GhostContentAPI({
        url: config.home.blog.url,
        key: config.home.blog.key,
        version: 'v3',
      });
      const res = await ghost.posts.browse({ limit: 3, filter: 'tag:dev' });
      commit('news_set', res);
    } catch (err) {
      commit('error', err);
    }
  },
  createSubscription: async ({ commit }, params) => {
    try {
      const obj = model.clean(params, whitelists);
      obj.news = true;
      const res = await Vue.prototype.axios.post(
        `${api}/${config.api.endPoints.subscriptions}/`,
        obj,
      );
      commit('subscription_set', res.data.data);
    } catch (err) {
      commit('error', err);
    }
  },
  getStatistics: async ({ commit }) => {
    try {
      const tasks = await Vue.prototype.axios.get(`${api}/${config.api.endPoints.tasks}/stats`);
      const releases = await Vue.prototype.axios.get(
        `${api}/${config.api.endPoints.core}/releases`,
      );
      const users = await Vue.prototype.axios.get(`${api}/${config.api.endPoints.users}/stats`);
      commit('statistics_set', {
        tasks: tasks.data.data,
        releases: releases.data.data,
        users: users.data.data,
      });
    } catch (err) {
      commit('error', err);
    }
  },
};

/**
 * Mutation: change state in a Vuex store is by committing a mutation
 */
const mutations = {
  error(err) {
    console.log(err);
  },
  // news
  contents_set(state, data) {
    state.contents = data;
  },
  // news
  news_set(state, data) {
    state.news = data;
  },
  // mail
  subscription_set(state, data) {
    state.subscription = data;
  },
  subscription_update(state, data) {
    _.merge(state.subscription, data);
  },
  // mail
  contact_set(state, data) {
    state.contact = data;
  },
  contact_update(state, data) {
    _.merge(state.contact, data);
  },
  // statistics
  statistics_set(state, data) {
    state.statistics[0].value = data.tasks;
    state.statistics[1].value = _.sum(
      _.flatten(
        data.releases.map((release) => {
          if (release.list.length > 0) {
            return tools.releasesNumber(release.list[0].name);
          }
          return 0;
        }),
      ).map((x) => +x),
    );
    state.statistics[2].value = data.users;
  },
};

/**
 * State
 */
const state = {
  contents: [],
  news: [],
  subscription: {},
  contact: {},
  statistics: config.home.stats.data,
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
