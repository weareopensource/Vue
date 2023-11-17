<template>
  <div>
    <homeBannerComponent
      v-if="config.home.banner"
      v-bind:title="config.home.banner.title"
      v-bind:button="config.home.banner.button"
    ></homeBannerComponent>
    <homeVideoComponent v-if="config.home.video" v-bind:setup="config.home.video"></homeVideoComponent>
    <homeContentsComponent v-if="config.home.punchline" v-bind:setup="config.home.punchline"></homeContentsComponent>
    <homeContentsComponent v-if="config.home.features" v-bind:setup="config.home.features"></homeContentsComponent>
    <homeCardsComponent v-if="config.home.repos" v-bind:setup="config.home.repos"></homeCardsComponent>
    <homeIconsComponent v-if="config.home.ressources" v-bind:setup="config.home.ressources"></homeIconsComponent>
    <homeTimelineComponent v-if="config.home.install" v-bind:setup="config.home.install"></homeTimelineComponent>
    <homeSlideshowComponent v-if="config.home.designs" v-bind:setup="config.home.designs"></homeSlideshowComponent>
    <homeLogosComponent v-if="config.home.partners" v-bind:setup="config.home.partners"></homeLogosComponent>
    <homeImagesComponent v-if="config.home.blog && news.length > 0" v-bind:setup="{ content: news, ...config.home.blog }"></homeImagesComponent>
    <homeParallaxComponent v-if="config.home.stats" v-bind:setup="statistics"></homeParallaxComponent>
    <homeContactComponent v-if="config.home.contact"></homeContactComponent>
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
import homeTimelineComponent from '../components/home.timeline.component.vue';
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
    homeTimelineComponent,
    homeSlideshowComponent,
    homeParallaxComponent,
    homeImagesComponent,
    homeContactComponent,
  },
  computed: {
    ...mapGetters(['theme', 'news', 'statistics']),
  },
  created() {
    if (this.config.home.stats) this.$store.dispatch('getStatistics');
    if (this.config.home.blog) this.$store.dispatch('getNews');
  },
};
</script>

<style>
.centered-input >>> input {
  text-align: center;
  font-size: 20px;
}
</style>
