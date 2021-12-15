<!--
 * @Author: tanshaobo
 * @Date: 2021-12-15 16:00:13
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-15 16:36:39
 * @Description: file content
 * @FilePath: \nodeTestc:\Users\MFHJ-DZ-001-079\myproject\github\trans-color\src\components\0XtoRGB.vue
-->

<template>
  <section>
    <header>十六进制转rgb</header>
    输入
    <input type="text" v-model="entry" />
    <button @click="trans">转化</button>
    <p>{{ result }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const entry = ref(null)
const result = ref(null)
const trans = () => {
  console.log(entry.value)
}
</script>

<style lang="stylus" scoped></style>
