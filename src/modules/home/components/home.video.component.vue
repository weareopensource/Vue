<template>
  <section id="video" v-if="video && video.file" :style="style('section', video)" class="pa-5">
    <v-container
      class="text-center pa-4"
      :style="{
        'max-width': '1400px',
        'border-radius': '20px',
        'margin-top': this.$vuetify.display.smAndDown ? '-20vh' : '-40vh',
        position: 'relative',
        ...style('video', video),
      }"
    >
      <video-player :src="require('@/assets/videos/' + video.file)" :poster="require('@/assets/videos/' + video.poster)" loop muted autoplay fluid />
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
    video: {
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
