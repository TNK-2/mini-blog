<template lang="pug">
div
  form.article-form(@submit.prevent)
    input.input.-title(
      v-model="title"
      type="text"
      placeholder="title"
    )
    textarea.input.-body(v-model="body")
    button.button(@click="handleCancel") Cancel
    button.button(@click="handleSubmit") Submit
</template>
 
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
 
@Component
export default class PostPage extends Vue {
  public title = '';
  public body = '';
 
  public async handleSubmit() {
    if (!this.title || !this.body) return;
 
    const { title, body } = this;
 
    try {
      await this.$store.dispatch('article/postArticle', {
        title,
        body,
        timestamp: new Date(),
      });
    } catch (err) {
      this.$nuxt.error({
        message: `記事投稿時にエラーが発生しました: ${err.message}`,
        path: this.$route.path,
      });
 
      return;
    }
 
    this.title = '';
    this.body = '';
 
    this.$router.push('/');
  }
 
  public handleCancel() {
    this.$router.push('/');
  }
}
</script>
 
<style lang="scss" scoped>
.article-form {
  padding: 80px;
  text-align: center;
 
  & > .input {
    display: block;
    width: 640px;
    padding: 10px;
    margin: 0 auto 20px;
    font-size: 16px;
    border: 1px solid grey;
    border-radius: 5px;
    outline: none;
  }
 
  & > .input.-body {
    height: 200px;
    resize: none;
  }
 
  & > .button {
    width: 240px;
    height: 48px;
    margin: 0 20px;
    font-size: 18px;
    box-shadow: 1px 1px 5px lightgrey;
    border-radius: 24px;
    appearance: none;
    outline: none;
  }
 
  & > .button:active {
    box-shadow: none;
  }
}
</style>