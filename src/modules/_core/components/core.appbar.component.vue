<template>
  <v-app-bar
    v-if="!isLoggedIn"
    :style="appBarStyle"
    :flat="config.vuetify.theme.flat"
    :scroll-behavior="config.vuetify.theme.appbar.scrollBehavior"
    class="waos-app-bar mx-auto"
    rounded="lg"
  >
    <!-- Logo/Title -->
    <router-link to="/" v-if="this.config.header.logo.file">
      <v-img :src="require('@/assets/images/' + this.config.header.logo.file)" :width="'120px'" class="ml-4 mr-2 mt-2" inline> </v-img>
    </router-link>
    <router-link to="/" v-if="this.config.header.title">
      {{ config.app.title }}
    </router-link>
    <!-- Menu -->
    <span v-for="({ title, url, sublinks }, i) in config.header.links" :key="i" class="hidden-sm-and-down">
      <v-btn v-if="!sublinks" @click="navigate(url)" class="text-none" size="large">
        {{ title }}
      </v-btn>
      <v-menu v-if="sublinks" location="bottom" max-width="320px" offset="15px" transition="fade-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="text-none" size="large">
            {{ title }}
            <v-icon class="mt-1 ml-2" size="x-small">fa-solid fa-angle-down</v-icon>
          </v-btn>
        </template>
        <v-list lines="two" class="px-2">
          <v-list-item v-for="({ icon, title, url, color, subtitle }, j) in sublinks" :key="j" @click="navigate(url)">
            <template v-slot:prepend>
              <v-icon :color="color">{{ icon }}</v-icon>
            </template>
            <v-list-item-title class="font-weight-bold">{{ title }}</v-list-item-title>
            <v-list-item-subtitle v-if="subtitle" style="line-height: 1.5em">{{ subtitle }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-menu>
    </span>
    <!-- Space -->
    <v-spacer></v-spacer>
    <!-- Login buttons -->
    <v-btn v-if="!isLoggedIn && config.sign.in" @click="navigate('/signin')" class="text-none"> Sign In </v-btn>
    <!-- shortcut buttons -->
    <v-btn
      v-for="({ title, url, variant }, i) in config.header.shortcuts"
      :key="i"
      @click="navigate(url)"
      class="hidden-sm-and-down text-none mr-2"
      size="large"
      :variant="variant"
      :style="{ color: config.vuetify.theme.themes[theme].colors.onBackground }"
    >
      {{ title }}
    </v-btn>
    <!-- Mobile Menu -->
    <v-menu location="bottom" offset="15px" transition="fade-transition">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="hidden-md-and-up" icon>
          <v-icon :style="{ color: config.vuetify.theme.themes[theme].colors.onPrimary }">fa-solid fa-bars</v-icon>
        </v-btn>
      </template>
      <v-card min-width="320px">
        <!-- Menu -->
        <v-list>
          <v-list-item v-for="({ title, sublinks }, i) in config.header.links.filter((v) => v.sublinks)" :key="i">
            <v-list-item-title class="font-weight-bold">{{ title }}</v-list-item-title>
            <v-list lines="one">
              <v-list-item v-for="({ icon, title, url, color, subtitle }, j) in sublinks" :key="j" @click="navigate(url)">
                <template v-slot:prepend>
                  <v-icon :color="color">{{ icon }}</v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">{{ title }}</v-list-item-title>
                <v-list-item-subtitle v-if="subtitle" style="line-height: 1.5em">{{ subtitle }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <!-- Menu 2 -->
        <v-list class="mx-2">
          <v-list-item v-for="({ title, url }, i) in config.header.links.filter((v) => !v.sublinks)" :key="i" @click="navigate(url)">
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <!-- Shortcut -->
        <v-list-item v-for="({ title, url, variant }, i) in config.header.shortcuts" :key="i" class="my-2">
          <v-btn
            @click="navigate(url)"
            size="large"
            :variant="variant"
            :style="{
              background: config.vuetify.theme.themes[theme].colors.primary,
              color: config.vuetify.theme.themes[theme].colors.onPrimary,
            }"
            class="text-none"
            width="100%"
          >
            {{ title }}
          </v-btn>
        </v-list-item>
      </v-card>
    </v-menu>
    <v-menu location="start"> </v-menu>
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
  name: 'waosAppBar',
  computed: {
    ...mapGetters(['theme', 'isLoggedIn']),
    appBarStyle() {
      return {
        background: `linear-gradient(180deg, transparent 5px, ${this.config.vuetify.theme.themes[this.theme].colors.primary}${
          this.config.vuetify.theme.appbar.opacity
        } 5px)`,
        color: this.config.vuetify.theme.themes[this.theme].colors.onPrimary,
        '-webkit-backdrop-filter': 'blur(8px)',
        'backdrop-filter': 'blur(8px)',
        'max-width': '1400px',
        width: '96%',
        margin: 'auto',
        left: '0',
        right: '0',
        'padding-top': '5px',
      };
    },
  },
  methods: {
    navigate(link) {
      if (link.startsWith('http')) {
        window.open(link, '_blank');
      } else {
        this.$router.push(link);
      }
    },
  },
};
</script>
