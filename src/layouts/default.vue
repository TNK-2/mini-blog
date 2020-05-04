<template lang="pug">
div
  //- ヘッダ部分
  .header-area
    .title My Anonymous Blog
  //- 実際のページの内容はここに入る
  nuxt.content-area
  //- フッタ部分
  .footer-area
    .copyright © Me
</template>
 
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
 
@Component
export default class DefaultLayout extends Vue {}
</script>
 
<style lang="scss" scoped>
.header-area {
  height: 80px;
  padding: 0 20px;
  background-color: yellow;
  box-shadow: 0 5px 10px 3px lightgrey;
 
  & > .title {
    display: inline-block;
    font-size: 28px;
    font-weight: bold;
    line-height: 80px;
    vertical-align: top;
  }
}
 
.content-area {
  min-height: calc(100vh - 160px);
  padding: 20px;
}
 
.footer-area {
  height: 80px;
  text-align: center;
  background-color: black;
 
  & > .copyright {
    padding-top: 60px;
    font-size: 12px;
    color: white;
  }
}
</style>