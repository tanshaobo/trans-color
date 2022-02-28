<template>
  <el-container>
    <el-aside>
      <Row type="between" :label="dataHeader" :values="currentOptions" />
    </el-aside>
    <el-main></el-main>
  </el-container>
</template>
<script setup>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { data, dictionary } from '@/config/algorithm'
import Row from '@/components/layout/Row/index.vue'
import deleteObjectKeys from '@/utils/deleteObjectKeys'

const route = useRoute()
const dataHeader = deleteObjectKeys(dictionary)
const {
  params: { id }
} = route

const state = reactive({
  currentOptions: {}
})
const Init = () => {
  state.currentOptions = data.find((item) => item.id == id)
}
Init()
const { currentOptions } = toRefs(state)
</script>
<style lang="stylus" scoped>
.el-container
  width 100%
  .el-aside
    margin-right 10px
</style>
