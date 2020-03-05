/**
 * Module dependencies.
 */
import Vue from 'vue';
import _ from 'lodash';
import config from '@/config';

const api = `${config.api.protocol}://${config.api.host}:${config.api.port}/${config.api.base}`;

/**
 * Getters: get state
 */
const getters = {
  tasks: (state) => state.tasks,
  task: (state) => state.task,
};

/**
 * Actions
 */
const actions = {
  getTasks: async ({ commit }) => {
    try {
      const res = await Vue.prototype.axios.get(`${api}/${config.api.endPoints.tasks}/`);
      commit('tasks_set', res.data.data);
    } catch (err) {
      commit('task_error', err);
    }
  },
  getTask: async ({ commit }, params) => {
    try {
      const res = await Vue.prototype.axios.get(`${api}/${config.api.endPoints.tasks}/${params}`);
      commit('task_set', res.data.data);
    } catch (err) {
      commit('task_error', err);
    }
  },
  createTask: async ({ commit }, params) => {
    try {
      console.log(params);
      const res = await Vue.prototype.axios.post(`${api}/${config.api.endPoints.tasks}/`, params);
      commit('task_set', res.data.data);
    } catch (err) {
      commit('task_error', err);
    }
  },
  updateTask: async ({ commit, state }, params) => {
    const model = ['title', 'description'];
    try {
      const res = await Vue.prototype.axios.put(`${api}/${config.api.endPoints.tasks}/${params.id}`, _.pick(_.merge(state.task, params), model));
      commit('task_update', res.data.data);
    } catch (err) {
      commit('task_error', err);
    }
  },
  deleteTask: async ({ commit }, params) => {
    try {
      await Vue.prototype.axios.delete(`${api}/${config.api.endPoints.tasks}/${params.id}`);
      commit('task_reset');
    } catch (err) {
      commit('task_error', err);
    }
  },
};

/**
 * Mutation: change state in a Vuex store is by committing a mutation
 */
const mutations = {
  // global
  task_error(state, err) {
    console.log(err);
  },
  // scraps
  tasks_set(state, data) {
    state.tasks = data;
  },
  // scrap
  task_set(state, data) {
    state.task = data;
  },
  task_update(state, data) {
    _.merge(state.task, data);
  },
  task_reset(state) {
    state.task = {};
  },
};

/**
 * State
 */
const state = {
  task: {
    title: '',
    description: '',
  },
  tasks: [],
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
