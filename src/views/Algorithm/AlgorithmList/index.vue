<template>
  <section class="container" ref="box">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-card v-for="(item, index) in dataList" :key="item.id" @click="enterDetail(item)">
      {{ item.label }}
    </el-card>
  </section>
</template>
<script setup>
import { onMounted, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
const dataList = [
  { id: 1, label: '冒泡排序' },
  { id: 2, label: '选择排序' },
  { id: 3, label: '插入排序' },
  { id: 4, label: '堆排序' },
  { id: 5, label: '快速排序' },
  { id: 6, label: '基数排序' },
  { id: 7, label: '希尔排序' }
]
const state = reactive({})

const router = useRouter()

const enterDetail = (item) => {
  console.log(item)
  // router.push(item)
}
const box = ref(null)
const computedLayout = () => {
  console.dir(box.value)
  let width = box.value.clientWidth
  console.log(width)
}
onMounted(() => {
  computedLayout()
})
const {} = toRefs(state)
</script>
<style lang="stylus">
.container
  display flex
  flex-wrap wrap
  .el-card
    width 25%
    max-width 240px
    cursor pointer
    margin-bottom 20px
    margin-right 20px
</style>
