import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Shop from '../components/Shop.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import { useUserStore } from '../store/userStore'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/shop',
    component: Shop,
    meta: { requiresAuth: true },
  },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router