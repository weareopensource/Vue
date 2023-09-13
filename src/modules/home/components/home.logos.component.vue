<template>
  <section id="logos" v-if="logos.content.length > 0" class="py-12" :style="style('section', logos)">
    <v-container class="text-center">
      <h4 class="font-weight-bold mb-3 pb-8 text-h4 text-center" v-if="logos.title" v-text="logos.title"></h4>
      <v-row justify="center">
        <v-col v-for="({ image, link }, i) in logos.content" :key="i" :cols="12" :sm="6" :md="4" :lg="4" :xl="2">
          <!-- eslint-disable-next-line -->
          <a v-if="link" :href="link">
            <v-avatar :size="logos.style.size">
              <v-img v-if="image" :src="image" alt="logo" />
            </v-avatar>
          </a>
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
  name: 'homeLogosComponent',
  props: ['logos'],
  methods: {
    style,
  },
};
</script>
