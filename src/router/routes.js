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
      // Complaints section (replaces former Trails)
      {
        path: 'complaints',
        name: 'complaints',
        component: () => import('@/pages/ComplaintsPage.vue')
      },
      {
        path: 'complaints/rectify',
        name: 'complaint-rectify',
        component: () => import('@/pages/RectifyInfoForm.vue')
      },
      {
        path: 'complaints/report',
        name: 'complaint-report',
        component: () => import('@/pages/ReportDamageForm.vue')
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
        path: 'stories',
        name: 'stories',
        component: () => import('@/pages/StoriesPage.vue')
      },
      {
        path: 'stories/:slug',
        name: 'story-detail',
        component: () => import('@/pages/StoryDetailPage.vue')
      }
    ]
  },

  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    name: 'error-not-found',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
