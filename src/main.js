// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import './assets/js/fontSize.js'
import './assets/js/jquery.min.js'
import './assets/css/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

//wevue组件
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
Vue.use(WeVue)
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.prototype.$host='https://qmsp.juhuiyanfa.com';

// 引入全局域名
import domain from './assets/js/domain.js';
global.domain = domain.testUrl;

//qs 用来解决vue中post请求以 a=a&b=b 的格式（详情）
 import qs from 'qs'   
 Vue.prototype.$qs = qs;

 //cookie
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);

// 创建基本的axios配置
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;multipart/form-data;charset=UTF-8';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})
