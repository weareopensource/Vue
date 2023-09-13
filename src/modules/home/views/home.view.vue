<template>
  <div>
    <homeBannerComponent v-bind:title="config.home.banner.title" v-bind:button="config.home.banner.button"></homeBannerComponent>
    <homeVideoComponent v-bind:video="config.home.video"></homeVideoComponent>
    <homeAboutsComponent v-bind:abouts="config.home.abouts"></homeAboutsComponent>
    <homeSlideshowComponent v-bind:slides="config.home.slideshow"></homeSlideshowComponent>
    <homeLogosComponent v-bind:logos="config.home.logos"></homeLogosComponent>
    <homeFeaturesComponent v-bind:features="config.home.features"></homeFeaturesComponent>
    <homeBlogComponent v-bind:blog="config.home.blog" v-bind:news="news"></homeBlogComponent>
    <homeStatsComponent v-bind:statistics="statistics"></homeStatsComponent>
    <homeContactComponent></homeContactComponent>
  </div>
</template>

<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';
import homeBannerComponent from '../components/home.banner.component.vue';
import homeVideoComponent from '../components/home.video.component.vue';
import homeAboutsComponent from '../components/home.abouts.component.vue';
import homeLogosComponent from '../components/home.logos.component.vue';
import homeFeaturesComponent from '../components/home.features.component.vue';
import homeSlideshowComponent from '../components/home.slideshow.component.vue';
import homeStatsComponent from '../components/home.stats.component.vue';
import homeBlogComponent from '../components/home.blog.component.vue';
import homeContactComponent from '../components/home.contact.component.vue';

/**
 * Export default
 */
export default {
  components: {
    homeBannerComponent,
    homeVideoComponent,
    homeAboutsComponent,
    homeLogosComponent,
    homeFeaturesComponent,
    homeSlideshowComponent,
    homeStatsComponent,
    homeBlogComponent,
    homeContactComponent,
  },
  computed: {
    ...mapGetters(['theme', 'news', 'statistics']),
  },
  created() {
    this.$store.dispatch('getStatistics').then(() => {
      this.$store.dispatch('getNews');
    });
  },
};
</script>

<style>
.centered-input >>> input {
  text-align: center;
  font-size: 20px;
}
</style>
