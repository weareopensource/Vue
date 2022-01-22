/**
 * Module dependencies.
 */
import Vue from 'vue';
import { marked } from 'marked';

Vue.component('v-markdown', {
  props: ['source'],
  computed: {
    markup() {
      return marked.parse(this.source);
    },
  },
  template: '<span v-html="markup"></span>',
});
