import TabLayout from '@/views/TabLayout.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
 
  {
    path: '/',
    component: TabLayout,
     redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'order',
        component: () => import('@/views/Order.vue')
      },
      {
        path: 'cart',
        component: () => import('@/views/Cart.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      }
    ]
  }, 
    {
      path: '/Product/:id',
      component: () => import('@/views/ProductDetailes.vue'),
      props: true

    },

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
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
