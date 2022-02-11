/*
 * @Author: tanshaobo
 * @Date: 2022-02-11 09:23:55
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-11 18:07:02
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
    baseIdea:
      '将未排序的序列分为一个有序表和一个无序表，有序表中有一个元素，无序表中有n-1个元素，排序时，每次从无序表中抽取第一个元素，将它插入到有序表中适当位置，重复n-1次'
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
    baseIdea: `
      1、初始化堆：将数列a[1...n]构造成最大堆。
      2、交换数据：将a[1]和a[n]交换，使a[n]是a[1...n]中的最大值；然后将a[1...n-1]重新调整为最大堆。 接着，将a[1]和a[n-1]交换，使a[n-1]是a[1...n-1]中的最大值；然后将a[1...n-2]重新调整为最大值。 依次类推，直到整个数列都是有序的
      `
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
    baseIdea:
      '选择一个基准数，通过一趟排序将要排序的数据分割成独立的两部分；其中一部分的所有数据都比另外一部分的所有数据都要小。然后，再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列'
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
