<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row align="start" justify="center">
          <v-card class="ma-4 pa-8" outlined tile>
            <v-img :src="require('@/assets/logo.svg')" class="my-4" contain height="200"></v-img>
            <h1 class="display-1 mb-3">{{ this.config.app.title }}</h1>
            <p class="subheading font-weight-regular">
              {{ this.config.app.description }}<br />
              <a href="https://weareopensource.me" target="_blank" >We Are Open Source</a>
            </p>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
