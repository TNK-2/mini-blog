<template lang="pug">
.error-page
  h1.title {{error.message}}
  .info 発生ページ: {{error.path}}
  nuxt-link.link(to="/") トップページへ戻る
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
 
@Component
export default class ErrorPage extends Vue {
  @Prop({ type: Object, required: true })
  public error: any;
}
</script>
 
<style lang="scss" scoped>
.error-page {
  & > .title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }
 
  & > .info {
    font-size: 20px;
    margin-bottom: 40px;
  }
 
  & > .link {
    color: black;
    text-decoration: none;
  }
 
  & > .link:hover {
    opacity: 0.5;
  }
}
</style>