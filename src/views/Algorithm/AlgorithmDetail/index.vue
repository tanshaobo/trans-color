<template>
  <el-container>
    <el-aside> </el-aside>
    <el-main> </el-main>
  </el-container>
  <div>算法详情页</div>
  {{ currentOptions }}
</template>
<script setup>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { data } from '@/config/algorithm'

const route = useRoute()

const {
  params: { id }
} = route

const state = reactive({
  currentOptions: {}
})
const Init = () => {
  console.log(id)
  console.log(data)
  state.currentOptions = data.find((item) => item.id == id)
}
Init()
const { currentOptions } = toRefs(state)
</script>
<style lang="stylus" scoped></style>
