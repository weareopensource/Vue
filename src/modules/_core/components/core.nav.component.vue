<template>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="this.config.vuetify.drawer.clipped"
      :floating="this.config.vuetify.drawer.floating"
      :mini-variant="this.config.vuetify.drawer.mini"
      :permanent="this.config.vuetify.drawer.type === 'permanent'"
      :temporary="this.config.vuetify.drawer.type === 'temporary'"
      :style="{background: this.config.vuetify.theme.themes[theme].primary}"
      app
      overflow
    >
      <v-list dense>
        <!--<v-subheader class="mt-4 grey--text text--darken-1">Navigation</v-subheader>-->
        <v-list-item v-for="item in nav" :key="item.text" :to="item.path">
          <v-list-item-action>
            <v-icon>fa-{{ item.meta.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
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
    ...mapGetters(['theme', 'nav']),
    drawer: {
      get() { return this.$store.getters.drawer; },
      set(v) { return this.$store.commit('set_drawer', v); },
    },
  },
  created() {
    this.$store.dispatch('refreshNav');
  },
};
</script>
