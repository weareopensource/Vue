<!--
  - Call example
    <homeFeaturesComponent
      v-bind:features="features"
      v-bind:custom="null"
    ></homeFeaturesComponent>
  - Data Example
    features: {
      title: 'Stacks',
      data: [
        {
          icon: 'fab fa-vuejs',
          title: 'Vue',
          text: '**Alpha Front Stack** <br> Classic auth with landing page ...',
          color: '#186b9f',
        },
      ],
    },
-->
<template>
  <section
    id="features"
    class="py-12"
    :style="custom && custom.section ? custom.section : null"
    v-if="features.data.length > 0"
  >
    <v-container class="text-center">
      <h2 class="display-1 font-weight-bold mb-3 pb-8 text-uppercase" v-if="features.title">
        {{ features.title }}
      </h2>
      <v-row justify="center">
        <v-col
          v-for="({ icon, title, text, color }, i) in features.data"
          :key="i"
          cols="12"
          md="4"
          data-aos="fade-up"
        >
          <v-card
            class="pt-8 pb-2 px-4 rounded-xl"
            :flat="config.vuetify.theme.flat"
            :style="custom && custom.card ? custom.card : null"
          >
            <div>
              <v-avatar :color="color ? color : 'primary'" size="88">
                <v-icon dark large>{{ icon }}</v-icon>
              </v-avatar>
            </div>
            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            ></v-card-title>
            <v-card-text class="subtitle-1 text--secondary">
              <vue-markdown :source="text" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
/**
 * Module dependencies.
 */
import VueMarkdown from 'vue-markdown';
/**
 * Export default
 */
export default {
  name: 'homeAboutsComponent',
  props: ['features', 'custom'],
  components: {
    VueMarkdown,
  },
};
</script>
