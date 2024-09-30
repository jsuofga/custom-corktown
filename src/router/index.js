// Composables
import { useStateStore} from '@/stores/StateStore'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      
    ],
  },
  {
    path: '/main',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/main',
        name: 'Main',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Main.vue'),
      },
      
    ],
  },
  {
    path: '/accesscontrol',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/accesscontrol',
        name: 'AccessControl',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.s
        component: () => import(/* webpackChunkName: "home" */ '@/views/AccessControl.vue'),
      },
      
    ],
  },
  {
    path: '/videoinputs',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/videoinputs',
        name: 'Videoinputs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Videoinputs.vue'),
      },
      
    ],
  },
  {
    path: '/update',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/update',
        name: 'Update',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Update.vue'),
        beforeEnter: (to, from, next) => {
          const  StateStore = useStateStore(); // <-- passing Pinia instance directly
          if (to.name !== 'AccessControl' && !StateStore.isAuthenticated) {
            next({ name: 'AccessControl' });
          } else {
            next();
          }
        }
   
      },
    ],
  },
  {
    path: '/ipaddressinput',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/ipaddressinput',
        name: 'IpAddressInput',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/IpAddressInput.vue'),
        beforeEnter: (to, from, next) => {
          const  StateStore = useStateStore(); // <-- passing Pinia instance directly
          if (to.name !== 'AccessControl' && !StateStore.isAuthenticated) {
            next({ name: 'AccessControl' });
          } else {
            next();
          }
        }
      },
    ],
  },
  {
    path: '/settingsmenu',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/settingsmenu',
        name: 'SettingsMenu',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/SettingsMenu.vue'),
  
      },
    ],
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
