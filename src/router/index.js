import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/1',
  },
  {
    path: '/rechenspiel',
    name: 'Game',
    component: () => import(/* webpackChunkName: "views" */ '../views/Game.vue'),
  },
  {
    path: '/:id',
    name: 'Nummer',

    component: () => import(/* webpackChunkName: "views" */ '../views/Number.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
