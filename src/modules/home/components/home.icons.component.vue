<template>
  <section id="reviews" v-if="setup.content.length > 0" :style="style('section', setup)">
    <v-container :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row align="center" justify="center" class="pa-8">
        <homeTitleComponent v-bind:setup="setup"></homeTitleComponent>
        <v-col v-for="({ icon, subtitle, text, color }, i) in setup.content" :key="i" cols="12" sm="12" md="4" data-aos="fade">
          <v-card
            :class="`text-center pt-8 pb-2 px-4  ${config.vuetify.theme.rounded}`"
            :flat="config.vuetify.theme.flat"
            :style="style('card', setup)"
          >
            <v-btn icon :color="color ? color : 'primary'" width="100" height="100" class="text-white">
              <v-icon :icon="icon" size="x-large"></v-icon>
            </v-btn>
            <v-card-title>
              <h4 :style="{ color: color ? color : 'primary' }" class="text-h4 font-weight-bold my-4">{{ subtitle }}</h4>
            </v-card-title>
            <v-card-text class="px-4">
              <v-markdown v-if="text" class="text-h6 text-justify" :source="text" />
            </v-card-text>
          </v-card>
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
  name: 'homeReviewsComponent',
  props: ['setup'],
  components: {
    homeTitleComponent,
  },
  methods: {
    style,
  },
};
</script>
