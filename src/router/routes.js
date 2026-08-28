const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/HomePage.vue')
      },
      {
        path: 'heritage',
        name: 'heritage',
        component: () => import('@/pages/HeritagePage.vue')
      },
      {
        path: 'heritage/:slug',
        name: 'heritage-detail',
        component: () => import('@/pages/HeritageDetailPage.vue')
      },
      {
        path: 'culture',
        name: 'culture',
        component: () => import('@/pages/CulturePage.vue')
      },
      {
        path: 'culture/:slug',
        name: 'culture-detail',
        component: () => import('@/pages/CultureDetailPage.vue')
      },
      {
        path: 'trails',
        name: 'trails',
        component: () => import('@/pages/CulturalTrailsPage.vue')
      },
      {
        path: 'trails/:slug',
        name: 'trail-detail',
        component: () => import('@/pages/TrailDetailPage.vue')
      },
      {
        path: 'explore',
        name: 'explore',
        component: () => import('@/pages/ExplorePage.vue')
      },
      {
        path: 'explore/map',
        name: 'explore-map',
        component: () => import('@/pages/LivingHeritageMapPage.vue')
      },
      {
        path: 'passport',
        name: 'passport',
        component: () => import('@/pages/PassportPage.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/pages/ProfilePage.vue')
      }
    ]
  },

  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
