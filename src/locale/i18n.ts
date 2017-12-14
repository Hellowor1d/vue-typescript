import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Lang } from '../common';
import zh from './lang/zh-CN'
import en from './lang/en'
Vue.use(VueI18n);

let locale = localStorage.getItem('lang');

if (locale === undefined) {
  locale = Lang.locale;
  localStorage.setItem('lang', locale);
}
const messages = {
  zh,
  en
}
export default new VueI18n({
  locale: locale || 'zh', // set locale
  messages, // set locale messages
})
