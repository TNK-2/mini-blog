<template lang="pug">
.article-list
  .article(
    v-for="article in articles"
    :key="article._id"
  )
    .title {{ article.title }}
    .body  {{ article.body }}
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { IArticle } from '@/interfaces/api/Article';
 
@Component
export default class ArticleList extends Vue {
  @Prop({ type: Array, required: true })
  public articles!: IArticle[];
}
</script>
 
<style lang="scss" scoped>
.article-list {
  margin-top: 10px;
 
  & > .article {
    padding: 20px 10px;
    margin: 10px 0;
    background-color: whitesmoke;
    border-radius: 5px;
  }
 
  & > .article > .title {
    margin-bottom: 20px;
    font-size: 14px;
  }
 
  & > .article > .body {
    font-size: 18px;
  }
}
</style>