<template>
  <v-img
    :src="img"
    lazy-src="/images/lazy.webp"
    :class="`${config.vuetify.theme.rounded}`"
    :height="height || (this.$vuetify.display.xsAndDown ? '225px' : this.$vuetify.display.smAndDown ? '300px' : '350px')"
    :gradient="gradient"
    cover
    :alt="title || 'image'"
  >
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
      </div>
    </template>
    <v-card-title v-if="title" class="text-white text-h6 font-weight-bold"> {{ title }}</v-card-title>
    <v-card-text v-if="text" class="text-white text-body-1 pb-5"> {{ text }}</v-card-text>
  </v-img>
</template>
<script>
/**
 * Export default
 */
export default {
  name: 'homeImgComponent',
  props: ['img', 'gradient', 'title', 'text', 'height'],
};
</script>
