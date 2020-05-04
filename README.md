# typescript-nuxtjs-boilerplate

## Requirements

* Node.js 12.x
* Yarn v1.x

### VSCodeで入れて欲しいプラグイン
VSCodeで開発する場合は以下のプラグインを入れておくことをオススメします。  

+ [MarkDown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
+ [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
+ [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
+ [editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
+ [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
+ [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)

## Development Server

開発サーバーを起動するには、次のコマンドを実行します。

```shell script
$ yarn dev
```

http://localhost:4000 もしくは ローカルIPの4000番ポート で開発サーバーが起動します。

起動ポートは次のように指定することで変更できます。

```shell script
$ NUXT_PORT=4001 yarn dev
```

## Build

Nuxtアプリをビルドします。
そして、ビルドされたNuxtアプリを起動します。

```shell script
$ yarn build
$ yarn start
```

## 本番向けビルド

Dockerコンテナを作り、その中でNuxtアプリをビルド・起動します。

```shell script
$ docker build .
```

ローカルで `docker-compose` してDockerの挙動を試す場合は以下コマンドを実行してください。

```shell script
$ yarn docker-compose
```

http://localhost:4000/ でコンテナ内で起動されたNuxtサーバーにアクセスできます。

## 環境変数

### `$ yarn dev` 時の環境変数の流れ

`nuxt.config.ts` → `.vue`で`process.env`参照

### `$ yarn docker-compose` 時の環境変数の流れ

`docker-compose.env` →️ `nuxt.config.ts` → `.vue`で`process.env`参照

※ こちらは本番では使われません。ローカルでの確認用です。

### 本番環境 `ECS` での環境変数の流れ

`ECSで設定された環境変数` →️ `nuxt.config.ts` → `.vue`で`process.env`参照



## npm-scripts

|Script|Summary|
|:---:|:---|
|`dev`|Nuxtの開発サーバーを起動します|
|`build`|Nuxtアプリをビルドします|
|`start`|ビルドされたNuxtアプリを起動します|
|`docker-compose`|docker-composeします。Dockerの挙動を確認する用です|
|`lintjs`|ESLintチェックを実行します|
|`lintjs:fix`|ESLintのチェック＋自動修正を実行します|
|`lintcss`|stylelintチェックを実行します|
|`lintcss:fix`|stylelintのチェック＋自動修正を実行します|
