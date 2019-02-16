// import { axiosInstance } from 'boot/axios'

export default async ({ app, router, Vue }) => {
  router.beforeEach((to, from, next) => {
    // TODO: Do some authentication
    if (to.matched.some(record => record.meta.requiresAuth)) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  })
}
