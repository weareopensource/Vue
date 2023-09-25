<template>
  <section id="articles" v-if="setup.content.length > 0" :style="style('section', setup)">
    <v-container :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row align="center" justify="center" class="pa-8">
        <homeTitleComponent v-bind:setup="setup"></homeTitleComponent>
        <v-col v-for="({ feature_image, excerpt, title, url }, i) in setup.content" :key="i" md="4" data-aos="fade">
          <v-hover v-slot="{ isHovering, props }">
            <!-- eslint-disable-next-line -->
            <a :href="url" target="_blank">
              <v-img
                v-bind="props"
                :src="feature_image"
                cover
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                :class="{ 'on-hover': isHovering, ...imageStyle }"
                class="mb-4 align-end"
                :style="style('img', setup)"
              >
                <v-card-title class="text-white text-h6 font-weight-bold"> {{ title }}</v-card-title>
                <v-card-text :class="{ 'on-hover': isHovering }" class="text-white text-body-1 pb-5"> {{ excerpt }}</v-card-text>
              </v-img>
            </a>
          </v-hover>
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
import homeTitleComponent from './utils/home.title.component.vue';
/**
 * Export default
 */
export default {
  name: 'homeBlogComponent',
  props: ['setup'],
  computed: {
    imageStyle() {
      const obj = {};
      obj[this.config.vuetify.theme.rounded] = true;
      return obj;
    },
  },
  components: {
    homeTitleComponent,
  },
  methods: {
    style,
  },
};
</script>

<style scoped>
.v-img,
.v-card-text {
  transition: opacity 0.4s ease-in-out;
}

.v-img:not(.on-hover) {
  opacity: 0.8;
}

.v-card-text {
  opacity: 0.7;
}
.v-card-text.on-hover {
  opacity: 1;
}
</style>
