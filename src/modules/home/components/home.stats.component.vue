<template>
  <section id="stats" class="black" v-if="statistics.length > 0">
    <v-parallax :height="$vuetify.display.smAndDown ? 700 : 500" :src="config.home.stats.background || require('@/assets/images/paralax.jpg')">
      <v-row class="mx-auto fill-height align-center pa-12">
        <v-col v-for="({ value, title }, i) in statistics" :key="i" cols="12" md="3">
          <div class="text-center text-white" data-aos="fade">
            <div class="font-weight-black text-h2 mb-4" v-text="value"></div>
            <div class="text-uppercase" style="font-size: 125%" v-text="title"></div>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
/**
 * Export default
 */
export default {
  name: 'homeStatsComponent',
  props: ['statistics'],
};
</script>
