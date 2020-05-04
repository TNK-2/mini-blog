<template lang="pug">
  h1 Hello world.
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

// 環境変数の参照サンプル
console.log('process.env.envName:', process.env.envName);
console.log('process.env.apiEndpointUrl:', process.env.apiEndpointUrl);

@Component
export default class IndexPage extends Vue {}
</script>

<style lang="scss" scoped></style>
