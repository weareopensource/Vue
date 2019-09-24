<template>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="this.config.vuetify.drawer.clipped"
      :floating="this.config.vuetify.drawer.floating"
      :mini-variant="this.config.vuetify.drawer.mini"
      :permanent="this.config.vuetify.drawer.type === 'permanent'"
      :temporary="this.config.vuetify.drawer.type === 'temporary'"
      app
      overflow
    >
      <v-list dense>
        <!--<v-subheader class="mt-4 grey--text text--darken-1">Navigation</v-subheader>-->
        <v-list-item v-for="item in sidenav" :key="item.text" :to="item.path">
          <v-list-item-action>
            <v-icon>fa-{{ item.meta.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isLoggedIn" @click="signout">
          <v-list-item-action>
            <v-icon>fa-arrow-left</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
  name: 'waosNav',
  computed: {
    ...mapGetters(['isLoggedIn']),
    drawer: {
      get() { return this.$store.getters.drawer; },
      set(v) { return this.$store.commit('setDrawer', v); },
    },
    sidenav() {
      return this._.pickBy(this.nav, (i) => {
        if (i.meta.display !== false) { // hidden item
          if (!('auth' in i.meta)) return i; // auth undefined, always displayed
          if (!i.meta.auth && !this.isLoggedIn) return i; // auth false, not logged
          if (i.meta.auth && this.isLoggedIn) return i; // auth true and logged
        }
      });
    },
  },
  methods: {
    signout() {
      this.$store.dispatch('signout').then(() => {
        this.$router.push('/');
      });
    },
  },
  created() {
    this.$router.options.routes.forEach(route => this.nav.push(route));
  },
  data: () => ({
    nav: [],
  }),
};
</script>
