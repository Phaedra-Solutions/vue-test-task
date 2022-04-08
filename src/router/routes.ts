import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'child', path: '', component: () => import('pages/ChildrenView.vue') },
      { name: 'classes', path: '/classes', component: () => import('pages/ClassesView.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/LoginView.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
