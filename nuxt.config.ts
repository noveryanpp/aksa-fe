// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "node:url";

export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},

    plugins: [
        {src: '~/plugins/particles.ts', mode: 'client'},
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use '~/assets/css/main.scss' as *;`
                }
            }
        }
    },

    modules: ['@nuxt/icon']
})