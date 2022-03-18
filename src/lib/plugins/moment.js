/**
 * Module dependencies.
 */
import moment from 'moment';
import { createApp } from 'vue';
import App from '@/modules/_app/app.vue';

const app = createApp(App);
app.config.globalProperties.$moment = moment;
