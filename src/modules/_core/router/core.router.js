/**
 * Module dependencies.
 */
import Vue from 'vue';
import Router from 'vue-router';
import store from '@/modules/_app/app.store';

import home from '@/modules/home/router/home.router';
import auth from '@/modules/auth/router/auth.router';
import secure from '@/modules/secure/router/secure.router';

Vue.use(Router);

/**
 * Router configuration
 */
const baseRoutes = [];
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: baseRoutes.concat(home, auth, secure),
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/signin');
  } else {
    next();
  }
});

/**
 * Export default
 */
export default router;
