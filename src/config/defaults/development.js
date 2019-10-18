module.exports = {
  app: {
    title: 'WeAreOpenSource Vue - Development Environment',
    description: 'Vue - Boilerplate Front : Vuetify, Axios, Jest, Cypress (Alpha) ',
    keywords: 'vue, vuetify, axios, jest, cypress',
  },
  port: 8080, // only available for dev env
  api: {
    protocol: 'http',
    host: 'localhost',
    port: '3000',
    base: 'api',
    endPoints: {
      auth: 'auth',
      users: 'users',
      tasks: 'tasks',
    },
  },
  theme: {
    navIfLogged: false, // show nav only if user is logged (easy for one page site)
  },
  vuetify: {
    theme: {
      dark: true,
    },
    icons: {
      iconfont: 'fa',
    },
    drawer: {
      model: null,
      type: 'default',
      clipped: true,
      floating: true,
      mini: false,
    },
  },
};
