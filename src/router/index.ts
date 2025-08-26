import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage, 
    children: [
      {
        path: '', 
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/TabPage.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/features/auth/Login.vue')
  },
     {
 path : '/Forget',
 component :()=> import('@/features/auth/Forget.vue')

     },

     {
    path: '/SetPassword',
    component: () => import('@/features/auth/SetPassword.vue')
  },
  {
   path: '/signup',
    component: () => import('@/features/auth/SignUp.vue')
  },
  {path :"/Verification",
    component :()=> import('@/features/auth/Verification.vue')

  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
