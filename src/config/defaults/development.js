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
  cookie: {
    prefix: 'waos',
  },
  theme: {
    navIfLogged: false, // show nav only if user is logged (easy for one page site)
    snackbar: { // kind of notifications on requests
      status: true, // activate for error
      methods: ['post', 'put'], // show on sucess depends of methods
    },
  },
  vuetify: {
    theme: {
      dark: true,
      border: false,
      flat: true,
      themes: {
        dark: {
          primary: '#282A2E',
          secondary: '#16A085',
          background: '#1E1F21',
          surface: '#282A2E',
          error: '#CF6679',
          onPrimary: '#FFFFFF',
          onSecondary: '#000000',
          onBackground: '#FFFFFF',
          onSurface: '#FEFEFE',
          onError: '#000000',
        },
        light: {
          primary: '#282A2E',
          secondary: '#1ABC9C',
          background: '#F9F9F9',
          surface: '#FFFFFF',
          error: '#B00020',
          onPrimary: '#FFFFFF',
          onSecondary: '#000000',
          onBackground: '#000000',
          onSurface: '#000000',
          onError: '#FFFFFF',
        },
      },
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
