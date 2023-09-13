<template>
  <section id="slideshow" v-if="slides.content.length > 0">
    <v-carousel
      cycle
      :height="slides.style.height"
      hide-delimiter-background
      :show-arrows="false"
      :interval="slides.style.interval || 6000"
      class="slideshow-carousel"
    >
      <v-carousel-item v-for="({ img, text, color, position }, i) in slides.content" :key="i" :src="img" cover>
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
