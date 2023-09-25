/* eslint-disable no-multi-str */
module.exports = {
  app: {
    title: 'WAOS',
    logo: 'logo.png', // null to use title by default
    subtitle: 'welcome to demo.',
    description: 'Vue - Boilerplate Front : Vuetify, Axios, Jest, Cypress (Alpha) ',
    keywords: 'vue, vuetify, axios, jest, cypress',
    author: 'pierre@weareopensource.me',
    icon: 'fa-solid fa-earth-americas',
  },
  port: 8080, // only available for dev env
  api: {
    protocol: 'http',
    host: 'localhost',
    port: '3000',
    base: 'api',
    endPoints: {
      home: 'home',
      auth: 'auth',
      users: 'users',
      tasks: 'tasks',
    },
  },
  sign: {
    route: '/tasks', // route push after sign in/up
    in: true, // display signin link
    up: true, // display signup link
  },
  cookie: {
    prefix: 'waos',
  },
  oAuth: {
    google: true, // require server side oAuth config
    apple: true, // require server side oAuth config
  },
  whitelists: {
    users: {
      roles: ['user', 'admin'],
    },
  },
  analytics: {
    posthog: {
      // host: 'ph_instance_address',
      // key: 'ph_project_api_key',
    },
  },
  vuetify: {
    theme: {
      dark: 'auto', // dark theme true / false / auto (based on prefers-color-scheme)
      flat: true, // flat by default
      rounded: 'rounded-lg',
      maxWidth: '1400px',
      snackbar: {
        // kind of notifications on requests
        status: true, // activate for error
        methods: ['post', 'put'], // show on sucess depends of methods
        sucessColor: 'success',
        errorColor: 'error',
      },
      appbar: {
        background: '#2c3e50',
        color: '#FFFFFF',
        opacity: 99,
        scrollBehavior: 'hide',
      },
      navigation: {
        background: '#2c3e50',
        color: '#FFFFFF',
        drawer: {
          floating: true,
          expand: true,
          rail: true,
        },
      },
      themes: {
        light: {
          colors: {
            primary: '#1abc9c',
            secondary: '#EE5A24',
            background: '#f3f3f6',
            surface: '#ffffff',
            error: '#e01f26',
            success: '#119178',
            onPrimary: '#ffffff',
            onSecondary: '#FFFFFF',
            onBackground: '#1d1d1f',
            onSurface: '#1d1d1f',
            onError: '#FFFFFF',
            onSuccess: '#FFFFFF',
          },
        },
        dark: {
          colors: {
            primary: '#1abc9c',
            secondary: '#e67e22',
            background: '#1F1F1F',
            surface: '#282A2E',
            error: '#CF6679',
            success: '#119178',
            onPrimary: '#FFFFFF',
            onSecondary: '#FFFFFF',
            onBackground: '#FFFFFF',
            onSurface: '#FEFEFE',
            onError: '#000000',
            onSuccess: '#000000',
          },
        },
      },
      options: {
        customProperties: true,
      },
    },
    icons: {
      defaultSet: 'fa',
    },
  },
  header: {
    logo: {
      file: 'logo.png', // null to hide
      width: '120px',
    },
    title: false, // display title or not
    links: [
      // top left
      {
        title: 'Product',
        sublinks: [
          {
            icon: 'fa-regular fa-star',
            color: 'secondary',
            title: 'For startuper',
            subtitle: 'Create faster, Resilient, Easily',
            url: 'https://github.com/weareopensource/',
          },
          {
            icon: 'fa-solid fa-code',
            color: 'secondary',
            title: 'For developer',
            subtitle: 'Learn, develop, fork',
            url: 'https://github.com/weareopensource/',
          },
        ],
      },
      {
        title: 'Ressources',
        sublinks: [
          {
            icon: 'fa-regular fa-newspaper',
            color: 'secondary',
            title: 'Blog',
            subtitle: 'Follow our updates and activities',
            url: 'https://blog.weareopensource.me',
          },
        ],
      },
      {
        title: 'Pricing',
        url: 'https://blog.weareopensource.me',
      },
    ],
    shortcuts: [
      {
        title: 'Get Started - free',
        url: 'https://blog.weareopensource.me',
        variant: 'flat',
      },
    ],
  },
  home: {
    lightBackground: 'light.jpeg',
    darkBackground: 'dark.jpeg',
    banner: {
      title: 'Turn your ideas <br /> <b><span style="color:#55efc4">into a reality.</span></b>',
      button: {
        title: 'Just launched: 2.0 →',
        color: '#55efc4',
        link: 'https://github.com/weareopensource',
      },
    },
    video: {
      file: 'video.mp4',
      poster: 'video-poster.webp',
      style: {
        section: {
          background: 'surface',
        },
        video: {
          background: '#101115',
        },
      },
    },
    punchline: {
      style: {
        section: {
          background: 'background',
        },
      },
      content: [
        {
          subtitle: 'We Are Open Source',
          quote: true,
          text: 'Is an all-in-one platform tailored for **developers**, **startups**, and **incubators**, streamlining the process of launching digital projects. With our intuitive stack combining **NodeJS**, **VueJS**, and **Swift**, users can swiftly set up **authentication**, showcase **products**, implement **pricing models**, and handle **subscriptions**. Dive into the new era of rapid development and bring your innovative ideas to life with ease.',
          button: {
            title: 'Follow Us on Github',
            link: 'https://github.com/weareopensource',
          },
        },
      ],
    },
    features: {
      style: {
        section: {
          background: 'surface',
        },
        video: {
          background: '#101115',
        },
      },
      title: 'Showcase Site !',
      content: [
        {
          text: 'Specifically crafted for startups & developers, our template, integrating **NodeJS**, **VueJS**, & **Swift**, offers a unique opportunity for users. Not only does it guarantee a standout product showcase without the usual design hiccups, but it also empowers users with a tool that marries both aesthetic appeal and functional prowess. Dive in and experience a transformative platform where elegance meets performance.',
          reversed: true,
          fullWidth: true,
          video: {
            file: 'video.mp4',
            poster: 'video-poster.webp',
          },
        },
        {
          subtitle: 'Authentication Feature',
          img: 'login.jpg',
          height: '400px',
          text: 'Leveraging **Apple Connect**, **Google Connect**, and **JWT**, our authentication system emphasizes security and ease. Fueled by **NodeJS**, **VueJS**, & **Swift**, it promises a unified sign-in process  and ensuring user comfort.',
        },
        {
          subtitle: 'CRUD Model',
          img: 'crud.jpg',
          height: '400px',
          text: 'Our **CRUD** model, built on **NodeJS**, **VueJS**, & **Swift**, exemplifies rapid feature development. It offers a clear path to master CRUD operations, eliminating guesswork. Elevate your development with our insightful guide.',
        },
      ],
    },
    repos: {
      style: {
        section: {
          background: 'background',
        },
      },
      dynamicIsland: {
        text: 'Discover more stacks',
      },
      content: [
        {
          subtitle: 'Node',
          img: 'card01.jpg',
          text: 'Discover our Node stack that can run standalone or in conjunction with other repos like Vue or Swift. It utilizes Node, Express, MongoDB, Sequelize, and Jest. Features include user authentication, task management, and file uploads. Easy setup with Docker and configurable through variables.',
          button: {
            title: 'Just launched: 1.2.1 →',
            color: '#EA3F7D',
            link: 'https://github.com/weareopensource/Node',
          },
          style: {
            card: {
              background: '#FFD0E4',
              color: '#000000',
            },
          },
        },
        {
          subtitle: 'Vue',
          img: 'card02.jpg',
          reversed: true,
          text: "Explore our Vue 3 stack, built on Vue 3 and Vuetify 3 with JWT for authentication. It's modular, pairing seamlessly with backend repos like our Node stack. The layered architecture ensures organized code, while tools like Docker, ESLint, and Github Action to enhance development and deployment.",
          button: {
            title: 'Just launched: 1.2.0 →',
            color: '#DAFE56',
            link: 'https://github.com/weareopensource/Vue',
          },
          style: {
            card: {
              background: '#010101',
              color: '#FFFFFF',
            },
          },
        },
        {
          subtitle: 'Swift',
          img: 'card03.jpg',
          text: 'Our Swift stack, in Beta, offers a standalone frontend or can pair with our other stacks. It features layered architecture, reactive programming with RxSwift, and integrates tools for development and CI. The stack supports user authentication, task management, uploads, and notifications',
          button: {
            title: 'Just launched: 1.3.0 →',
            color: '#f1c40f',
            link: 'https://github.com/weareopensource/Swift',
          },
          style: {
            card: {
              background: '#2c3e50',
              color: '#FFFFFF',
            },
          },
        },
        {
          subtitle: 'Conventional Changelog',
          img: 'card04.jpg',
          reversed: true,
          text: "Conventional Changelog is a prompt to respect the standards inspired by CZ. It's been enhanced with ES6, an Emoji system and simplified. It offers configuration flexibility and is integrated with tools like commitizen. The project is open for contributions and is a part of our initiative.",
          button: {
            title: 'Just launched: 1.7.0 →',
            color: '#365571',
            link: 'https://github.com/weareopensource/conventional-changelog',
          },
          style: {
            card: {
              background: '#16a085',
              color: '#FFFFFF',
            },
          },
        },
      ],
    },
    ressources: {
      title: 'Some ressources to start',
      style: {
        section: {
          background: 'surface',
        },
        card: {
          background: 'background',
        },
      },
      content: [
        {
          icon: 'fa-solid fa-book',
          color: '#16a085',
          subtitle: 'History',
          text: 'This work was initially based on [MEAN.js](http://meanjs.org/), and a fork named [Riess.js](https://github.com/lirantal/Riess.js). Its creators stopped working on it, and we wished to take the project over. We want to create updated stacks with the same mindset.',
        },
        {
          icon: 'fa-solid fa-file-lines',
          color: '#2980b9',
          subtitle: 'Ressources',
          text: '[Start a project and keep it updated ?](https://blog.weareopensource.me/start-a-project-and-maintain-updates/)<br /><br /> - Deployment: [Rancher](https://blog.weareopensource.me/tag/rancher-2/) - [CapRover](https://blog.weareopensource.me/node/) <br /> - Code: [JS](https://blog.weareopensource.me/js-knwoledges/) - [Swift](https://blog.weareopensource.me/js-knwoledges-2/)  <br /> - Other: [Commits](https://github.com/weareopensource/conventional-changelog) - [Server](https://blog.weareopensource.me/setup-debian-server/) - [Tools](https://blog.weareopensource.me/us/) <br /><br />',
        },
        {
          icon: 'fa-solid fa-binoculars',
          color: '#f39c12',
          subtitle: 'Vision',
          text: 'We dream of creating stacks in multiple languages, [Vue](https://github.com/weareopensource/Vue), [Node](https://github.com/weareopensource/Node), [Swift](https://github.com/weareopensource/Swift) ..., aligned on features & architecture. We want to allow anyone to create a full-stack on-demand and keep it updated easily.',
        },
      ],
    },
    designs: {
      style: {
        section: {
          background: 'background',
        },
        height: '700px',
        interval: 6000,
      },
      dynamicIsland: {
        text: 'Discover our designs',
      },
      content: [
        {
          img: 'slide01.jpg',
          text: null,
          color: null,
        },
        {
          img: 'slide02.jpg',
          text: null,
          color: null,
        },
      ],
    },
    partners: {
      style: {
        section: {
          background: 'surface',
        },
        card: {
          background: 'surface',
        },
        size: '100px',
      },
      title: 'Our incredible partners',
      content: [
        {
          image: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-16.png',
          link: 'https://apple.com',
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
          link: 'https://google.com',
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
          link: 'https://tesla.com',
        },
        {
          image: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-16.png',
          link: 'https://apple.com',
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
          link: 'https://google.com',
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
          link: 'https://tesla.com',
        },
      ],
    },
    blog: {
      style: {
        section: {
          background: 'background',
        },
        img: {
          height: '350px',
          width: '500px',
        },
      },
      title: 'Some contents to read',
      url: 'https://blog.weareopensource.me',
      key: '0415f48774e7c49c713204f787',
    },
    stats: {
      content: [
        {
          value: '0',
          title: 'Tasks',
        },
        {
          value: '0',
          title: 'Releases',
        },
        {
          value: '0',
          title: 'Users',
        },
        {
          value: '50m',
          title: 'Total Downloads',
        },
      ],
    },
    contact: {
      style: {
        section: {
          background: 'background',
        },
      },
      title: 'Feel free to contact us',
      mail: 'mailto:pierre@weareopensource.me',
    },
  },
  pages: {
    style: {
      section: {
        background: 'background',
      },
      card: {
        background: 'surface',
      },
    },
  },
  footer: {
    links: [
      {
        title: 'Useful',
        items: [
          {
            // set null to hide
            label: 'Blog',
            icon: 'fa-solid fa-rss',
            url: 'https://blog.weareopensource.me',
          },
          {
            label: 'Twitter',
            icon: 'fa-brands fa-twitter',
            url: 'https://weareopensource.me',
          },
        ],
      },
      {
        title: 'About',
        items: [
          {
            // set null to hide
            label: 'Us ?',
            icon: 'fa-solid fa-users',
            url: '/team',
          },
          {
            label: 'Changelogs',
            icon: 'fa-solid fa-clipboard-list',
            url: '/changelogs',
          },
          {
            label: 'WAOS 2023',
            icon: 'fa-regular fa-copyright',
            url: 'https://weareopensource.me',
          },
        ],
      },
      {
        title: 'Others',
        items: [
          {
            // set null to hide
            label: 'T&C / CGU',
            icon: 'fa-solid fa-file-lines',
            url: '/pages/terms',
          },
          {
            label: 'Legal',
            icon: 'fa-solid fa-stamp',
            url: '/pages/legal',
          },
        ],
      },
    ],
  },
};
