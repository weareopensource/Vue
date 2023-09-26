<template>
  <div>
    <homeBannerComponent v-bind:title="config.home.banner.title" v-bind:button="config.home.banner.button"></homeBannerComponent>
    <homeVideoComponent v-bind:setup="config.home.video"></homeVideoComponent>
    <homeContentsComponent v-bind:setup="config.home.punchline"></homeContentsComponent>
    <homeContentsComponent v-bind:setup="config.home.features"></homeContentsComponent>
    <homeCardsComponent v-bind:setup="config.home.repos"></homeCardsComponent>
    <homeIconsComponent v-bind:setup="config.home.ressources"></homeIconsComponent>
    <homeSlideshowComponent v-bind:setup="config.home.designs"></homeSlideshowComponent>
    <homeLogosComponent v-bind:setup="config.home.partners"></homeLogosComponent>
    <homeImagesComponent v-bind:setup="{ content: news, ...config.home.blog }"></homeImagesComponent>
    <homeParallaxComponent v-bind:setup="statistics"></homeParallaxComponent>
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
import homeContentsComponent from '../components/home.contents.component.vue';
import homeCardsComponent from '../components/home.cards.component.vue';
import homeLogosComponent from '../components/home.logos.component.vue';
import homeIconsComponent from '../components/home.icons.component.vue';
import homeSlideshowComponent from '../components/home.slideshow.component.vue';
import homeImagesComponent from '../components/home.images.component.vue';
import homeParallaxComponent from '../components/home.parallax.component.vue';
import homeContactComponent from '../components/home.contact.component.vue';

/**
 * Export default
 */
export default {
  components: {
    homeBannerComponent,
    homeVideoComponent,
    homeContentsComponent,
    homeCardsComponent,
    homeLogosComponent,
    homeIconsComponent,
    homeSlideshowComponent,
    homeParallaxComponent,
    homeImagesComponent,
    homeContactComponent,
  },
  computed: {
    ...mapGetters(['theme', 'news', 'statistics']),
  },
  created() {
    this.$store.dispatch('getNews');

    // this.$store.dispatch('getStatistics').then(() => {
    // });
  },
};
</script>

<style>
.centered-input >>> input {
  text-align: center;
  font-size: 20px;
}
</style>
