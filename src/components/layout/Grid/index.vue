<template>
  <section class="container" ref="box">
    <el-row v-for="(item, index) in showList" :key="index">
      <div class="column-item" v-for="(i, j) in item" :key="j">
        <slot :item="i">
          <el-card v-if="!i.remain" @click="ClickHandle(i)">
            {{ i.label }}
          </el-card>
        </slot>
      </div>
    </el-row>
  </section>
</template>
<script setup>
import { onMounted, reactive, toRefs, ref, watch } from 'vue'
import handleSourceData from './Hooks/handleSourceData'
const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['click'])
const state = reactive({
  column: 0,
  dataList: [],
  showList: []
})

watch(
  props.dataList,
  (newVal) => {
    state.dataList = JSON.parse(JSON.stringify(newVal))
  },
  { immediate: true }
)
const box = ref()
const computedLayout = () => {
  state.column = Math.floor(box.value.clientWidth / 260)
  state.showList = handleSourceData(state.dataList, state.column, { remain: true })
}

const ClickHandle = (item) => {
  emit('click', item)
}
onMounted(() => {
  computedLayout()
})
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
