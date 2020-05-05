<template lang="pug">
.index-page
  .header
    h1.title 投稿記事
  .content
    nuxt-link.post(to="/post") 投稿する
    ArticleList(:articles="$store.state.article.articles")
</template>
 
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ArticleList from '@/components/pages/index/articleList.vue';
 
@Component({
  components: {
    ArticleList,
  },
})
export default class IndexPage extends Vue {
  async mounted() {
    try {
      await this.$store.dispatch('article/fetchArticles');
    } catch (err) {
      this.$nuxt.error({
        message: `記事一覧取得時にエラーが発生しました: ${err.message}`,
        path: this.$route.path,
      });
    }
  }
}
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
 
  & > .content > .post {
    color: black;
    text-decoration: none;
  }
 
  & > .content > .post:hover {
    opacity: 0.5;
  }
}
</style>