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
const store = createStore({
  state: {
    name: 'Vue',
  },
  modules: {
    core,
    auth,
    users,
    home,
    tasks,
  },
  strict: debug,
});

export default store;
