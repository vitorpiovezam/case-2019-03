export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Vitta Test | Front End',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],
  env: {
    API_URL: 'http://localhost:8080/api'
  },
}
