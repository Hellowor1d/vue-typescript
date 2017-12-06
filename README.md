# vue-typescript

> A Vue.js + TypeScript project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 初始化阶段
```
vue init webpack vue-typescript
sudo  yarn (chromedriver: Command failed.)
```
有一个安装错误，不影响项目启动，后续再深入解决

### 开始打造 Typescript 所需环境
如果需要权限，添加 sudo 再执行以下命令
1. 添加 vue-class-component  vue-property-decorator
```
yarn add vue-class-component vue-property-decorator
```
2. 添加 ts-loader typescript tslint tslint-loader 等 tyepescript 解析工具
```
yarn add ts-loader typescript tslint tslint-loader tslint-config-airbnb-base -D
```
