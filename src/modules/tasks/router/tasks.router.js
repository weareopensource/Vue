/**
 * Module dependencies.
 */
import tasks from '@/modules/tasks/views/tasks.view.vue';

/**
 * Router configuration
 */
export default [
  {
    path: '/tasks',
    name: 'Tasks',
    component: tasks,
    meta: {
      icon: 'tasks',
    },
  },
];
