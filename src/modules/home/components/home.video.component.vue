<template>
  <section id="video" v-if="setup && setup.file" :style="style('section', setup)" class="pa-8 pb-10">
    <v-container
      :class="`text-center pa-4 ${config.vuetify.theme.rounded}`"
      :style="{
        'max-width': config.vuetify.theme.maxWidth,
        'margin-top': setup.subBanner ? (this.$vuetify.display.smAndDown ? '-20vh' : '-40vh') : 0,
        position: 'relative',
        ...style('video', setup),
      }"
    >
      <video-player :src="setup.file" :poster="setup.poster" loop muted autoplay fluid />
    </v-container>
  </section>
</template>

<script>
/**
 * Module dependencies.
 */
import { VideoPlayer } from '@videojs-player/vue';
import { style } from '../../../lib/helpers/theme';
import 'video.js/dist/video-js.css';
/**
 * Export default
 */
export default {
  name: 'homeAboutsComponent',
  props: {
    // video object
    setup: {
      type: Object,
      default: () => ({
        file: 'video.mp4',
        poster: 'video-poster.webp',
        background: '#101115',
      }),
    },
  },
  components: {
    VideoPlayer,
  },
  methods: {
    style,
  },
};
</script>
