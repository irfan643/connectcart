import { RouteRecordRaw } from 'vue-router';

const HubRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
   
    component: () => import('@/views/Hub/HubTabLayout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'hub-dashboard' }
      },
      {
        path: 'dashboard',
        name: 'hub-dashboard',
        component: () => import('@/views/Hub/Dashboard.vue')
      },
      {
        path: 'packages',
        name: 'hub-packages',
        component: () => import('@/views/Hub/Packages.vue')
      },
      {
        path: 'return',
        name: 'hub-return',
        component: () => import('@/views/Hub/Return.vue')
      },
      {
        path: 'profile',
        name: 'hub-profile',
        component: () => import('@/views/Hub/Profile.vue')
      }
    ]
  }
];

export default HubRoute;
