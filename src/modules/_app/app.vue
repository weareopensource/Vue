<template>

  <v-app id="app">
    <waosHeader/>
    <waosNav v-if="!config.theme.navIfLogged || isLoggedIn"/>

    <v-content>
      <router-view />
    </v-content>

    <waosFooter/>
  </v-app>
</template>

<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';
import waosHeader from '@/modules/_core/components/core.header.component.vue';
import waosNav from '@/modules/_core/components/core.nav.component.vue';
import waosFooter from '@/modules/_core/components/core.footer.component.vue';
import router from '@/modules/_app/app.router';

/**
 * Export default
 */
export default {
  components: {
    waosHeader,
    waosNav,
    waosFooter,
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  created() {
    // auth
    this.axios.interceptors.response.use(
      (response) => response,
      (err) => new Promise(() => {
        if (
          err.response.status === 401
            && err.config
            && !err.config.__isRetryRequest
        ) {
          this.$store.dispatch('signout');
          router.push('/signin');
        }
        throw err;
      }),
    );
  },
};
</script>
