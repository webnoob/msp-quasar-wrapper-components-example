const notLoggedInRoutes = [
  {
    path: '/login',
    component: () => import('src/areas/notLoggedIn/layouts/Default.vue'),
    meta: {
      requiresAuth: false
    },
    children: [
      { path: '', component: () => import('src/areas/notLoggedIn/pages/Index.vue') },
      { path: 'forgot-password', component: () => import('src/areas/notLoggedIn/pages/ForgotPassword.vue') }
    ]
  }
]

export default notLoggedInRoutes
