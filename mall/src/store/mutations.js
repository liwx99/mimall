//商城 Vuex-mutations
    export default{
        saveUserName(state,username){
          state.username=username;
        },
        saveCartCount(state,count){
            state.cartCount=count;
        }
    }