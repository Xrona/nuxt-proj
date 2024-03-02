import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: './src',
    devtools: { enabled: true },
    modules: [ '@nuxtjs/tailwindcss', 'nuxt-primevue'],
    css: ['~/assets/css/main.css'],
    primevue: {
        unstyled: true,
        importPT: { from: path.resolve(__dirname, './presets/lara/') },
    },
    imports: {
        dirs: ['composables/**', 'utils/**'],
    },
})
