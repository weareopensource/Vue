/**
 * Module dependencies.
 */
import signin from '@/modules/auth/views/auth.signin.view.vue';
import signup from '@/modules/auth/views/auth.signup.view.vue';

/**
 * Router configuration
 */
export default [
  {
    path: '/signin',
    name: 'Signin',
    component: signin,
    meta: {
      icon: 'user',
      display: false, // hide any time
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: signup,
    meta: {
      display: false, // hide any time
    },
  },
];
