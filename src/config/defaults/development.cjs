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
      snackbar: {
        // kind of notifications on requests
        status: true, // activate for error
        methods: ['post', 'put'], // show on sucess depends of methods
        sucessColor: 'success',
        errorColor: 'error',
      },
      appbar: {
        opacity: 99,
        scrollBehavior: 'hide',
      },
      navigation: {
        drawer: {
          floating: true,
          expand: true, // Collapses the drawer to a mini-variant until hovering with the mouse
          rail: true, // Small navigation, icon only
        },
      },
      themes: {
        light: {
          colors: {
            primary: '#101115',
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
            primary: '#101115',
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
    lightBackground: 'lite.jpeg',
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
      background: '#101115',
    },
    abouts: [
      {
        title: 'About us',
        text: '[WAOS](https://blog.weareopensource.me/us/)"s goal is to simplify the **start** of new **tech projects** / **startups**. \
          As we know It"s must be **fast**, **efficient** while **avoiding the refactor** afterward. \
          So whether through the creation of [Open-Source](https://github.com/weareopensource) **stacks** / **tools** or **articles**, \
          we **share our knowledge** around this subject.',
        button: {
          title: 'Follow Us on Github !',
          link: 'https://github.com/weareopensource',
        },
      },
    ],
    features: {
      title: 'Vuetify features',
      data: [
        {
          icon: 'fa-solid fa-users',
          title: 'Vibrant Community',
          text: '**Lorem** ipsum dolor sit amet consectetur adipisicing elit. \
            Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! \
            Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
          // color: 'red' background color option
        },
        {
          icon: 'fa-solid fa-cloud-arrow-up',
          title: 'Frequent Updates',
          text: '**Sed** ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. \
            Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
        },
        {
          icon: 'fa-solid fa-headset',
          title: 'Long-term Support',
          text: '**Lorem** ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque \
            harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
      ],
    },
    slideshow: {
      title: 'Demos',
      data: [
        {
          img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          icon: 'fa-solid fa-users',
          title: 'Vibrant Community',
          text: '**Lorem** ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint ...',
          // color: 'red'
          // position: 'end', start / center / end text position
        },
        {
          img: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          icon: 'fa-solid fa-cloud-arrow-up',
          title: 'Frequent Updates',
        },
      ],
    },
    stats: {
      background:
        'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      data: [
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
    blog: {
      // actually dev for Ghost Blog
      title: 'Blog',
      url: 'https://blog.weareopensource.me',
      subscribe: 'https://blog.weareopensource.me/#subscribe',
      key: '0415f48774e7c49c713204f787',
    },
    contact: {
      title: 'Contact Us',
      mail: 'mailto:pierre@weareopensource.me',
    },
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
