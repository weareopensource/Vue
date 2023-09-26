<template>
  <section id="contact" :style="style('section', config.home.contact)">
    <v-container :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row align="center" justify="center" class="px-0 py-8">
        <homeTitleComponent v-bind:setup="config.home.contact"></homeTitleComponent>
        <v-col>
          <v-form ref="form">
            <v-text-field v-model="subject" :flat="config.vuetify.theme.flat" name="subject" label="Subject*"></v-text-field>
            <v-textarea v-model="body" :flat="config.vuetify.theme.flat" label="Message*"></v-textarea>
            <v-btn
              @click="sendMail()"
              :color="config.vuetify.theme.themes[theme].colors.secondary"
              :style="{
                color: config.vuetify.theme.themes[theme].colors.onSecondary,
              }"
              depressed
              x-large
              >Send</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';
import { style } from '../../../lib/helpers/theme';
import homeTitleComponent from './utils/home.title.component.vue';

/**
 * Export default
 */
export default {
  name: 'homeContactComponent',
  components: {
    homeTitleComponent,
  },
  computed: {
    ...mapGetters(['theme', 'contact']),
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
  methods: {
    style,
    sendMail() {
      window.location.href = `${this.config.home.contact.mail}?subject=${this.contact.subject}&body=${this.contact.body.replace(/\n/g, '%0D%0A')}`;
      this.$refs.form.reset();
    },
  },
};
</script>
