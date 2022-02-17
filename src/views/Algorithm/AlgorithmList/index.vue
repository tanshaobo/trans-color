<template>
  <Grid :data-list="dataList">
    <template #default="slotProps">{{ slotProps }}</template>
  </Grid>
</template>
<script setup>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Grid from '@/components/layout/Grid/index.vue'
import data from '@/config/algorithm'

const state = reactive({
  dataList: []
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
