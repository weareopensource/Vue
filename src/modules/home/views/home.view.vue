<template>
  <div>
    <homeBannerComponent v-bind:title="config.home.banner.title" v-bind:button="config.home.banner.button"></homeBannerComponent>
    <homeVideoComponent
      v-bind:video="config.home.video"
      v-bind:custom="{
        section: { background: config.vuetify.theme.themes[theme].colors.surface },
        card: { background: config.vuetify.theme.themes[theme].colors.background },
      }"
    ></homeVideoComponent>
    <homeAboutsComponent v-bind:abouts="config.home.abouts" v-bind:md="6" v-bind:custom="{ 'max-width': '1400px' }"></homeAboutsComponent>
    <homeFeaturesComponent
      v-bind:features="config.home.features"
      v-bind:custom="{
        section: { background: config.vuetify.theme.themes[theme].colors.surface },
        card: { background: config.vuetify.theme.themes[theme].colors.background },
      }"
    ></homeFeaturesComponent>
    <homeSlideshowComponent v-bind:slides="config.home.slideshow" v-bind:height="'500px'" v-bind:interval="6000"></homeSlideshowComponent>
    <homeBlogComponent
      v-bind:title="config.home.blog.title"
      v-bind:url="config.home.blog.url"
      v-bind:news="news"
      v-bind:custom="{
        section: { background: config.vuetify.theme.themes[theme].colors.surface },
      }"
    ></homeBlogComponent>
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
