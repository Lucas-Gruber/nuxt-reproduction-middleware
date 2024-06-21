export default defineNuxtRouteMiddleware((to) => {
  console.log('called auth.ts')
  if (true) { // Check if user is signed in is not required for this reproduction
    console.log('Redirect-URI:', encodeURIComponent(to.fullPath))
    return navigateTo({
      path: '/',
      query: {
        redirect: encodeURIComponent(to.fullPath),
      },
    })
  }
})
