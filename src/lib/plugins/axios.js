/**
 * Module dependencies.
 */
import Vue from 'vue';
import axios from 'axios';

Vue.prototype.axios = axios.create({
  withCredentials: true,
});
