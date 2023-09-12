<template>
  <section id="slideshow" v-if="slides.data.length > 0">
    <v-carousel cycle :height="height" hide-delimiter-background :show-arrows="false" :interval="interval || 6000" class="slideshow-carousel">
      <v-carousel-item v-for="({ img, text, color, position }, i) in slides.data" :key="i" :src="img" cover>
        <v-sheet color="transparent" height="100%">
          <div class="d-flex fill-height justify-center align-center" :style="{ float: position && !$vuetify.display.smAndDown ? position : 'none' }">
            <div
              class="text-h3"
              :style="{
                color: color || config.vuetify.theme.themes[theme].colors.onPrimary,
                margin: '50px',
              }"
            >
              {{ text }}
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';
/**
 * Export default
 */
export default {
  name: 'homeSlideshowComponent',
  props: {
    slides: {
      type: Object,
      default: () => ({ data: [] }),
    },
    height: {
      type: String,
      default: '400px',
    },
    interval: {
      type: Number,
      default: 6000,
    },
  },
  computed: {
    ...mapGetters(['theme']),
  },
};
</script>

<style>
.slideshow-carousel {
  max-height: 900px !important;
}
</style>
