<template>
  <section id="abouts" v-if="abouts.length > 0" :style="sectionStyle">
    <v-container class="text-justify">
      <v-row align="center" justify="center">
        <v-col
          v-for="({ title, text, button }, i) in abouts"
          :key="i"
          cols="12"
          :md="abouts.length > 1 ? md : 12"
          :style="{
            'max-width': this.abouts.length > 1 ? null : '1400px',
          }"
          class="pa-10"
        >
          <h2 class="my-5 text-secondary" v-text="title"></h2>
          <v-markdown class="text-h6" :source="text" />
          <v-btn v-if="button.title" :href="button.link" variant="text" class="my-5 text-none" color="secondary" size="large">
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
 * Export default
 */
export default {
  name: 'homeAboutsComponent',
  props: {
    abouts: {
      type: Array,
      default: () => [],
    },
    custom: {
      type: Object,
      default: () => ({}),
    },
    md: {
      type: [Number, String],
      default: 12,
    },
  },
  computed: {
    sectionStyle() {
      return this.custom && this.custom.section ? this.custom.section : null;
    },
  },
};
</script>
