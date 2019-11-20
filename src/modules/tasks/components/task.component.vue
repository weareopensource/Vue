<template>
  <v-col cols="12" sm="12" md="6" lg="4" xl="3">
    <v-card class="mx-auto" :flat="true" :outlined="true">
      <v-card-title>{{item.title}}</v-card-title>
      <v-card-text>{{item.description}}</v-card-text>
      <v-card-actions v-if="isLoggedIn">
        <div class="flex-grow-1"></div>
        <v-btn v-if="item.id" :to="`/task/${item.id}`" icon>
          <v-icon>fa-eye</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
/**
 * Export default
 */
export default {
  name: 'taskComponent',
  props: ['item'],
};
</script>
