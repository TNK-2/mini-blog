<template lang="pug">
.article-detail
  .header
    h1.title {{article.title}}
    .date {{formattedDate}}
  .body {{article.body}}
</template>
 
<script lang="ts">
import { Context } from '@nuxt/types';
import { Component, Vue } from 'nuxt-property-decorator';
import { IArticle } from '@/interfaces/api/Article';
 
@Component
export default class ArticleDetail extends Vue {
  public article!: IArticle;
  
  get formattedDate(): string {
    const { timestamp } = this.article;
    const fullDate = new Date(timestamp);
 
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    const date = fullDate.getDate();
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    const seconds = fullDate.getSeconds();
 
    return `${year}年${month}月${date}日 ${hours}:${minutes}:${seconds}`;
  }
 
  async asyncData({ store, route }: Context) {
    await store.dispatch('article/fetchArticles');
    const article = store.getters['article/getArticle'](route.params.id);
 
    if (!article) throw new Error('存在しない記事です。');
 
    return {
      article,
    };
  }
}
</script>