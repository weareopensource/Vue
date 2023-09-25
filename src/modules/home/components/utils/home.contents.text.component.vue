<template>
  <div data-aos="fade">
    <homeTitleComponent v-if="item.subtitle" v-bind:setup="{ subtitle: item.subtitle }" :offpadding="true"></homeTitleComponent>
    <v-markdown
      v-if="item.text"
      :style="item.quote ? { 'line-height': '2em' } : null"
      :class="item.quote ? 'text-h5' : 'text-h6'"
      :source="item.text"
    />
    <v-btn
      v-if="item.button && item.button.title && item.button.link"
      :href="item.button.link"
      variant="text"
      class="my-4 text-none text-h6"
      color="secondary"
      size="large"
    >
      {{ item.button.title }}
      <v-icon class="ml-4" size="x-small">fa-solid fa-arrow-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
/**
 * Module dependencies.
 */
import homeTitleComponent from './home.title.component.vue';

/**
 * Export default
 */
export default {
  name: 'homeContentsTextComponent',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    homeTitleComponent,
  },
};
</script>
