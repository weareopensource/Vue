<template>
  <section id="cards" v-if="setup.content.length > 0" :style="style('section', setup)">
    <v-container ref="cardsContainer" :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row align="center" justify="center" class="pa-8">
        <homeTitleComponent v-bind:setup="setup"></homeTitleComponent>
        <v-window v-model="step" class="pa-0">
          <v-window-item v-for="n in steps + 1" :key="n">
            <v-row align="center" justify="center" class="pa-0">
              <v-col
                v-for="({ subtitle, text, img, style, button, fullWidth, reversed }, i) in setup.content.slice(step * 2, step * 2 + 2)"
                :key="i"
                cols="12"
                :md="fullWidth ? 12 : setup.content.length > 1 ? 6 : 12"
              >
                <v-card :class="`${config.vuetify.theme.rounded}`" :flat="config.vuetify.theme.flat" :style="this.style('card', { style })">
                  <v-img
                    v-if="img && !reversed"
                    :src="require('@/assets/images/' + img)"
                    height="375px"
                    :class="`${config.vuetify.theme.rounded}`"
                    cover
                  ></v-img>
                  <div>
                    <v-card-title class="text-center">
                      <h4 v-if="subtitle" class="text-h4 font-weight-bold my-4" v-text="subtitle"></h4>
                    </v-card-title>
                    <v-card-text class="px-8">
                      <v-markdown v-if="text" class="text-h6 text-justify" :source="text" />
                    </v-card-text>
                    <v-card-actions align="center" justify="center">
                      <v-spacer>
                        <v-btn
                          v-if="button.title"
                          :href="button.link"
                          class="mb-5 text-none font-weight-bold rounded-lg"
                          size="large"
                          :style="{ 'border-color': button.color, color: button.color, 'border-width': '1.5px' }"
                          variant="outlined"
                          >{{ button.title }}</v-btn
                        ></v-spacer
                      >
                    </v-card-actions>
                  </div>
                  <v-img
                    v-if="img && reversed"
                    :src="require('@/assets/images/' + img)"
                    height="375px"
                    :class="`${config.vuetify.theme.rounded}`"
                    cover
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
        <homeDynamicIsland
          v-if="steps > 0"
          :container="cardsContainer"
          :text="setup.dynamicIsland.text"
          :window="{ step, steps }"
          :action="stepper"
        ></homeDynamicIsland>
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
import homeDynamicIsland from './utils/home.dynamicIsland.component.vue';

/**
 * Export default
 */
export default {
  name: 'homeCardsComponent',
  data: () => ({
    step: 0,
    cardsContainer: null,
  }),
  props: {
    setup: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    homeTitleComponent,
    homeDynamicIsland,
  },
  computed: {
    steps() {
      return Math.ceil(this.setup.content.length / 2) - 1;
    },
  },
  methods: {
    style,
    stepper(direction) {
      switch (direction) {
        case '+':
          this.step += 1;
          break;
        case '-':
          this.step -= 1;
          break;
        default:
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.cardsContainer = this.$refs.cardsContainer;
    });
  },
};
</script>
