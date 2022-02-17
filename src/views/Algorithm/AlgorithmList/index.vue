<template>
  <Grid :data-list="dataList" class="grid">
    <template #default="slotProps">
      <div v-for="(item, index) in slotProps.item" :key="item.id">
        <div v-if="dataHeader[index]" class="row">
          <span class="title">
            {{ dataHeader[index] }}
          </span>
          <span class="content">
            {{ index != 'stable' && index != 'linear' ? item : item == true ? '是' : '否' }}
          </span>
        </div>
      </div>
    </template>
  </Grid>
</template>
<script setup>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Grid from '@/components/layout/Grid/index.vue'
import data from '@/config/algorithm'
import deepCopyObject from '@/utils/deepCopyObject'

const state = reactive({
  dataList: [],
  dataHeader: {
    id: '编号',
    label: '名称',
    stable: '是否稳定',
    linear: '是否线性',
    timeComplexity: '时间复杂度',
    bastComplexity: '最低复杂度',
    worstComplexity: '最高复杂度',
    spaceComplexity: '空间复杂度'
  }
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

const Init = () => {
  state.dataList = deepCopyObject(data).map((i) => {
    i.remain = false
    return i
  })
}
Init()
const { dataList, dataHeader } = toRefs(state)
</script>
<style lang="stylus">
.grid
  .row
    line-height 36px
    display flex
    justify-content space-between
    .title
      font-weight bold
      color rgba(51, 51, 51, .8)
    .content
      color rgba(112, 112, 112, .8)
</style>
