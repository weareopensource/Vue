<template>
  <v-app-bar :clipped-left="this.config.vuetify.drawer.clipped" app>
    <v-app-bar-nav-icon
      v-if="this.config.vuetify.drawer.type !== 'permanent' && (!config.theme.navIfLogged || isLoggedIn)"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/">{{ this.config.app.title }}</router-link>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn v-if="!isLoggedIn" icon>
      <router-link to="/signin">
       <v-icon>fa-user</v-icon>
       </router-link>
    </v-btn>
    <v-btn v-else @click="signout" icon>
      <v-icon>fa-arrow-right</v-icon>
    </v-btn>
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
      get() {
        return this.$store.getters.drawer;
      },
      set(v) {
        return this.$store.commit('set_drawer', v);
      },
    },
  },
  methods: {
    signout() {
      this.$store.dispatch('signout').then(() => {
        this.$store.dispatch('refreshNav');
        if (this.$route.path !== '/') this.$router.push('/home');
      });
    },
  },
};
</script>

<style>
.v-application a {
    text-decoration: none !important;
    color: var(--v-primary-base)!important;
}
</style>
