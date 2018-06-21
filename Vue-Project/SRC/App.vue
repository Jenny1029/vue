<template>
  <div id="app">
    <div class="menu-container">
        <span v-for="item in menuList" :class="{'active': item.isActive}" :key="item.text" @click="activeChange(item)">{{item.text}}</span>
    </div>
    <div class="isLogin">登陆了么？
        <tt-button @click="handleLogin('loginIn')">登陆</tt-button>
        <tt-button @click="handleLogin('loginOut')">退出</tt-button>
        <span style="color: red;">{{this.$store.state.isLogin}}</span></div>
    <router-view></router-view>
  </div>
</template>

<script>
    import ttButton from '@/view/common/button'
export default {
    name: 'app',
    data(){
        return {
            isLogin: false,
            menuList: [
                { text: '商品', isActive: true},
                { text: '评论', isActive: false},
                { text: '商家', isActive: false}
            ]
        }
    },
    methods: {
        activeChange(item){
            this.menuList.map( sitem => {
                sitem.isActive = false;
            })
            item.isActive = true;
        },
        handleLogin(type){
            type === 'loginIn' ? this.$store.dispatch('setLoginState', true) : this.$store.dispatch('setLoginState', false);
        }
    },
    mounted(){
        this.isLogin = this.$store.state.isLogin;
    },
    beforeUpdate(){
         this.isLogin = this.$store.state.isLogin;
    },
    components: {
        ttButton
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .menu-container{
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
  .menu-container span{
      display: inline-block;
      padding: 15px 80px;
      font-size: 18px;
      cursor: pointer;
      box-sizing: border-box;
  }
  .menu-container span:hover{
      opacity: 0.6;
  }
  .isLogin{
      position: fixed;
      right: 50px;
      top: 30px;
  }
</style>
