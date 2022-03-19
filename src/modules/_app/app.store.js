/**
 * Module dependencies.
 */
import { createStore } from 'vuex';
import core from '@/modules/_core/stores/core.store';
import auth from '@/modules/auth/stores/auth.store';
import users from '@/modules/users/stores/users.store';
import home from '@/modules/home/stores/home.store';
import tasks from '@/modules/tasks/stores/tasks.store';

const debug = process.env.NODE_ENV !== 'production';

/**
 * Vuex configuration
 */
const getStore = (app) => {
  return createStore({
    state: {
      name: 'Vue',
    },
    modules: {
      core: core(app),
      auth: auth(app),
      users: users(app),
      home: home(app),
      tasks: tasks(app),
    },
    strict: debug,
  });
};

export default getStore;
