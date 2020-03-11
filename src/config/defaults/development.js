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
      flat: true,
      footer: false,
      navigation: {
        background: undefined, // url / undefined
        selectBorder: 'secondary', // color / undefined
      },
      themes: {
        dark: {
          primary: '#282A2E',
          secondary: '#e67e22',
          background: '#1F1F1F',
          surface: '#282A2E',
          error: '#CF6679',
          onPrimary: '#FFFFFF',
          onSecondary: '#000000',
          onBackground: '#FFFFFF',
          onSurface: '#FEFEFE',
          onError: '#000000',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#e67e22',
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
      type: 'mini', // default / permanent / temporary / mini
      clipped: true,
      floating: true,
      mini: true,
    },
  },
};
