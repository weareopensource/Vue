<template>
  <section v-if="abouts.content.length > 0" :style="style('section', abouts)">
    <v-container id="abouts" style="max-width: 1400px">
      <v-row align="center" justify="center">
        <v-col
          v-for="({ title, text, button }, i) in abouts.content"
          :key="i"
          cols="12"
          :md="abouts.length > 1 ? 6 : 12"
          :style="{
            'max-width': this.abouts.content.length > 1 ? null : '1400px',
          }"
          class="pa-10"
        >
          <h4 class="text-h4 text-primary font-weight-bold pb-5" v-text="title"></h4>
          <v-markdown class="text-h6" :source="text" />
          <v-btn v-if="button.title" :href="button.link" variant="text" class="my-5 text-none text-h6" color="secondary" size="large">
            <v-icon class="mr-2" size="x-small">fa-solid fa-angle-right</v-icon>
            {{ button.title }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
/**
 * Module dependencies.
 */
import { style } from '../../../lib/helpers/theme';
/**
 * Export default
 */
export default {
  name: 'homeAboutsComponent',
  props: {
    abouts: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    style,
  },
};
</script>
