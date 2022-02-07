<template></template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
// 用来获取 路由信息
const route = useRoute()
// 用来跳转 路由
const router = useRouter()

console.log(route)

console.log(router)
</script>
<style lang="stylus" scoped></style>
