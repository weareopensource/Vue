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
      commit('task_error');
    }
  },
  getTask: async ({ commit }, params) => {
    try {
      const res = await Vue.prototype.axios.get(`${api}/${config.api.endPoints.tasks}/${params}`);
      commit('task_set', res.data.data);
    } catch (err) {
      commit('task_error');
    }
  },
  createTask: async ({ commit }, params) => {
    try {
      console.log(params);
      const res = await Vue.prototype.axios.post(`${api}/${config.api.endPoints.tasks}/`, params);
      commit('task_set', res.data.data);
    } catch (err) {
      commit('task_error');
    }
  },
  updateTask: async ({ commit, state }, params) => {
    const model = ['title', 'description'];
    try {
      const res = await Vue.prototype.axios.put(`${api}/${config.api.endPoints.tasks}/${params.id}`, _.pick(_.merge(state.task, params), model));
      commit('task_update', res.data.data);
    } catch (err) {
      commit('task_error');
    }
  },
  deleteTask: async ({ commit }, params) => {
    try {
      await Vue.prototype.axios.delete(`${api}/${config.api.endPoints.tasks}/${params.id}`);
      commit('task_reset');
    } catch (err) {
      commit('task_error');
    }
  },
};

/**
 * Mutation: change state in a Vuex store is by committing a mutation
 */
const mutations = {
  // global
  task_error(state) {
    state.status = 'error';
  },
  // scraps
  tasks_set(state, data) {
    state.status = 'success';
    state.tasks = data;
  },
  // scrap
  task_set(state, data) {
    state.status = 'success';
    state.task = data;
  },
  task_update(state, data) {
    state.status = 'success';
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
  status: '',
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
