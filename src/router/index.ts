import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/kategori',
      name: 'kategori',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/kategori/:slug',
      name: 'kategori-slug',
      component: () => import('../views/CategoryView.vue'),
      props: true,
    },
    {
      path: '/produk/:slug',
      name: 'produk-detail',
      component: () => import('../views/ProductDetailView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
