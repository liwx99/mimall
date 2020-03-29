<template>
    <div class="register">
        <div class="container">
            <div class="head-logo">
            <img src="/imgs/mi-logo.png" alt="">
            </div>
            <div class="header"><h3>注册小米账号</h3></div>
            <div class="item">
                <p>国家/地区</p>
                <div class="input">
                    <input type="text" placeholder="中国">
                    <select class="form-input">
                        <option value="0"></option>
                        <option value="1">中国</option>
                        <option value="2">俄国</option>
                        <option value="3">法国</option>
                    </select>
                    <p>成功注册帐号后，国家/地区将不能被修改</p>
                </div>
                <div class="input1">
                    <select class="form-num">
                        <option value="0">+86</option>
                        <option value="1">+96</option>
                        <option value="2">+06</option>
                    </select>
                    <input type="text" placeholder="请输入手机号码">
                </div>
                <div class="btn-box">
                    <a href="" class="btn">立即注册</a>
                </div>
            </div>
            <div class="mo">
                已阅读并同意：小米 用户协议和 隐私政策
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
.register{
    .container{
    width: 500px;
    height: 500px;
    background-color: #fff;
    
        .head-logo{
              display: inline-block;
           width: 55px;
           height: 50px;
           background-color: $colorA;
           margin-top: 10px;
        }
    }
}
</style>