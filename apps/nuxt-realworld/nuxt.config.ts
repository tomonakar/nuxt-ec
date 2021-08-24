import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      },
      {
        type: 'text/css',
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic',
      },
    ],
  },
  /*
   ** Global CSS
   */
  // https://github.com/gothinkster/realworld-starter-kit
  css: ['@/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/repository'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api/module'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://axios.nuxtjs.org
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/community-modules/tree/master/packages/markdownit
    '@nuxtjs/markdownit',
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  axios: {
    baseURL: 'https://conduit.productionready.io/api/',
  },
  // https://github.com/nuxt-community/modules/tree/master/packages/markdownit
  markdownit: {
    injected: true,
  },
  // https://typescript.nuxtjs.org/guide/lint.html#runtime-lint
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
};

export default config;
