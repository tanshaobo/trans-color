/*
 * @Author: tanshaobo
 * @Date: 2022-02-09 13:13:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-21 14:57:19
 * @Description: 算法
 * @FilePath: \trans-color\src\router\modules\algorithm.js
 */
import Home from '@/views/Index.vue'

const algorithm = {
  path: '/algorithm',
  label: '算法',
  name: 'Algorithm',
  component: Home,
  menu: true,
  showChildren: false,
  meta: {
    submenu: '/algorithm'
  },
  children: [
    {
      path: '/algorithm',
      label: '列表',
      name: 'AlgorithmList',
      menu: false,
      meta: {
        submenu: '/algorithm',
        crumb: [
          {
            path: '/algorithm',
            name: 'AlgorithmList',
            label: '列表'
          }
        ]
      },
      component: () => import('@/views/Algorithm/AlgorithmList/index.vue')
    },
    {
      path: '/algorithmDetail/:id',
      label: '详情',
      name: 'AlgorithmDetail',
      menu: false,
      meta: {
        submenu: '/algorithm',
        crumb: [
          {
            path: '/algorithm',
            name: 'AlgorithmList',
            label: '列表'
          },
          {
            path: '/AlgorithmDetail',
            name: 'AlgorithmDetail',
            label: '详情'
          }
        ]
      },
      component: () => import('@/views/Algorithm/AlgorithmDetail/index.vue')
    }
  ]
}

export default algorithm
