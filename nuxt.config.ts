// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['bootstrap-icons/font/bootstrap-icons.min.css','assets/mian.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vuestic/nuxt',
    "@element-plus/nuxt"
  ],
  

  runtimeConfig: {
    // The private keys which are only available server-side
    
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'https://api.blog.bromel.info/api/',
    }
  }
})
