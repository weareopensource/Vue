<template>
  <section id="timeline" :style="style('section', setup)">
    <v-container ref="timelineContainer" :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row align="center" justify="center" class="px-3 py-0">
        <homeTitleComponent v-bind:setup="setup"></homeTitleComponent>
        <v-timeline v-if="setup.content.length > 0" :density="this.$vuetify.display.smAndDown ? 'compact' : 'default'">
          <v-timeline-item
            v-for="(item, i) in setup.content"
            :key="i"
            :dot-color="item.color"
            :icon-color="item.iconColor || 'white'"
            :icon="item.icon"
            fill-dot
            size="x-large"
          >
            <template v-if="item.title" v-slot:opposite>
              <h5 class="text-h5 text-md-h4 text-secondary font-weight-bold" v-text="item.title"></h5>
            </template>
            <v-card
              :class="`${config.vuetify.theme.rounded} my-8 pb-2`"
              :flat="config.vuetify.theme.flat"
              :style="this.style('card', { style: item.style })"
            >
              <homeImgComponent v-if="item.img && !item.reversed" :img="item.img"></homeImgComponent>
              <homeCardsTextComponent :item="item"></homeCardsTextComponent>
              <homeImgComponent v-if="item.img && item.reversed" :img="item.img"></homeImgComponent>
            </v-card>
          </v-timeline-item>
        </v-timeline>
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
import homeCardsTextComponent from './utils/home.card.text.component.vue';
import homeImgComponent from './utils/home.img.component.vue';
/**
 * Export default
 */
export default {
  name: 'homeTimelineComponent',
  props: {
    setup: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    homeTitleComponent,
    homeCardsTextComponent,
    homeImgComponent,
  },
  methods: {
    style,
  },
};
</script>
