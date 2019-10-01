<template>
  <v-container fluid>
    <v-col cols="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="ma-4"  :flat="true" :outlined="true">
        <v-img :src="require('@/assets/logo.svg')" class="my-4" contain height="200"></v-img>
        <v-card-title class="justify-center">{{ this.config.app.title }}</v-card-title>
        <center>
          <v-card-text class="justify-center">{{ this.config.app.description }}</v-card-text>
          <br />
          <a href="https://weareopensource.me" target="_blank">We Are Open Source</a>
        </center>
      </v-card>
    </v-col>
  </v-container>
</template>
