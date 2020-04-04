<template>
    <div class="register">
            <div class="wrapper">
               <div class="container">
                   <div class="content">
               <div class="header">
                   <img src="/imgs/logo-mi.png" alt=""></div> 
               <div class="order">
                  <p class="ph3">注册小米账号</p>
               </div>
               <div class="address">
                   <input type="text" placeholder="请输入账号" v-model="username">
                 
                   <div class="text">成功注册账号后，账号名字将不能修改</div>
               </div>
               <div class="phone">
                 
                   <input type="text" placeholder="请输入密码" v-model="password">
               </div>
               <div class="email">
                   <input type="text" placeholder="请输入您地的邮箱" v-model="email">
               </div>
               <div class="btn btn-huge" @click="register">立即注册</div>
               <div class="foot">
                   <span>已阅读并同意:<a href="javascript:;">用户协议</a>和<a href="javascript:;">隐私政策</a></span>
               </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'register',
    data(){
        return{
            username:'',
            password:'',
            email:''
        }
    },
  
    methods:{
            register(){
             this.test();
            this.axios.post('/user/register',{
                username:this.username,
                password:this.password,
                email:this.email
            }).then(()=>{
             this.$message.success('注册成功,3s后请重新登录');
            setTimeout(()=>{
                this.goLogin();
            },3000)
            })
        },
        goLogin(){
            if(status==0){
                this.$router.push('/login')    
            }
        },
        test(){
          
            if(!this.username){
                this.$message.warning('用户名不能为空');
            } else if(!this.password || /\d{6}/.test(this.password)){
                 this.$message.warning('请输入至少6位密码');
            } else if(!this.eamil){
                this.$message.warning('邮箱格式不正确');
            }
        }
    }
}
</script>
<style lang="scss">
 @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/base.scss';
.register{
       color: #666;
    margin: 0px;
    padding: 0px;
    .wrapper{
         position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #ffffff;;
	z-index:1000;
    .container{
    width:600px;
	margin:120px auto;

    .content{
    background: #fff;
    border: 1px solid #aaa;
    border-radius: 5px;
    box-shadow: 0 0 5px #aaa;
    padding: 16px 43px;
    text-align: center;
    color: #757575;
    input{
         border: 1px solid #aaa;
                        box-sizing: border-box;
                        width: 300px;
                        height: 40px;
                        padding-left: 14px;
    }
    .header{
        img{
            width: 50px;
            height: 50px;
        }
    }
    .order{
        .ph3{
            font-size: 24px;
            line-height: 24px;
            padding-top: 30px;
            margin-bottom: 20px;
        }
    }
    .address{
        box-sizing: border-box;
       
        
        .text{
            font-size: 12px;
            line-height: 12px;
            padding-top: 10px ;
            padding-bottom: 15px ;
        }
    }
      .phone{
          margin-bottom: 30px;
            .ph{
                 font-size: 15px;
            line-height: 15px;
            padding: 14px 0;
            }
          
           
        }
        .email{
           
        }
        .btn{
            height:45px ;
            margin-bottom: 20px;
            margin-top: 20px;
        }
        .foot{
            span{
                font-size: 13px;
                line-height:12px;
            }
            a{
                font-weight: bold;
                color: #666;
            }
        }
    }
    }
    }
}
</style>