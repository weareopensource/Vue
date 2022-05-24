/**
 * Module dependencies.
 */
import _ from 'lodash';
import GhostContentAPI from '@tryghost/content-api';
import * as tools from '../../../lib/helpers/tools';

/**
 * Getters: get state
 */
const getters = {
  team: (state) => state.team,
  contents: (state) => state.contents,
  news: (state) => state.news,
  contact: (state) => state.contact,
  statistics: (state) => state.statistics,
};

/**
 * Actions
 */
const actions = (app) => {
  const config = app.config.globalProperties.config;
  const api = `${config.api.protocol}://${config.api.host}:${config.api.port}/${config.api.base}`;
  return {
    getTeam: async ({ commit }) => {
      try {
        const team = await app.config.globalProperties.axios.get(`${api}/${config.api.endPoints.home}/team`);
        commit('team_set', team.data.data);
      } catch (err) {
        commit('error', err);
      }
    },
    getChangelogs: async ({ commit }) => {
      try {
        const changelogs = await app.config.globalProperties.axios.get(`${api}/${config.api.endPoints.home}/changelogs`);
        commit(
          'contents_set',
          changelogs.data.data.map((item) => ({
            title: item.title,
            markdown: item.markdown.replace(/\[([^\\[\]]*)\]\((.*?)\)/gm, '$1').replace(/\(\w{7}\)/g, ''),
            style: 'air',
          })),
        );
      } catch (err) {
        commit('error', err);
      }
    },
    getPages: async ({ commit }, name) => {
      try {
        const pages = await app.config.globalProperties.axios.get(`${api}/${config.api.endPoints.home}/pages/${name}`);
        commit(
          'contents_set',
          pages.data.data.map((item) => {
            const firstLine = item.markdown.split('\n')[0];
            return {
              title: null,
              banner: firstLine[0] === '!' ? /\(([^)]+)\)/.exec(firstLine)[1] : null,
              markdown: firstLine[0] === '!' ? item.markdown.substring(firstLine.length + 2) : item.markdown,
              style: 'classic',
            };
          }),
        );
      } catch (err) {
        commit('task_error', err);
      }
    },
    getNews: async ({ commit }) => {
      try {
        const ghost = new GhostContentAPI({
          url: config.home.blog.url,
          key: config.home.blog.key,
          version: 'v3',
        });
        const res = await ghost.posts.browse({ limit: 3, filter: 'tag:article' });
        commit('news_set', res);
      } catch (err) {
        commit('error', err);
      }
    },
    getStatistics: async ({ commit }) => {
      try {
        const tasks = await app.config.globalProperties.axios.get(`${api}/${config.api.endPoints.tasks}/stats`);
        const releases = await app.config.globalProperties.axios.get(`${api}/${config.api.endPoints.home}/releases`);
        const users = await app.config.globalProperties.axios.get(`${api}/${config.api.endPoints.users}/stats`);
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
};

/**
 * Mutation: change state in a Vuex store is by committing a mutation
 */
const mutations = {
  error(err) {
    console.log(err);
  },
  // team
  team_set(state, data) {
    state.team = data;
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
const state = (app) => {
  return {
    team: [],
    contents: [],
    news: [],
    contact: {},
    statistics: app.config.globalProperties.config.home.stats.data,
  };
};

/**
 * Export default
 */
export default (app) => {
  return {
    state: state(app),
    getters,
    actions: actions(app),
    mutations,
  };
};
