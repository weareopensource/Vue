/**
 * Module dependencies.
 */
import home from '@/modules/home/views/home.view.vue';

/**
 * Router configuration
 */
export default [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: {
      icon: 'home',
    },
  },
  {
    path: '*',
    redirect: { name: 'Home' },
    meta: {
      display: false, // hide any time
    },
  },
];
