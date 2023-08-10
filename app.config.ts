export default defineAppConfig({
  docus: {
    title: 'FreeAuth',
    description: 'Ready-to-use and customizable RBAC.',
    image: '/cover.png', // TODO: replace cover image
    socials: {
      github: 'decentfox/freeauth-api',
      'freeauth-zh': {
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
    }
  }
});
