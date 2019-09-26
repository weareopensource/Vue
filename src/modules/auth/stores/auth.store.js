/**
 * Module dependencies.
 */
import axios from 'axios';
import config from '@/config';

const api = `${config.api.protocol}://${config.api.host}:${config.api.port}/${config.api.base}`;

/**
 * State
 */
const state = {
  status: '',
  cookieExpire: localStorage.getItem('CookieExpire') || 0,
  user: {},
};

/**
 * Getters: get state
 */
const getters = {
  isLoggedIn: state => !!state.cookieExpire,
  authStatus: state => state.status,
};

/**
 * Actions
 */
const actions = {
  signin: ({ commit }, user) => new Promise((resolve, reject) => {
    commit('auth_request');
    axios({
      url: `${api}/${config.api.endPoints.auth}/signin`,
      data: user,
      method: 'POST',
      withCredentials: true,
    })
      .then((resp) => {
        const cookieExpire = resp.data.tokenExpiresIn;
        const user = resp.data.user;
        localStorage.setItem('CookieExpire', cookieExpire);
        // axios.defaults.headers.common.Authorization = token;
        commit('auth_success', cookieExpire, user);
        resolve(resp);
      })
      .catch((err) => {
        commit('auth_error');
        localStorage.removeItem('token');
        reject(err);
      });
  }),
  signup({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request');
      axios({
        url: `${api}/${config.api.endPoints.auth}/signup`,
        data: user,
        method: 'POST',
        withCredentials: true,
      })
        .then((resp) => {
          const cookieExpire = resp.data.tokenExpiresIn;
          const user = resp.data.user;
          localStorage.setItem('CookieExpire', cookieExpire);
          //  axios.defaults.headers.common.Authorization = token;
          commit('auth_success', cookieExpire, user);
          resolve(resp);
        })
        .catch((err) => {
          commit('auth_error', err);
          localStorage.removeItem('CookieExpire');
          reject(err);
        });
    });
  },
  signout({ commit }) {
    return new Promise((resolve) => {
      commit('auth_logout');
      localStorage.removeItem('CookieExpire');
      resolve();
    });
  },
};

/**
 * Mutation: change state in a Vuex store is by committing a mutation
 */
const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, cookie, cookieExpire, user) {
    state.status = 'success';
    state.cookieExpire = cookieExpire;
    state.user = user;
  },
  auth_error(state) {
    state.status = 'error';
  },
  auth_logout(state) {
    state.status = '';
    state.cookieExpire = 0;
  },
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
