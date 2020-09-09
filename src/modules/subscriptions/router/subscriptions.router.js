/**
 * Module dependencies.
 */
import subscriptions from '../views/subscriptions.view.vue';
import subscription from '../views/subscription.view.vue';

/**
 * Router configuration
 */
export default [
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: subscriptions,
    meta: {
      icon: 'paper-plane',
      roles: ['admin'], // proteced, require one of this roles
    },
  },
  {
    path: '/subscriptions/:id',
    name: 'subscription',
    component: subscription,
    meta: {
      display: false, // hide any time
      roles: ['admin'], // proteced, require one of this roles
    },
  },
];
