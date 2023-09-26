<template>
  <v-img
    :src="generate(img)"
    :lazy-src="require('@/assets/images/lazy.jpg')"
    :class="`${config.vuetify.theme.rounded}`"
    :height="height || (this.$vuetify.display.xsAndDown ? '250px' : this.$vuetify.display.smAndDown ? '325px' : '375px')"
    :gradient="gradient"
    cover
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
  methods: {
    generate(link) {
      if (link.startsWith('http')) {
        return link;
      }
      return require(`@/assets/images/${link}`);
    },
  },
};
</script>
