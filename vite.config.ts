import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
// import presetUno from "unocss"
// import presetAttributify from "unocss"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Unocss({
            presets: [
                presetAttributify({
                    /* preset options */
                }),
                presetUno(),
                // ...custom presets
            ],
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: "./",
    server: {
        host: '0.0.0.0'
    }
});
