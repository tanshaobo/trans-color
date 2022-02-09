/*
 * @Author: tanshaobo
 * @Date: 2022-02-09 13:13:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-09 16:27:06
 * @Description: 算法
 * @FilePath: \trans-color\src\router\modules\algorithm.js
 */
import Home from '@/views/Index.vue'

const algorithm = {
  path: '/algorithm',
  label: '算法',
  name: 'Algorithm',
  component: Home,
  isMenu: true,
  children: [
    {
      path: '/algorithm',
      label: '列表',
      name: 'AlgorithmList',
      component: () => import('@/views/Algorithm/AlgorithmList/index.vue')
    },
    {
      path: '/algorithmDetail',
      label: '详情',
      name: 'AlgorithmDetail',
      component: () => import('@/views/Algorithm/AlgorithmList/index.vue')
    }
  ]
}

export default algorithm
