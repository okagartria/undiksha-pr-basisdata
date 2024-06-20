// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  modules: ["@nuxt/ui", "nuxt-vuefire"],
  vuefire: {
    config: {
      apiKey: "AIzaSyDY7y2cLY4auoLgRHeQW_lo-X8-ivLpJo4",
      authDomain: "undiksha-basisdata.firebaseapp.com",
      projectId: "undiksha-basisdata",
      storageBucket: "undiksha-basisdata.appspot.com",
      messagingSenderId: "912868962374",
      appId: "1:912868962374:web:46987e8c256e3c44c05a47",
      measurementId: "G-ZHF1LS9JWR"
    },
  },
});
