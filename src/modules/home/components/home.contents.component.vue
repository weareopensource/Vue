<template>
  <section id="contents" v-if="setup.content.length > 0" :style="style('section', setup)">
    <v-container :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row align="center" justify="center" class="pa-8">
        <homeTitleComponent v-bind:setup="setup"></homeTitleComponent>
        <v-col v-for="(item, i) in setup.content" :key="i" :cols="item.fullWidth ? 12 : setup.content.length > 1 ? 6 : 12">
          <homeContentsTextComponent v-if="item.reversed" v-bind:item="item" class="mb-6"></homeContentsTextComponent>
          <div
            v-if="item.video"
            :class="`py-6 ${config.vuetify.theme.rounded}`"
            :style="{
              ...style('video', setup),
            }"
          >
            <video-player
              :src="require('@/assets/videos/' + item.video.file)"
              :poster="require('@/assets/videos/' + item.video.poster)"
              loop
              muted
              autoplay
              fluid
            />
          </div>
          <v-img
            v-if="item.img"
            :src="require('@/assets/images/' + item.img)"
            :height="item.height"
            :class="`my-6 ${config.vuetify.theme.rounded}`"
            cover
          ></v-img>
          <homeContentsTextComponent v-if="!item.reversed" v-bind:item="item"></homeContentsTextComponent>
        </v-col>
      </v-row>
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
import homeTitleComponent from './utils/home.title.component.vue';
import homeContentsTextComponent from './utils/home.contents.text.component.vue';

/**
 * Export default
 */
export default {
  name: 'homeContentsComponent',
  props: {
    setup: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    VideoPlayer,
    homeTitleComponent,
    homeContentsTextComponent,
  },
  methods: {
    style,
  },
};
</script>
