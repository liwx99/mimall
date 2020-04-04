<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage'
//import axios from 'axios'
//import jsonp from 'jsonp'

export default {
  name: 'app',
  components:{},
  data(){
    return{   
     
  }
  },
  mounted(){
    if(this.$cookie.get('userId')){//如果用户有登录了，才去调用购物车数量，名字
    this.getUser();
    this.getCartCount();
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        //to do 保存到Vuex里面
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        //to do 保存到Vuex里面
         this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/config.scss';
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';


</style>
