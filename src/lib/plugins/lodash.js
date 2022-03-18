/**
 * Module dependencies.
 */
import { createApp } from 'vue';
import App from '@/modules/_app/app.vue';
import _ from 'lodash';

const app = createApp(App);
app.config.globalProperties.$_ = _;
