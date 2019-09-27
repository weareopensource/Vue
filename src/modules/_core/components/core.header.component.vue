<template>
  <v-app-bar :clipped-left="this.config.vuetify.drawer.clipped" app>
    <v-app-bar-nav-icon
      v-if="this.config.vuetify.drawer.type !== 'permanent'"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
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
  name: 'waosHeader',
  computed: {
    ...mapGetters(['isLoggedIn']),
    drawer: {
      get() { return this.$store.getters.drawer; },
      set(v) { return this.$store.commit('set_drawer', v); },
    },
  },
  data: () => ({
  }),
};
</script>
