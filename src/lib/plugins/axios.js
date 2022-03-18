/**
 * Module dependencies.
 */
import { createApp } from 'vue';
import App from '@/modules/_app/app.vue';
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$axios = axios.create({
  withCredentials: true,
});
