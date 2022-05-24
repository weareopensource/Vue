/**
 * Module dependencies.
 */
import home from '../views/home.view.vue';
import pages from '../views/pages.view.vue';
import team from '../views/team.view.vue';

/**
 * Router configuration
 */
export default [
  {
    path: '/',
    name: 'toto', // todo: get from config
    component: home,
    meta: {
      icon: 'fa-solid fa-house',
    },
  },
  {
    path: '/changelogs',
    name: 'changelogs',
    component: pages,
    meta: {
      display: false, // hide any time
      title: 'Changelogs',
      data: 'getChangelogs', // array of {title: ..., markdown: ...}
    },
  },
  {
    path: '/team',
    name: 'Team',
    component: team,
    meta: {
      display: false, // hide any time
      title: 'Team',
    },
  },
  {
    path: '/pages/:name',
    name: 'Pages',
    component: pages,
    meta: {
      display: false, // hide any time
      data: 'getPages', // array of {title: ..., markdown: ...}
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Home' },
    meta: {
      display: false, // hide any time
    },
  },
];
