/**
 * Module dependencies.
 */
import Vue from 'vue';
import config from '@/config';

// const api = `${config.api.protocol}://${config.api.host}:${config.api.port}/${config.api.base}`;

/**
 * Getters: get state
 */
const getters = {
  news: (state) => state.news,
};

/**
 * Actions
 */
const actions = {
  getNews: async ({ commit }) => {
    try {
      const data = await Vue.prototype.rss.parseURL(config.home.blog.url);
      let news = data.items.slice(0, 3);
      const rex = /<img[^>]+src="(https:\/\/[^">]+)"/;
      news = news.map((item) => ({
        test: item['content:encoded'],
        title: item.title,
        image: rex.exec(item['content:encoded'])[1],
        text: item.contentSnippet,
        link: item.link,
      }));
      commit('news_set', news);
    } catch (err) {
      commit('news_error', err);
    }
  },
};

/**
 * Mutation: change state in a Vuex store is by committing a mutation
 */
const mutations = {
  // global
  news_error(err) {
    console.log(err);
  },
  // news
  news_set(state, data) {
    state.news = data;
  },
};

/**
 * State
 */
const state = {
  news: {},
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
