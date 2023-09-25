<template>
  <v-col v-if="setup.title || setup.subtitle" cols="12" :class="offpadding ? 'text-left pa-0' : 'text-left'">
    <h3
      v-if="setup.title"
      data-aos="fade"
      class="text-h3 text-primary font-weight-bold my-4"
      :class="slide ? 'ml-16' : null"
      v-text="setup.title"
    ></h3>
    <h4 v-if="setup.subtitle" class="text-h4 text-secondary font-weight-bold my-4" v-text="setup.subtitle"></h4>
  </v-col>
</template>
<script>
/**
 * Export default
 */
export default {
  name: 'hometitleComponent',
  props: ['setup', 'offpadding', 'slide'],
};
</script>
