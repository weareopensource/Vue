<template>
  <div>
    <v-card>
      <v-toolbar color="pink" dark dense flat>
        <v-toolbar-title class="text-body-2"> Upcoming Changes </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-icon large @click="next"> mdi-chevron-right </v-icon>
      </v-card-actions>
    </v-card>
    <v-icon large color="green darken-2"> mdi-domain </v-icon>

    <homeBannerComponent v-bind:ratio="1" v-bind:app="config.app" v-bind:statusMargin="450"></homeBannerComponent>
    <homeAboutsComponent v-bind:abouts="config.home.abouts" v-bind:md="6" v-bind:custom="null"></homeAboutsComponent>
    <homeFeaturesComponent
      v-bind:features="config.home.features"
      v-bind:custom="{
        section: { background: config.vuetify.theme.themes[theme].surface },
        card: { background: config.vuetify.theme.themes[theme].background },
      }"
    ></homeFeaturesComponent>
    <homeSlideshowComponent
      v-bind:slides="config.home.slideshow"
      v-bind:custom="null"
      v-bind:height="350"
      v-bind:mdImage="8"
      v-bind:mdText="4"
      v-bind:full="false"
      v-bind:interval="6000"
    ></homeSlideshowComponent>
    <homeStatsComponent v-bind:statistics="statistics"></homeStatsComponent>
    <homeBlogComponent
      v-bind:title="config.home.blog.title"
      v-bind:url="config.home.blog.url"
      v-bind:news="news"
      v-bind:custom="{
        section: { background: config.vuetify.theme.themes[theme].surface },
      }"
    ></homeBlogComponent>
    <homeContactComponent></homeContactComponent>
    <homeLinksComponent
      v-bind:links="config.home.links"
      v-bind:custom="{
        section: { background: config.vuetify.theme.themes[theme].surface },
      }"
    ></homeLinksComponent>
  </div>
</template>

<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';
import homeBannerComponent from '../components/home.banner.component.vue';
import homeAboutsComponent from '../components/home.abouts.component.vue';
import homeFeaturesComponent from '../components/home.features.component.vue';
import homeSlideshowComponent from '../components/home.slideshow.component.vue';
import homeStatsComponent from '../components/home.stats.component.vue';
import homeBlogComponent from '../components/home.blog.component.vue';
import homeContactComponent from '../components/home.contact.component.vue';
import homeLinksComponent from '../components/home.links.component.vue';

/**
 * Export default
 */
export default {
  components: {
    homeBannerComponent,
    homeAboutsComponent,
    homeFeaturesComponent,
    homeSlideshowComponent,
    homeStatsComponent,
    homeBlogComponent,
    homeContactComponent,
    homeLinksComponent,
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
