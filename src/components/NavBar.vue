<template>
    <Row  class="navBar" v-show="!isLoginPage" type="flex" justify="center" align="middle">
      <i-col span="2">
        <h2 class="fl pic"><router-link to="/"><img src="../../static/images/nykeeLogo.png" alt=""></router-link></h2>
      </i-col>
      <i-col span="20">
        <Menu mode="horizontal" theme="dark" active-name="1" >
        <MenuItem name="1">
          <Icon type="ios-paper" />
          <router-link to="/" class="nav-link">首页</router-link>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-people" />
          <router-link to="/Mcenter" class="nav-link">多中心 </router-link>
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-stats" />
          <router-link to="/Manage" class="nav-link">管理中心</router-link>
        </MenuItem>
        </Menu>
      </i-col>
      <i-col span="2" >
        <router-link  to="/Login" v-if="!isLogin" class="RR-btn"><span class="regNowRow_btn" id="regNowRow_loginbtn" >立刻登录</span></router-link>
        <UserAvatar v-if="isLogin"/>
      </i-col>
    </Row>
</template>

<script>
  import UserAvatar from "../components/UserAvatar"
    export default {
        data() {
            return {
              activeIndex: '1',
              isLoginPage:false,
              isLogin:false
            }
        },
        methods: {
          login(){
            this.$router.push("/Login")
          },
          checkLogin(){
            console.log(sessionStorage.getItem("isLogin"));
            if(sessionStorage.getItem("isLogin") == null){
              this.isLogin = false;
            }else {
              this.isLogin = (sessionStorage.getItem("isLogin") === "true");
            }
            this.$on("userLogin",()=>{
              console.log("receive login event");
              this.isLogin = true
            });

            this.$on("userLogOut",(data)=>{
              console.log(data);
              console.log("receive logout event");
              this.isLogin = false;
            })
          }
        },
      mounted(){
        this.checkLogin()
          // console.log(sessionStorage.getItem("isLogin") == null);

      },
      // beforeRouteUpdate(to,from,next){
      //     console.log("routerBupdate");
      //   if(String(from) ==="/Login"){
      //     this.isLogin = true;
      //   }
      //   next();
      // },
        created: function () {

        },
      beforeRouteUpdate(from,to,next){
        this.checkLogin();
          next();
      },

      watch:{
          isLogin:'checkLogin'
      },
        components: {UserAvatar}
    }
</script>
<style scoped="scoped">
  .navBar{
    background: #515A6E;
  }
  .pic{
    margin-right:30px;
  }
  .nav-link{
    color:#9FA7AE ;
  }
  .nav-link:hover{
    color:#fff;
  }
</style>
