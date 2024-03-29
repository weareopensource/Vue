/**
 * Module dependencies.
 */
import _ from 'lodash';
import model from '../../../lib/middlewares/model';

const whitelists = ['firstName', 'lastName', 'bio', 'position', 'email', 'avatar', 'roles'];

/**
 * Getters: get state
 */
const getters = {
  users: (state) => state.users,
  user: (state) => state.user,
};

/**
 * Actions
 */
const actions = (app) => {
  const config = app.config.globalProperties.config;
  const api = `${config.api.protocol}://${config.api.host}:${config.api.port}/${config.api.base}`;
  return {
    getUsers: async ({ commit }, params) => {
      try {
        const res = await app.config.globalProperties.axios.get(`${api}/${config.api.endPoints.users}/page/${params}`);
        commit('users_set', res.data.data);
      } catch (err) {
        commit('user_error', err);
      }
    },
    getUser: async ({ commit }, params) => {
      try {
        const res = await app.config.globalProperties.axios.get(`${api}/${config.api.endPoints.users}/${params.id}`);
        commit('user_set', res.data.data);
      } catch (err) {
        commit('user_error', err);
      }
    },
    updateUser: async ({ commit, state }, params) => {
      try {
        const obj = model.clean(state.user, whitelists);
        const res = await app.config.globalProperties.axios.put(`${api}/${config.api.endPoints.users}/${params.id}`, obj);
        commit('user_update', res.data.data);
      } catch (err) {
        commit('user_error', err);
      }
    },
    deleteUser: async ({ commit }, params) => {
      try {
        await app.config.globalProperties.axios.delete(`${api}/${config.api.endPoints.users}/${params.id}`);
        commit('user_reset');
      } catch (err) {
        commit('user_error', err);
      }
    },
    // uploadAvatar: async ({ commit }, params) => {
    //   try {
    //     const formData = new FormData();
    //     formData.append('img', params.file);
    //     const res = await app.config.globalProperties.axios.post(
    //       `${api}/${config.api.endPoints...}/..../avatar/${params.id}`,
    //       formData,
    //       { headers: { 'Content-Type': 'multipart/form-data' } },
    //     );
    //     commit('sample_update', res.data.data);
    //   } catch (err) {
    //     commit('sample_error', err);
    //   }
    // },
  };
};

/**
 * Mutation: change state in a Vuex store is by committing a mutation
 */
const mutations = {
  user_error(err) {
    console.log(err);
  },
  users_set(state, data) {
    state.users = data;
  },
  user_set(state, data) {
    state.user = data;
  },
  user_update(state, data) {
    _.assign(state.user, data);
  },
  user_reset(state) {
    state.user = {};
  },
};

/**
 * State
 */
const state = () => ({
  user: {
    firstName: '',
    lastName: '',
    bio: '',
    position: '',
    email: '',
    avatar: '',
    roles: [],
    updated: '',
    created: '',
  },
  users: [],
});

/**
 * Export default
 */
export default (app) => {
  return {
    state,
    getters,
    actions: actions(app),
    mutations,
  };
};
