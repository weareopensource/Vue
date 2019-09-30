<template>
  <v-col cols="12" sm="12" md="6" lg="4" xl="3">
    <v-card class="mx-auto" :flat="true" :outlined="true">
      <v-card-title>{{item.title}}</v-card-title>
      <v-card-text>{{item.description}}</v-card-text>
    </v-card>
  </v-col>
</template>

<script>
/**
 * Export default
 */
export default {
  name: 'task',
  props: ['item'],
};
</script>
