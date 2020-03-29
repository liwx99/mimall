import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'  //挂载到实例对象上就可以用this访问
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import App from './App.vue'
//import env from './env'

//mock 开关
const mock=false;
if(mock){
  require('./mock/api');
}
//根据前端跨域方式做调整
axios.defaults.baseURL='/api';
//axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;

//根据环境变量不同获取不同的请求地址
//axios.defaults.baseURL=env.baseURL;
//拦截代码 接口错误拦截
//interceptors拦截器
//对返回值错误的进行处理拦截
//接口规范{status=0;data:[];msg:报错提示}
axios.interceptors.response.use(function(response){
   let res=response.data;//取到接口的值
   let path=location.hash;
   if(res.status==0){
     return res.data;
   }else if(res.status==10){
     if(path!='#/index'){
     window.location.href='/#/login';
     }
     return Promise.reject(res);
   }else{
     alert(res.msg);
     return Promise.reject(res);
   }
});

Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
