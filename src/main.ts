// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index';
import i18n from './locale/i18n'

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App },
});
