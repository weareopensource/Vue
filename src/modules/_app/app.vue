<template>

  <v-app id="app">
    <waosNav/>
    <waosHeader/>

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
import waosHeader from '@/modules/_core/components/core.header.component.vue';
import waosNav from '@/modules/_core/components/core.nav.component.vue';
import waosFooter from '@/modules/_core/components/core.footer.component.vue';

/**
 * Export default
 */
export default {
  components: {
    waosHeader,
    waosNav,
    waosFooter,
  },
  created() {
    // auth
    this.axios.interceptors.response.use(
      undefined,
      err => new Promise(() => {
        if (
          err.status === 401
            && err.config
            && !err.config.__isRetryRequest
        ) {
          this.$store.dispatch('signout');
        }
        throw err;
      }),
    );
  },
};
</script>
