<template>
  <canvas id="canvas" width="500" height="500" ref="canvas"></canvas>
</template>
<script setup>
import { ref, nextTick } from 'vue'
import Rect from './hooks/Rect'
import setNums from '../hooks/setNums'
// 生成数组
const nums = setNums()

const canvas = ref(null)
const creatCtx = (canvas) => {
  const ctx = canvas.value.getContext('2d')
  ctx.fillStyle = 'white'
  ctx.translate(250, 250)
  return ctx
}
const CosandSin = []
for (let i = 0; i < 360; i++) {
  const jiaodu = (i / 180) * Math.PI
  CosandSin.push({ cos: Math.cos(jiaodu), sin: Math.sin(jiaodu) })
}
nextTick(() => {
  const ctx = creatCtx(canvas)
  const drawAll = (arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        ctx.clearRect(-250, -250, 500, 500) // 清空画布
        const rects = [] // 用来存储720个长方形
        for (let i = 0; i < arr.length; i++) {
          const num = arr[i]
          const { cos, sin } = CosandSin[Math.floor(i / 2)] // 一个角画两个
          const x = num * cos // x = ρ * cosθ
          const y = num * sin // y = ρ * sinθ
          rects.push(new Rect(ctx, x, y, 5, 3)) // 收集所有长方形
        }
        rects.forEach((rect) => rect.draw()) // 遍历渲染
        resolve('draw success')
      }, 10)
    })
  }
  drawAll(nums)

  const bubbleSort = async (arr) => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // 相邻元素两两对比
          let temp = arr[j + 1] // 元素交换
          arr[j + 1] = arr[j]
          arr[j] = temp
        }
      }
      // eslint-disable-next-line no-await-in-loop
      await drawAll(arr) // 一边排序一边重新画
    }
    return arr
  }
  bubbleSort(nums)
})
</script>
<style lang="stylus" scoped>
#canvas
  background #000
</style>
