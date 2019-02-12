import Vue from 'vue';
import mm_vue from './mm_vue.js';

// 引用插件，并传入参数
Vue.use(mm_vue, { host: "http://localhost:3000" });