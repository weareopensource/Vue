<template>
  <div>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          :max-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          :src="
            config.home.temporalBackground
              ? generateTemporalBackground()
              : require('@/assets/images/background.jpg')
          "
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row align="center" class="white--text mx-auto" justify="center">
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']"
                    class="font-weight-black"
                    >{{ config.app.title }}</span
                  >
                  <br />
                  <span
                    class="font-weight-light"
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-1']"
                    >{{ config.app.subtitle }}</span
                  >
                </v-col>
                <v-col class="white--text text-center" cols="12">
                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                    data-aos="fade-up"
                  >
                    <v-icon>fa-angle-down</v-icon>
                  </v-btn>
                </v-col>
                <v-col
                  align="center"
                  class="white--text text-center"
                  cols="11"
                  xs="10"
                  sm="9"
                  md="7"
                  lg="6"
                  xl="5"
                  style="bottom: 10%; position: absolute; opacity:75%;"
                  data-aos="fade-up"
                  v-if="config.home.subscriptions"
                >
                  <v-text-field
                    v-model="email"
                    :flat="config.vuetify.theme.flat"
                    :rules="[rules.email]"
                    :append-icon="'fa-envelope'"
                    @click:append="createSubscription"
                    @keydown.enter="createSubscription"
                    height="55"
                    name="Mail"
                    placeholder="Stay informed by email."
                    class="centered-input"
                    solo
                    rounded
                    light
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="about-me" v-if="config.home.abouts.length > 0">
      <v-container class="text-center pb-12">
        <v-row align="center" justify="center">
          <v-col
            v-for="({ title, text, image, button, link }, i) in config.home.abouts"
            :key="i"
            cols="12"
            md="6"
          >
            <h2 class="display-1 font-weight-bold mb-3 py-8  text-uppercase" v-text="title"></h2>
            <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
              <vue-markdown :source="text" />
            </v-responsive>
            <v-avatar v-if="image" class="elevation-12 mb-12" size="128">
              <v-img :src="image"></v-img>
            </v-avatar>
            <br v-if="link" />
            <v-btn v-if="link" color="grey" :href="link" outlined large>
              <span class="grey--text text--darken-1 font-weight-bold" v-text="button"></span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section
      id="features"
      class="py-12"
      :style="{ background: config.vuetify.theme.themes[theme].surface }"
      v-if="config.home.features.data.length > 0"
    >
      <v-container class="text-center">
        <h2
          class="display-1 font-weight-bold mb-3 pb-8 text-uppercase"
          v-if="config.home.features.title"
        >
          {{ config.home.features.title }}
        </h2>
        <v-row>
          <v-col
            v-for="({ icon, title, text }, i) in config.home.features.data"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-12 px-4"
              :flat="config.vuetify.theme.flat"
              :style="{ background: config.vuetify.theme.themes[theme].background }"
            >
              <div>
                <v-avatar color="primary" size="88">
                  <v-icon dark large data-aos="fade-up">fa-{{ icon }}</v-icon>
                </v-avatar>
              </div>
              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="title"
              ></v-card-title>
              <v-card-text class="subtitle-1 text--secondary"
                ><vue-markdown :source="text"
              /></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="stats" class="black" v-if="config.home.stats.data.length > 0">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        :src="config.home.stats.background || require('@/assets/images/backgroundParalax.jpg')"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col v-for="[value, title] of config.home.stats.data" :key="title" cols="12" md="3">
              <div class="text-center">
                <div class="display-3 font-weight-black mb-4" v-text="value" data-aos="fade"></div>
                <div class="title font-weight-regular text-uppercase" v-text="title"></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section
      id="blog"
      class="py-12"
      :style="{ background: config.vuetify.theme.themes[theme].surface }"
    >
      <v-container>
        <h2
          class="display-1 font-weight-bold mb-3 pb-8 text-center text-uppercase"
          v-if="config.home.blog.title"
        >
          <a :href="config.home.blog.url" style="font-weight:inherit; color:inherit !important;">{{
            config.home.blog.title
          }}</a>
        </h2>
        <v-row>
          <v-col
            v-for="({ feature_image, excerpt, title, url }, i) in news"
            :key="i"
            cols="12"
            md="4"
          >
            <v-img :src="feature_image" class="mb-4" height="275" max-width="100%"></v-img>
            <h3 class="mb-4 text--primary" v-text="title"></h3>
            <div class="subtitle-1 text--secondary"><vue-markdown :source="excerpt" /></div>
            <v-btn class="ml-n5 font-weight-black" :href="url" target="_blank" text
              >Continue Reading</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="contact" class="py-12">
      <v-container>
        <h2
          class="display-1 font-weight-bold mb-3 pb-8 text-center text-uppercase"
          v-if="config.home.contact.title"
        >
          {{ config.home.contact.title }}
        </h2>
        <v-theme-provider light>
          <v-form ref="form">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="subject"
                  :flat="config.vuetify.theme.flat"
                  name="subject"
                  label="Subject*"
                  solo
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="body"
                  :flat="config.vuetify.theme.flat"
                  label="Message*"
                  solo
                ></v-textarea>
              </v-col>
              <v-col class="mx-auto" cols="auto">
                <v-btn
                  @click="sendMail()"
                  :color="config.vuetify.theme.themes[theme].secondary"
                  :style="{ color: config.vuetify.theme.themes[theme].onSecondary }"
                  depressed
                  x-large
                  >Send</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-theme-provider>
      </v-container>
    </section>

    <section
      id="features"
      class="py-12"
      :style="{ background: config.vuetify.theme.themes[theme].surface }"
      v-if="config.home.links.length > 0"
    >
      <v-container>
        <v-row>
          <v-col
            v-for="({ items, title }, i) in config.home.links.filter(section => section.items)"
            :key="i"
            cols="12"
            :md="12 / config.home.links.filter(section => section.items).length"
          >
            <v-card
              :flat="config.vuetify.theme.flat"
              :style="{ background: config.vuetify.theme.themes[theme].surface }"
            >
              <v-card-title class="justify-center text--secondary" v-text="title"></v-card-title>
              <v-list dense :style="{ background: config.vuetify.theme.themes[theme].surface }">
                <v-list-item-group color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-content>
                      <a :href="item.url" target="_blank">
                        <v-list-item-title class="text-center">
                          <v-icon class="pr-2" small>{{ item.icon }}</v-icon> {{ item.label }}
                        </v-list-item-title>
                      </a>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueMarkdown from 'vue-markdown'; // production

