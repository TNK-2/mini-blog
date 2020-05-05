import { Configuration } from '@nuxt/types';

/* eslint-disable @typescript-eslint/no-unused-vars */

// 環境変数に初期値を割り当てる
const {
  // ビルド時に使用する環境変数
  BUILD_ENV = 'local',
  NUXT_PORT = '4000',
  NUXT_HOST = '0.0.0.0',
  VUE_DEVTOOLS = 'false',

  // Nuxtアプリに渡す環境変数
  // 本番では、AWS ECS → process.env に値が渡ってきて上書きされる
  // デフォルト値は開発用
  envName = 'local',
  //apiEndpointUrl = 'https://localhost:5555/api', // mock server
  apiEndpointUrl = 'https://crudcrud.com/api/dd764ea40236417d8a30395c18e8a6b8' // mock server
} = process.env;

const config: Configuration = {
  // Universalモード（SSR）で実行
  mode: 'universal',
  // ソースディレクトリ
  srcDir: 'src',
  // ビルド時にのみ使用するモジュール
  buildModules: ['@nuxt/typescript-build'],
  css: ['reset.css'],
  // headの設定
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
  },
  // Vue.configの拡張
  vue: {
    config: {
      productionTip: false,
      devtools: VUE_DEVTOOLS === 'true',
    },
  },
  // 環境変数
  env: {
    // process.env から分割代入で取得したもの
    envName,
    apiEndpointUrl,
  },
  // 開発サーバー
  server: {
    port: NUXT_PORT,
    host: NUXT_HOST,
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: apiEndpointUrl,
  },
};

module.exports = config;
