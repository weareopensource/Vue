<template>
  <v-container fluid>
    <v-layout class="ma-4" wrap align-content-space-around text-xs-center>
      <task
        v-for="(item, index) in tasks"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.id"
      ></task>
      <v-row v-if="!tasks.length" align="start" justify="center">
        <v-col cols="12">
          <v-card class="mx-3 pa-8" outlined tile>
            <h2 class="text-center">No Tasks found :( !</h2>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>


<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';
import task from '@/modules/tasks/components/task.component.vue';
/**
 * Export default
 */
export default {
  components: {
    task,
  },
  computed: {
    ...mapGetters(['tasks']),
  },
  created() {
    this.$store.dispatch('getTasks');
  },
};
</script>
