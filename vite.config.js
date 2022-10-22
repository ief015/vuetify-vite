import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://github.com/fi3ework/vite-plugin-checker
import checker from 'vite-plugin-checker';

// https://vite-plugin-checker.netlify.app/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    checker({ vueTsc: true }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
