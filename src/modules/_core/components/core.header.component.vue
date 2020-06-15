<template>
  <v-app-bar
    :clipped-left="config.vuetify.drawer.clipped"
    :style="{background: config.vuetify.theme.themes[theme].primary, color: config.vuetify.theme.themes[theme].onPrimary}"
    :flat="config.vuetify.theme.flat"
    app
  >
    <v-app-bar-nav-icon
      :style="{color: config.vuetify.theme.themes[theme].onPrimary}"
      v-if="config.vuetify.drawer.type !== 'permanent' && config.vuetify.drawer.type !== 'mini' && (!config.vuetify.theme.navigation.displayIfLogged || isLoggedIn)"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-nav-icon
      :style="{color: config.vuetify.theme.themes[theme].onPrimary}"
      v-if="config.vuetify.drawer.type === 'mini' && (!config.vuetify.theme.navigation.displayIfLogged || isLoggedIn) && !this.$vuetify.breakpoint.mdAndDown"
      @click.stop="mini = !mini;"
    ></v-app-bar-nav-icon>
    <v-app-bar-nav-icon
      :style="{color: config.vuetify.theme.themes[theme].onPrimary}"
      v-if="config.vuetify.drawer.type === 'mini' && (!config.vuetify.theme.navigation.displayIfLogged || isLoggedIn) && this.$vuetify.breakpoint.mdAndDown"
      @click.stop="drawer = !drawer; mini = false;"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/">{{ config.app.title }}</router-link>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <!-- custom menu -->
    <v-tooltip v-for="({ icon, title, link }, i) in links" :key="i" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" min-width="50" min-height="50" x-small icon>
          <a :href="link">
            <v-icon :style="{color: config.vuetify.theme.themes[theme].onPrimary}">{{icon}}</v-icon>
          </a>
        </v-btn>
      </template>
      <span>{{title}}</span>
    </v-tooltip>
    <!-- user menu -->
    <span v-if="config.vuetify.theme.signin">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="!isLoggedIn" v-bind="attrs" v-on="on" min-width="50" min-height="50" x-small icon>
            <router-link to="/signin">
              <v-icon :style="{color: config.vuetify.theme.themes[theme].onPrimary}">fa-user</v-icon>
            </router-link>
          </v-btn>
        </template>
        <span>Sign In</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="isLoggedIn" @click="signout" v-bind="attrs" v-on="on" min-width="50" min-height="50" x-small icon>
            <v-icon :style="{color: config.vuetify.theme.themes[theme].onPrimary}">fa-arrow-right</v-icon>
          </v-btn>
        </template>
        <span>Sign Out</span>
      </v-tooltip>
    </span>
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
  data() {
    return {
      links: [
        {
          icon: 'fab fa-github',
          title: 'Github',
          link: 'https://github.com/weareopensource/',
        },
        {
          icon: 'fab fa-docker',
          title: 'Docker Hub',
          link: 'https://hub.docker.com/orgs/weareopensource/repositories',
        },
        {
          icon: 'fab fa-github-alt',
          title: 'Github projects',
          link: 'https://github.com/WeAreOpenSourceProjects',
        },
        {
          icon: 'fab fa-discord',
          title: 'Discord',
          link: 'https://discord.gg/U2a2vVm',
        },
        {
          icon: 'fab fa-slack',
          title: 'Slack',
          link: 'https://join.slack.com/t/weareopensource/shared_invite/zt-62p1qxna-PEQn289qx6mmHobzKW8QFw',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          link: 'https://twitter.com/waos_io',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['theme', 'isLoggedIn']),
    drawer: {
      get() {
        return this.$store.getters.drawer;
      },
      set(v) {
        return this.$store.commit('set_drawer', v);
      },
    },
    mini: {
      get() {
        return this.$store.getters.mini;
      },
      set(v) {
        return this.$store.commit('set_mini', v);
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
