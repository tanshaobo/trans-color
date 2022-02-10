<template>
  <Grid :data-list="dataList" @click="enterDetail"></Grid>
</template>
<script setup>
import Grid from '@/components/layout/Grid/index.vue'

import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
const state = reactive({
  dataList: [
    { id: 1, label: '冒泡排序', remain: false },
    { id: 2, label: '选择排序', remain: false },
    { id: 3, label: '插入排序', remain: false },
    { id: 4, label: '堆排序', remain: false },
    { id: 5, label: '快速排序', remain: false },
    { id: 6, label: '基数排序', remain: false },
    { id: 7, label: '希尔排序', remain: false }
  ]
})

const router = useRouter()

const enterDetail = (item) => {
  router.push({
    name: 'AlgorithmDetail',
    params: {
      id: item.id
    }
  })
}

const { dataList } = toRefs(state)
</script>
<style lang="stylus">
.container
  display flex
  flex-wrap wrap
  .el-row
    width 100%
    justify-content space-between
    .column-item
      width 240px
      margin-bottom 20px
    .el-card
      cursor pointer
</style>
