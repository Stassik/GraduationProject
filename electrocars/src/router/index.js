import Vue from 'vue'
import VueRouter from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'
import HomePage from '../views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import BrandsPage from '@/views/BrandsPage.vue'
import ArticlesPage from '@/views/ArticlesPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import SingleModelPage from '@/views/SingleModelPage.vue'
import ModelsPage from '@/views/ModelsPage.vue'
import SingleArticlePage from '@/views/SingleArticlePage.vue'

Vue.use(VueRouter)
Vue.use(VueBreadcrumbs, {
  template: '<nav class="breadcrumb" v-if="$breadcrumbs.length"> ' +
    '<router-link class="breadcrumb-item" v-for="(crumb, key) in $breadcrumbs" :to="linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link> ' +
    '</nav>'
});

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      breadcrumb: 'Главная',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: {
      breadcrumb: 'О Компании',
    },
  },
  {
    path: '/brands',
    name: 'brands',
    component: BrandsPage,
    children: [
      // при совпадении пути с шаблоном /user/:id
      // в <router-view> компонента User будет показан UserHome

    ],
    meta: {
      breadcrumb: 'Авто',
    },
  },
  {
    path: '/brands/:mark',
    component: ModelsPage,
    meta: {
      breadcrumb: ':mark',
    },

  },
  {
    path: '/brands/:mark/:model',
    component: SingleModelPage,
    meta: {
      breadcrumb: ':model',
    },
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
