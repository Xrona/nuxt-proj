// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line
export default defineNuxtConfig({
    srcDir: './src',
    devtools: { enabled: true },
    modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
})
