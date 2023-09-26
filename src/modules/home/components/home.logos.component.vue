<template>
  <section id="logos" :style="style('section', setup)">
    <v-container class="text-center" :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row align="center" justify="center" class="px-0 py-8">
        <homeTitleComponent v-bind:setup="setup"></homeTitleComponent>
        <v-slide-group v-if="setup.content.length > 0" show-arrows>
          <v-slide-group-item v-for="({ image, link }, i) in setup.content" :key="i">
            <v-col>
              <v-card
                :class="`text-center pt-8 pb-2 mx-12 py-6 ${config.vuetify.theme.rounded}`"
                :flat="config.vuetify.theme.flat"
                :style="style('card', setup)"
              >
                <!-- eslint-disable-next-line -->
                <a v-if="link" :href="link">
                  <v-avatar :size="setup.style.size">
                    <v-img v-if="image" :src="image" alt="logo" />
                  </v-avatar>
                </a>
              </v-card>
            </v-col>
          </v-slide-group-item>
        </v-slide-group>
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
  name: 'homeLogosComponent',
  props: ['setup'],
  components: {
    homeTitleComponent,
  },
  methods: {
    style,
  },
};
</script>
