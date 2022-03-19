/**
 * Module dependencies.
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/modules/_app/app.store';

import home from '@/modules/home/router/home.router';
import auth from '@/modules/auth/router/auth.router';
import users from '@/modules/users/router/users.router';
import secure from '@/modules/secure/router/secure.router';
import tasks from '@/modules/tasks/router/tasks.router';

const routes = [].concat(home, auth, users, secure, tasks);

/**
 * Router configuration
 */
const getRouter = (app) => {
  const router = createRouter({
    history: createWebHashHistory(),
    base: process.env.BASE_URL,
    routes,
  });
  router.beforeEach((to, from, next) => {
    // meta
    document.title = to.name;
    const userRoles = localStorage.getItem(`${app.config.globalProperties.config.cookie.prefix}UserRoles`)
      ? localStorage.getItem(`${app.config.globalProperties.config.cookie.prefix}UserRoles`).split(',')
      : [];
    // secu
    if (to.matched.some((record) => record.meta.roles)) {
      if (store.getters.isLoggedIn && to.meta.roles.some((r) => userRoles.includes(r))) {
        next();
        return;
      }
      next('/signin');
    } else {
      next();
    }
  });
  return router;
};

export default getRouter;
