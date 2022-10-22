// vue-router
// https://v3.router.vuejs.org/guide/#javascript
import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes';
import config from '@/config.json';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.afterEach((to, from) => {
  nextTick(async () => {
    const title = (await to.meta.title) ?? to.name ?? to.path;
    console.log(to.matched);
    document.title = `${title} | ${config.appTitle}`;
  });
});

export default router;