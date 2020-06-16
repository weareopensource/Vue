module.exports = {
  app: {
    title: 'WAOS Dev',
    subtitle: 'welcome to demo.',
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
  vuetify: {
    theme: {
      dark: 'auto', // dark theme true / false / auto (based on prefers-color-scheme)
      flat: true, // flat by default
      footer: false, // display footer
      signin: true, // display signin link
      signup: true, // display signup link
      snackbar: { // kind of notifications on requests
        status: true, // activate for error
        methods: ['post', 'put'], // show on sucess depends of methods
        sucessColor: 'secondary',
        errorColor: 'error',
      },
      navigation: {
        displayIfLogged: false, // show nav only if user is logged (easy for one page site)
        background: undefined, // url / undefined
        selectBorder: 'secondary', // color / undefined
      },
      themes: {
        dark: {
          primary: '#34495e',
          secondary: '#3498db',
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
          primary: '#34495e',
          secondary: '#e67e22',
          background: '#f3f3f6',
          surface: '#ffffff',
          error: '#B00020',
          onPrimary: '#ffffff',
          onSecondary: '#1d1d1f',
          onBackground: '#1d1d1f',
          onSurface: '#1d1d1f',
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
      clipped: true, // fixed
      floating: true,
      mini: true, // mini or full
    },
  },
  header: {
    links: [
      {
        icon: 'fab fa-github',
        title: 'Github',
        link: 'https://github.com/weareopensource/',
      },
      {
        icon: 'fab fa-docker',
        title: 'Docker Hub',
        link: 'https://hub.docker.com/orgs/weareopensource/repositories',
      },
      {
        icon: 'fab fa-github-alt',
        title: 'Github projects',
        link: 'https://github.com/WeAreOpenSourceProjects',
      },
      {
        icon: 'fab fa-discord',
        title: 'Discord',
        link: 'https://discord.gg/U2a2vVm',
      },
      {
        icon: 'fab fa-slack',
        title: 'Slack',
        link: 'https://join.slack.com/t/weareopensource/shared_invite/zt-62p1qxna-PEQn289qx6mmHobzKW8QFw',
      },
      {
        icon: 'fab fa-twitter',
        title: 'Twitter',
        link: 'https://twitter.com/waos_io',
      },
    ],
  },
  home: {
    background: null, // url or  require('@/assets/background.jpg'),
    abouts: [
      {
        title: 'About Us',
        text: 'Today, we dreams to create Backs/Fronts, aligns on feats, in multiple languages, in order to allow anyone to compose fullstack on demand (React, Angular, VusJS, Node, Nest, Swift, Go). Feel free to discuss, share other kind of bricks, and invite whoever you want with this mindset to come help us. There are so many innovations possible, starting a clean test should be simple.',
        image: 'https://avatars3.githubusercontent.com/u/8588816?s=200&v=4',
        button: 'Github',
        link: 'https://github.com/weareopensource',
      },
    ],
    features: {
      title: 'Vuetify features',
      data: [
        {
          icon: 'users',
          title: 'Vibrant Community',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
        {
          icon: 'cloud-upload-alt',
          title: 'Frequent Updates',
          text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
        },
        {
          icon: 'history',
          title: 'Long-term Support',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
      ],
    },
    articles: {
      title: 'Blog',
      data: [
        {
          image: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Mobile first & Responsive',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          image: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Think outside the box',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          image: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'Small changes, big difference',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      mail: 'mailto:pierre@weareopensource.me',
    },
    stats: {
      background: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      data: [
        ['24k', 'Github Stars'],
        ['330+', 'Releases'],
        ['1m', 'Downloads/mo'],
        ['5m', 'Total Downloads'],
      ],
    },
  },
};
