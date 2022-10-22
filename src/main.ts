import { createApp } from 'vue';
import { loadFonts } from '@/plugins/webfontloader';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/plugins/router';
import pinia from '@/plugins/pinia';

loadFonts();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app');
