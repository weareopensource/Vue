<template>
  <section id="video" v-if="video && video.file" :style="sectionStyle" class="pa-5">
    <v-container
      class="text-center pa-4"
      :style="{
        'max-width': '1400px',
        'border-radius': '20px',
        background: video.background,
        'margin-top': this.$vuetify.display.smAndDown ? '-20vh' : '-40vh',
        position: 'relative',
      }"
    >
      <video-player :src="require('@/assets/videos/' + video.file)" :poster="require('@/assets/videos/' + video.poster)" loop muted autoplay fluid />
    </v-container>
  </section>
</template>

<script>
import { VideoPlayer } from '@videojs-player/vue';
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
    // cutstom style
    custom: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    VideoPlayer,
  },
  computed: {
    sectionStyle() {
      return this.custom && this.custom.section ? this.custom.section : null;
    },
  },
};
</script>
