/**
 * Module dependencies.
 */
import Vue from 'vue';
import Parser from 'rss-parser';

Vue.prototype.rss = new Parser();
