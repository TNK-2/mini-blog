<template lang="pug">
.index-page
  .header
    h1.title 投稿記事
  .content
    .text 今はまだなにもない
</template>
 
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
 
@Component
export default class IndexPage extends Vue {}
</script>
 
<style lang="scss" scoped>
.index-page {
  & > .header {
    margin-bottom: 30px;
  }
 
  & > .header > .title {
    font-size: 24px;
    font-weight: bold;
  }
 
  & > .content > .text {
    font-size: 16px;
  }
}
</style>