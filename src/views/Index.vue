<template>
  <container>
    <aside>
      <SideMenu />
    </aside>
    <container>
      <header></header>
      <main>
        <router-view></router-view>
      </main>
      <footer></footer>
    </container>
  </container>
</template>

<script setup>
import { reactive } from 'vue'
import SideMenu from '../components/layout/SideMenu.vue'
const source = [
  { Id: 1, Pid: 0, title: '1' },
  { Id: 2, Pid: 0, title: '2' },
  { Id: 3, Pid: 1, title: '1-3' },
  { Id: 4, Pid: 1, title: '1-4' },
  { Id: 5, Pid: 2, title: '2-5' },
  { Id: 6, Pid: 2, title: '2-6' },
  { Id: 7, Pid: 3, title: '1-3-7' },
  { Id: 8, Pid: 3, title: '1-3-8' },
  { Id: 9, Pid: 7, title: '1-3-7-9' },
  { Id: 10, Pid: 8, title: '1-3-8-10' }
]

const state = reactive({
  source
})
const Totree = (data, root = 0) => {
  let arr = []
  data.forEach((item) => {
    if (item.Pid == root) {
      arr.push(item)
      const children = Totree(data, item.Id)
      if (children.length) {
        item.children = children
      }
    }
  })
  return arr
}
console.log(Totree(source))

const Totree1 = (data) => {
  let arr = []
  const map = {}
  data.forEach((item) => {
    let newItem = (map[item.Id] = {
      ...item,
      children: []
    })
    if (map[item.Pid]) {
      map[item.Pid].children.push(newItem)
    } else {
      arr.push(newItem)
    }
  })
  return arr
}
console.log(Totree1(source))

const Totree2 = (data, root = 0) => {
  const result = []
  getChildren(data, result, root)
  return result
}
const getChildren = (data, result, pid) => {
  data.forEach((item) => {
    if (item.Pid == pid) {
      const newItem = { ...item, children: [] }
      result.push(newItem)
      getChildren(data, newItem.children, item.Id)
    }
  })
}

console.log(Totree2(source))

const Totree3 = () => {
  data = source.map((i) => {
    i.children = []
    return i
  })
}
</script>

<style lang="stylus" scoped>
container
  display flex
  aside
    width 240px
    height 100vh
    box-sizing border-box
    box-shadow inset 0 2px 8px 0px rgba(255, 0, 0, .4)
  container
    display flex
    flex-direction column
    width calc(100vw - 240px)
    header
      height 60px
      box-shadow inset 0 2px 8px 0px rgba(0, 0, 0, .4)
      padding 0 20px
      box-sizing border-box
    main
      padding 20px
      box-sizing border-box
      height calc(100vh - 100px)
      box-shadow inset 0 2px 8px 0px rgba(0, 255, 0, .4)
    footer
      box-sizing border-box
      height 40px
      box-shadow inset 0 2px 8px 0px rgba(0, 0, 255, .4)
</style>
