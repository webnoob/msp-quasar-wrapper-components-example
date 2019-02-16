
const index = [
  {
    path: '/',
    component: () => import('src/areas/loggedIn/layouts/Default.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '', component: () => import('src/areas/loggedIn/pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  index.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default index
