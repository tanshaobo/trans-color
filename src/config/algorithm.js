/*
 * @Author: tanshaobo
 * @Date: 2022-02-11 09:23:55
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-11 17:58:08
 * @Description: 算法配置
 * @FilePath: \trans-color\src\config\algorithm.js
 */

const data = [
  {
    id: 1,
    label: '冒泡排序',
    name: 'Bubble',
    stable: true,
    linear: false,
    timeComplexity: 'O(n²)',
    bastComplexity: 'O(n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    baseIdea:
      '遍历未排序的序列，通过依次对比相邻元素大小，交换彼此位置，遍历一次后，最大元素处于队尾，重复此操作'
  },
  {
    id: 2,
    label: '选择排序',
    name: 'Selection',
    stable: false,
    linear: false,
    timeComplexity: 'O(n²)',
    bastComplexity: 'O(n²)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    baseIdea: '遍历未排序的序列，找到最小值，置于队首，再遍历剩余元素，依次进行该操作'
  },
  {
    id: 3,
    label: '插入排序',
    name: 'Insertion',
    stable: true,
    linear: false,
    timeComplexity: 'O(n²)',
    bastComplexity: 'O(n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    baseIdea: ''
  },
  {
    id: 4,
    label: '堆排序',
    name: 'Heap',
    stable: false,
    linear: false,
    timeComplexity: 'O(nlog₂n)',
    bastComplexity: 'O(nlog₂n)',
    worstComplexity: 'O(nlog₂n)',
    spaceComplexity: 'O(1)',
    baseIdea: ''
  },
  {
    id: 5,
    label: '快速排序',
    name: 'Quick',
    stable: false,
    linear: false,
    timeComplexity: 'O(nlog₂n)',
    bastComplexity: 'O(nlog₂n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(log₂n)',
    baseIdea: ''
  },
  {
    id: 6,
    label: '基数排序',
    name: 'Radix',
    stable: true,
    linear: true,
    timeComplexity: 'O(n*k)',
    bastComplexity: 'O(n*k)',
    worstComplexity: 'O(n*k)',
    spaceComplexity: 'O(n+k)',
    baseIdea: ''
  },
  {
    id: 7,
    label: '希尔排序',
    name: 'Shell',
    stable: false,
    linear: false,
    timeComplexity: 'O(n³ʹ²)',
    bastComplexity: 'O(n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    baseIdea: ''
  },
  {
    id: 8,
    label: '归并排序',
    name: 'Merge',
    stable: true,
    linear: false,
    timeComplexity: 'O(nlog₂n)',
    bastComplexity: 'O(nlog₂n)',
    worstComplexity: 'O(nlog₂n)',
    spaceComplexity: 'O(n)',
    baseIdea: ''
  },
  {
    id: 9,
    label: '桶排序',
    name: 'Bucket',
    stable: true,
    linear: true,
    timeComplexity: 'O(n+k)',
    bastComplexity: 'O(n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(n+k)',
    baseIdea: ''
  },
  {
    id: 10,
    label: '计数排序',
    name: 'Count',
    stable: true,
    linear: true,
    timeComplexity: 'O(n+k)',
    bastComplexity: 'O(n+k)',
    worstComplexity: 'O(n+k)',
    spaceComplexity: 'O(n+k)',
    baseIdea: ''
  }
]

export default data
