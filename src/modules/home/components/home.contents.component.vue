<template>
  <section id="contents" :style="style('section', setup)">
    <v-container :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row v-if="setup.content.length > 0" align="center" justify="center" class="px-0 py-8">
        <homeTitleComponent v-bind:setup="setup"></homeTitleComponent>
        <v-col v-for="(item, i) in setup.content" :key="i" :md="item.fullWidth ? 12 : setup.content.length > 1 ? 6 : 12" cols="12">
          <homeContentsTextComponent v-if="item.reversed" v-bind:item="item" class="mb-6"></homeContentsTextComponent>
          <div
            v-if="item.video"
            :class="`py-6 ${config.vuetify.theme.rounded}`"
            :style="{
              ...style('video', setup),
            }"
          >
            <video-player :src="item.video.file" :poster="item.video.poster" loop muted autoplay fluid />
          </div>
          <v-img
            v-if="item.img"
            :src="item.img"
            :height="this.$vuetify.display.xsAndDown ? '250px' : this.$vuetify.display.smAndDown ? '325px' : '375px'"
            :class="`my-6 ${config.vuetify.theme.rounded}`"
            cover
            :alt="item.subtitle || item.title || 'content'"
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
import homeContentsTextComponent from './utils/home.content.text.component.vue';

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
