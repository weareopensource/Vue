/**
 * Module dependencies.
 */
import Vue from 'vue';
import config from '@/config';

const api = `${config.api.protocol}://${config.api.host}:${config.api.port}/${config.api.base}`;

/**
 * Getters: get state
 */
const getters = {
  tasks: state => state.tasks,
};

/**
 * Actions
 */
const actions = {
  getTasks: async ({ commit }) => {
    try {
      const res = await Vue.prototype.axios({
        url: `${api}/${config.api.endPoints.tasks}/`,
        method: 'GET',
        withCredentials: true,
      });
      commit('tasks_success', res.data.data);
    } catch (err) {
      commit('tasks_error');
    }
  },
};

/**
 * Mutation: change state in a Vuex store is by committing a mutation
 */
const mutations = {
  tasks_request(state) {
    state.status = 'loading';
  },
  tasks_success(state, data) {
    state.status = 'success';
    state.tasks = data;
  },
  tasks_error(state) {
    state.status = 'error';
  },
};

/**
 * State
 */
const state = {
  status: '',
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
