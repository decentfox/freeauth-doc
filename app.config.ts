export default defineAppConfig({
  docus: {
    title: 'FreeAuth',
    description: 'Python Authentication and RBAC Solution',
    image: '/cover.png',
    socials: {
      github: 'decentfox/freeauth-api',
      freeauth: {
        label: '简体中文',
        icon: 'icon-park-outline:chinese',
        href: 'https://zh.freeauth.decentfox.com'
      }
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'freeauth-doc',
      owner: 'decentfox',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by DecentFoX',
        href: 'https://decentfox.com'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    }
  }
});
