import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import BrandsPage from '@/views/BrandsPage.vue'
import ArticlesPage from '@/views/ArticlesPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import SingleModelPage from '@/views/SingleModelPage.vue'
import ModelsPage from '@/views/ModelsPage.vue'
import SingleArticlePage from '@/views/SingleArticlePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/brands',
    name: 'brands',
    component: BrandsPage,
    children: [
      // при совпадении пути с шаблоном /user/:id
      // в <router-view> компонента User будет показан UserHome

    ]
  },
  {
    path: '/brands/:mark',
    component: ModelsPage,

  },
  {
    path: '/brands/:mark/:model',
    component: SingleModelPage
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesPage,
  },
  {
    path: '/articles/:post',
    component: SingleArticlePage,
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundPage
  },

  {
    path: '*',
    redirect: '/404',
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
