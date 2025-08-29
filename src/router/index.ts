import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/features/auth/Login.vue')
  },
  {
    path: '/Forget',
    component: () => import('@/features/auth/Forget.vue')

  },
  {
    path: '/SetPassword',
    component: () => import('@/features/auth/SetPassword.vue')
  },
  {
    path: '/signup',
    component: () => import('@/features/auth/SignUp.vue')
  },
  {
    path: "/Verification",
    component: () => import('@/features/auth/Verification.vue')

  },
  {
    path: '',
    redirect:"/login"
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
