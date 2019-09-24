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
      auth: false, // hide when logged
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: signup,
    meta: {
      icon: 'arrow-right',
      display: false, // hide any time
    },
  },
];
