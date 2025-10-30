<template>
  <v-container fluid>
    <v-btn
      v-if="isLoggedIn"
      :flat="config.vuetify.theme.flat"
      icon
      to="/task"
      color="success"
      style="position: fixed; bottom: 10px; right: 10px; z-index: 9999"
    >
      <v-icon icon="fa-solid fa-plus"></v-icon>
    </v-btn>
    <v-row class="pa-2">
      <taskComponent v-for="(item, index) in tasks" :key="item.id" :item="item" :index="index"></taskComponent>
    </v-row>
    <v-row v-if="!tasks || !tasks.length" align="start" justify="center">
      <v-col cols="12">
        <v-card class="ma-6 pa-6" :style="{ background: config.vuetify.theme.themes[theme].colors.surface }" :flat="config.vuetify.theme.flat">
          <h2 class="text-center">No Tasks found :( !</h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';
import taskComponent from '../components/task.component.vue';
/**
 * Export default
 */
export default {
  components: {
    taskComponent,
  },
  data: () => ({
    direction: 'bottom',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: true,
    right: true,
    bottom: false,
    left: false,
    transition: 'slide-y',
  }),
  computed: {
    ...mapGetters(['theme', 'isLoggedIn', 'tasks']),
  },
  created() {
    this.$store.dispatch('getTasks');
  },
};
</script>
