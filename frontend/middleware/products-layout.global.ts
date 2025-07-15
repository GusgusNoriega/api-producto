export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/products') && to.path !== '/products') {
    // @ts-ignore – agregamos meta en caliente
    console.log('[middleware] aplicando layout products a', to.path)
    to.meta.layout = 'products'
  }
})