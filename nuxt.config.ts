// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'DenDen Map',
      meta: [
        {
          'name': 'viewport',
          'content': 'width=device-width, initial-scale=1'
        },
        {
          'charset': 'utf-8'
        },
        {
          name: 'description',
          content: 'A BEV Charging & Spots AI Navigator'
        },
      ],
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    strategy: 'prefix_and_default',
    defaultLocale: 'zh-hant',
    detectBrowserLanguage: false,
    langDir: 'locales/',
    locales: [
      {
        code: 'ZH-HANT',
        file: 'zh-hant.json',
        iso: 'zh',
      },
      {
        code: 'EN',
        file: 'en.json',
        iso: 'en'
      },
    ],
    rootRedirect: 'zh-hant',
  },
  routeRules: {
    '/': { redirect: '/zh-hant' },
  },
  css: [
    '~/assets/styles/main.css',
    'animate.css/animate.min.css'
  ],
  nitro: {
    preset: 'firebase',
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
})
