// 首页
const index = {
  path: '/',
  name: 'Index',
  component: () => import('@/views/Index.vue'),
  children:[{
    path: '/algorithm',
    name: 'Algorithm',
    component: () => import('@/components/algorithm/index.vue')
  }]
}
// 登录
const home = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/Home.vue')
}

// 匹配路由
const routes = [index,home]
export default routes
