<template>
  <section id="logos" :style="style('section', setup)">
    <v-container :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row align="center" justify="center" class="px-0 py-8 pb-14">
        <homeTitleComponent v-bind:setup="setup"></homeTitleComponent>
        <v-window v-if="setup.content.length > 0" class="w-100" show-arrows>
          <template v-slot:prev="{ props }">
            <v-btn color="primary" variant="flat" icon="fa-solid fa-chevron-left" size="small" @click="props.onClick"> </v-btn>
          </template>
          <template v-slot:next="{ props }">
            <v-btn color="primary" variant="flat" icon="fa-solid fa-chevron-right" size="small" @click="props.onClick"> </v-btn>
          </template>
          <v-window-item v-for="(item, i) in setup.content" :key="i">
            <v-row align="center" justify="center" class="text-center px-16">
              <v-col cols="12" md="2">
                <!-- eslint-disable-next-line -->
                <a v-if="item.link" :href="item.link">
                  <v-avatar :size="setup.style.size">
                    <v-img v-if="item.img" :src="item.img" :alt="item.subtitle || item.title || 'logo'" />
                  </v-avatar>
                </a>
              </v-col>
              <v-col cols="12" md="10">
                <homeContentsTextComponent class="quote pl-12 py-4" v-bind:item="item"></homeContentsTextComponent>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
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
import homeContentsTextComponent from './utils/home.content.text.component.vue';
/**
 * Export default
 */
export default {
  name: 'homeLogosComponent',
  props: ['setup'],
  components: {
    homeTitleComponent,
    homeContentsTextComponent,
  },
  methods: {
    style,
  },
};
</script>

<style>
.quote {
  border-left: 6px solid rgb(var(--v-theme-secondary)) !important;
}
</style>
