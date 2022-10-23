import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('@/views/Home.vue'), meta: { title: "Home" } },
  { path: '/about', name: 'about', component: () => import('@/views/About.vue'), meta: { title: "About" } },

  // Catch-all 404 route. Keep this last.
  { path: '/:pathMatch(.*)*', component: () => import('@/views/404.vue') },
];

export default routes;