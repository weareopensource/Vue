<template>
  <section id="blog" v-if="news.length > 0" class="py-12" :style="style('section', blog)">
    <v-container>
      <h4 class="font-weight-bold mb-3 pb-8 text-h4 text-center" v-if="blog.title" v-text="blog.title"></h4>
      <v-row>
        <v-col v-for="({ feature_image, excerpt, title, url }, i) in news" :key="i" cols="12" md="4" data-aos="fade-up">
          <!-- eslint-disable-next-line -->
          <a :href="url" target="_blank">
            <v-img :src="feature_image" class="mb-4 rounded-xl" height="200" max-width="100%" cover></v-img>
            <h3 class="mb-4 text-primary" v-text="title"></h3>
            <div class="subtitle-1 text-medium-emphasis text-onSurface">
              <v-markdown :source="excerpt" />
            </div>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
/**
 * Module dependencies.
 */
import { style } from '../../../lib/helpers/theme';
/**
 * Export default
 */
export default {
  name: 'homeBlogComponent',
  props: ['blog', 'news'],
  methods: {
    style,
  },
};
</script>
