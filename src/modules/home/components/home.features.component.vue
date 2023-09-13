<template>
  <section id="features" v-if="features.content.length > 0" class="py-12" :style="style('section', features)">
    <v-container class="text-center">
      <h4 class="font-weight-bold mb-3 pb-8 text-h4 text-center" v-if="features.title" v-text="features.title"></h4>
      <v-row justify="center">
        <v-col v-for="({ icon, title, text, color }, i) in features.content" :key="i" cols="12" md="4" data-aos="fade-up">
          <v-card class="pt-8 pb-2 px-4 rounded-xl" :flat="config.vuetify.theme.flat" :style="style('card', features)">
            <div>
              <v-btn icon :color="color ? color : 'primary'" width="88" height="88" class="text-white">
                <v-icon :icon="icon" large></v-icon>
              </v-btn>
            </div>
            <v-card-title class="justify-center font-weight-black text-uppercase">{{ title }}</v-card-title>
            <v-card-text class="subtitle-1 text-medium-emphasis text-onSurface">
              <v-markdown :source="text" />
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
/**
 * Export default
 */
export default {
  name: 'homeAboutsComponent',
  props: ['features'],
  methods: {
    style,
  },
};
</script>
