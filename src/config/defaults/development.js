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
      themes: {
        dark: {
          primary: '#21CFF3',
          secondary: '#03DAC6',
          background: '#FFFFFF',
          surface: '#FFFFFF',
          error: '#B00020',
          onPrimary: '#FFFFFF',
          onSecondary: '#000000',
          onBackground: '#000000',
          onSurface: '#000000',
          onError: '#FFFFFF',
        },
        light: {
          primary: '#1976D2',
          secondary: '#03DAC6',
          background: '#121212',
          surface: '#121212',
          error: '#CF6679',
          onPrimary: '#000000',
          onSecondary: '#000000',
          onBackground: '#FFFFFF',
          onSurface: '#FFFFFF',
          onError: '#000000',
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
