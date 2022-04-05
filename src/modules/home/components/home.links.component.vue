<!--
  - Call example
    <homeLinksComponent
      v-bind:links="links"
      v-bind:custom="null"
    ></homeLinksComponent>
  - Data Example
    links: [
      {
        title: 'Useful',
        items: [
          {
            label: 'Blog',
            icon: 'fa-solid fa-rss',
            url: 'https://blog.weareopensource.me',
          },
        ],
      },
      {
        title: 'About',
        items: [
          {
            icon: 'fa-brand fa-discord',
            label: 'Discord',
            url: 'https://discord.gg/U2a2vVm',
          },
        ],
      },
      {
        title: 'Others',
        items: [
          {
            icon: 'fa-brand fa-docker',
            label: 'Docker',
            url: 'https://hub.docker.com/orgs/weareopensource/repositories',
          },
        ],
      },
    ],
-->
<template>
  <section id="features" class="py-10" :style="custom && custom.section ? custom.section : null" v-if="links.length > 0">
    <v-container>
      <v-row>
        <v-col
          v-for="({ items, title }, i) in links.filter((section) => section.items)"
          :key="i"
          cols="12"
          :md="12 / links.filter((section) => section.items).length"
        >
          <v-card :flat="config.vuetify.theme.flat" :style="custom && custom.section ? custom.section : null">
            <v-card-title class="justify-center text-h6 text-medium-emphasis" v-text="title"></v-card-title>
            <v-list :style="custom && custom.section ? custom.section : null">
              <v-list-item v-for="(item, i) in items" :key="i" class="justify-center">
                <a :href="item.url">
                  <v-list-item-title>
                    <v-icon size="16" class="mr-2 text-medium-emphasis">{{ item.icon }}</v-icon>
                    <v-list-item-content class="text-secondary text-subtitle-2"> {{ item.label }} </v-list-item-content>
                  </v-list-item-title>
                </a>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
/**
 * Export default
 */
export default {
  name: 'homeLinksComponent',
  props: ['links', 'custom'],
};
</script>