/**
 * Export default
 */
export default {
  data() {
    return {
      valid: false,
      password: 'Password',
      rules: {
        email: (v) => /\S+@\S+\.\S+/.test(v) || '',
      },
    };
  },
  components: {
    VueMarkdown,
  },
  computed: {
    ...mapGetters(['theme', 'news', 'subscription', 'contact', 'statistics']),
    email: {
      get() {
        return this.subscription.email;
      },
      set(email) {
        this.save = true;
        this.$store.commit('subscription_update', { email });
      },
    },
    subject: {
      get() {
        return this.contact.subject;
      },
      set(subject) {
        this.save = true;
        this.$store.commit('contact_update', { subject });
      },
    },
    body: {
      get() {
        return this.contact.body;
      },
      set(body) {
        this.save = true;
        this.$store.commit('contact_update', { body });
      },
    },
  },
  created() {
    AOS.init();
    this.$store.dispatch('getStatistics').then(() => {
      this.$store.dispatch('getNews');
      this.config.home.stats.data = [
        [this.statistics.tasks, 'Tasks'],
        ['330+', 'Releases'],
        [this.statistics.users, 'Users'],
        ['5m', 'Total Downloads'],
      ];
    });
  },
  methods: {
    generateTemporalBackground() {
      return `${this.config.home.temporalBackground}/${`0${new Date().getHours()}`.slice(-2)}.jpg`;
    },
    createSubscription() {
      if (this.rules.email(this.subscription.email)) {
        this.$store
          .dispatch('createSubscription', this.subscription)
          .catch((err) => console.log(err));
      }
    },
    sendMail() {
      window.location.href = `${this.config.home.contact.mail}?subject=${
        this.contact.subject
      }&body=${this.contact.body.replace(/\n/g, '%0D%0A')}`;
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
.centered-input >>> input {
  text-align: center;
  font-size: 20px;
}
</style>
