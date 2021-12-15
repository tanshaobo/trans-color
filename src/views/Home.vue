<template>
  <header>颜色转化</header>
  <main>
    <SixtoRGB />
  </main>
</template>

<script setup>
import SixtoRGB from '@/components/0XtoRGB.vue'
</script>
<style lang="stylus" scoped>
header
  line-height 60px
  box-shadow 0 2px 8px 0px rgba(0,0,0, .4)
  padding 0 20px
main
  padding 20px
  box-sizing border-box
  height calc(100vh - 60px)
</style>
