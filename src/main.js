import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import '../src/assets/less/index.less'

import store from '../store'
import router from '../router'
import http from 'axios'
import '../api/mock.js'


Vue.use(ElementUI);
Vue.prototype.$http = http


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});