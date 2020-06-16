<template>
  <div>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          :max-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          :src="background || defaultBackground()"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row align="center" class="white--text mx-auto" justify="center">
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >{{config.app.title}}</span>
                  <br />
                  <span
                    class="font-weight-light"
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-1']"
                  >{{config.app.subtitle}}</span>
                </v-col>
                <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-me')">
                  <v-icon>fa-angle-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="about-me">
      <v-container class="text-center pb-12">
        <v-row align="center" justify="center">
          <v-col
            v-for="({ title, text, image, button, link }, i) in abouts"
            :key="i"
            cols="12"
            md="6"
          >
            <h2 class="display-2 font-weight-bold mb-3 py-8" v-text="title"></h2>
            <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="720"
              v-text="text"
            ></v-responsive>
            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img :src="image"></v-img>
            </v-avatar>
            <br />
            <v-btn color="grey" :href="link" outlined large>
              <span class="grey--text text--darken-1 font-weight-bold" v-text="button"></span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="features" class="grey lighten-3 py-12">
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3 pb-8">{{ featuresTitle }}</h2>
        <v-row>
          <v-col v-for="({ icon, title, text }, i) in features" :key="i" cols="12" md="4">
            <v-card class="py-12 px-4" color="grey lighten-5" :flat="config.vuetify.theme.flat">
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
                    <v-icon large>fa-{{ icon }}</v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>
              <v-card-title class="justify-center font-weight-black text-uppercase" v-text="title"></v-card-title>
              <v-card-text class="subtitle-1" v-text="text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="stats" class="black">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
              <div class="text-center">
                <div class="display-3 font-weight-black mb-4" v-text="value"></div>
                <div class="title font-weight-regular text-uppercase" v-text="title"></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section id="blog" class="py-12">
      <v-container>
        <h2
          class="display-2 font-weight-bold mb-3 text-uppercase text-center py-8"
        >{{ articlesTitle }}</h2>
        <v-row>
          <v-col v-for="({ image, text, title }, i) in articles" :key="i" cols="12" md="4">
            <v-img :src="image" class="mb-4" height="275" max-width="100%"></v-img>
            <h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>

            <div class="title font-weight-light mb-5" v-text="text"></div>
            <v-btn class="ml-n4 font-weight-black" text>Continue Reading</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-sheet
      id="contact"
      dark
      tag="section"
      class="py-12"
      tile
    >
      <v-container>
        <h2
          class="display-2 font-weight-bold mb-3 text-uppercase text-center py-8"
        >{{ contactTitle }}</h2>
        <v-theme-provider light>
          <v-row>
            <v-col cols="12">
              <v-text-field :flat="config.vuetify.theme.flat" label="Name*" solo></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field :flat="config.vuetify.theme.flat" label="Email*" solo></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field :flat="config.vuetify.theme.flat" label="Subject*" solo></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea :flat="config.vuetify.theme.flat" label="Message*" solo></v-textarea>
            </v-col>
            <v-col class="mx-auto" cols="auto">
              <v-btn color="accent" x-large>Submit</v-btn>
            </v-col>
          </v-row>
        </v-theme-provider>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';

/**
 * Export default
 */
export default {
  data() {
    return {
      background: null,
      abouts: [
        {
          title: 'About Us',
          text:
            'Today, we dreams to create Backs/Fronts, aligns on feats, in multiple languages, in order to allow anyone to compose fullstack on demand (React, Angular, VusJS, Node, Nest, Swift, Go). Feel free to discuss, share other kind of bricks, and invite whoever you want with this mindset to come help us. There are so many innovations possible, starting a clean test should be simple.',
          image: 'https://avatars3.githubusercontent.com/u/8588816?s=200&v=4',
          button: 'Github',
          link: 'https://github.com/weareopensource',
        },
      ],
      featuresTitle: 'Vuetify features',
      features: [
        {
          icon: 'users',
          title: 'Vibrant Community',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
        {
          icon: 'cloud-upload-alt',
          title: 'Frequent Updates',
          text:
            'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
        },
        {
          icon: 'history',
          title: 'Long-term Support',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
      ],
      articlesTitle: 'Blog',
      articles: [
        {
          image:
            'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Mobile first & Responsive',
          text:
            'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Think outside the box',
          text:
            'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'Small changes, big difference',
          text:
            'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
      ],
      contactTitle: 'Contact Us',
      stats: [
        ['24k', 'Github Stars'],
        ['330+', 'Releases'],
        ['1m', 'Downloads/mo'],
        ['5m', 'Total Downloads'],
      ],
    };
  },
  computed: {
    ...mapGetters(['theme']),
  },
  methods: {
    defaultBackground() {
      return `https://weareopensource.me/content/images/2020/06/${(`0${new Date().getHours()}`).slice(-2)}.jpg`;
    },
  },
};
</script>
