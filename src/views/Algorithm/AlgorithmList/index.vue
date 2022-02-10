<template>
  <section class="container" ref="box">
    <el-row v-for="(item, index) in showList" :key="index">
      <div class="column-item" v-for="(i, j) in item" :key="j">
        <el-card v-if="!i.remain" @click="enterDetail(i)">
          {{ i.label }}
        </el-card>
      </div>
    </el-row>
  </section>
</template>
<script setup>
import { onMounted, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
const state = reactive({
  column: 0,
  dataList: [
    { id: 1, label: '冒泡排序', remain: false },
    { id: 2, label: '选择排序', remain: false },
    { id: 3, label: '插入排序', remain: false },
    { id: 4, label: '堆排序', remain: false },
    { id: 5, label: '快速排序', remain: false },
    { id: 6, label: '基数排序', remain: false },
    { id: 7, label: '希尔排序', remain: false }
  ],
  showList: []
})

const router = useRouter()

const enterDetail = (item) => {
  console.log(item)
  router.push({
    name: 'AlgorithmDetail',
    params: {
      id: item.id
    }
  })
}
const box = ref(null)
const computedLayout = () => {
  console.dir(box.value)
  state.column = Math.floor(box.value.clientWidth / 260)
  let remain = state.column - (state.dataList.length % state.column)
  state.dataList.length = state.dataList.length + remain
  state.dataList.fill({ remain: true }, state.dataList.length - remain, state.dataList.length)
  state.showList = handleArr(state.dataList, state.column)
}
onMounted(() => {
  computedLayout()
})
const handleArr = (arr, num) => {
  let result = new Array(Math.ceil(arr.length / num))
  result.fill(null, 0, result.length)
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(result[Math.floor(i / num)])) {
      result[Math.floor(i / num)].push(arr[i])
    } else {
      result[Math.floor(i / num)] = [arr[i]]
    }
  }
  return result
}

const { column, dataList, showList } = toRefs(state)
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
