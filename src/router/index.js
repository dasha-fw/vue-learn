import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Serves from '../components/ServesPage/Serves.vue'
import InteriorDesign from '../components/InteriorDesign/interiorDesign.vue'
import WorkPage from '../components/WorkPage/WorkPage.vue'
import modernCottage from '../components/ModernCottage/modernCottagePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/serves',
      name: 'Serves',
      component: Serves,
      meta: {
        breadcrumbs: [
          {
            name: 'Homepage',
            path: '/'
          },
          {
            name: 'Serves',
            path: '/serves'
          }
        ]
      }
    },
    {
      path: '/serves/interiorDesign',
      name: 'interiorDesign',
      component: InteriorDesign,
      meta: {
        breadcrumbs: [
          {
            name: 'Homepage',
            path: '/'
          },
          {
            name: 'Serves',
            path: '/serves'
          },
          {
            name: 'InteriorDesign',
            path: '/serves/interiorDesign'
          }
        ]
      }
    },
    {
      path: '/work',
      name: 'work',
      component: WorkPage,
      meta: {
        breadcrumbs: [
          {
            name: 'Homepage',
            path: '/'
          },
          {
            name: 'Work',
            path: '/work'
          }
        ]
      }
    },
    {
      path: '/work/modernCottage',
      name: 'modernCottage',
      component: modernCottage,
      meta: {
        breadcrumbs: [
          {
            name: 'Homepage',
            path: '/'
          },
          {
            name: 'Work',
            path: '/work'
          },
          {
            name: 'Modern Cottage',
            path: '/work/modernCottage'
          }
        ]
      }
    }
  ]
})

export default router
