<template>
  <section id="stats" class="black">
    <v-parallax :height="$vuetify.display.smAndDown ? 700 : 500" src="/images/parallax.webp">
      <v-container class="fill-height" :style="`max-width: ${config.vuetify.theme.maxWidth}`">
        <v-row v-if="setup.length > 0" align="center" justify="center">
          <v-col v-for="({ value, title }, i) in setup" :key="i" md="3">
            <div class="text-center text-white" data-aos="fade">
              <div class="font-weight-black text-h2 mb-4" v-text="value"></div>
              <div class="text-uppercase" style="font-size: 125%" v-text="title"></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
/**
 * Export default
 */
export default {
  name: 'homeStatsComponent',
  props: ['setup'],
};
</script>
