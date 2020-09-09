/**
 * Module dependencies.
 */
import users from '../views/users.view.vue';
import user from '../views/user.view.vue';

/**
 * Router configuration
 */
export default [
  {
    path: '/users',
    name: 'Users',
    component: users,
    meta: {
      icon: 'user-tie',
      roles: ['admin'], // proteced, require one of this roles
    },
  },
  {
    path: '/users/:id',
    name: 'user',
    component: user,
    meta: {
      display: false, // hide any time
      roles: ['admin'], // proteced, require one of this roles
    },
  },
];
