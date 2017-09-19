<template>
  <div class="navBar" v-show="!isLoginPage">
    <div class="clearfix">
      <h2 class="fl pic"><router-link to="/"><img src="../../static/images/inno1.png" alt=""></router-link></h2>
      <el-menu  theme="dark" :default-active="activeIndex" class="fl menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to="/">       首页   </router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/Mcenter">多中心 </router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/Manage">管理中心</router-link></el-menu-item>
        <!--<el-menu-item index="5"><router-link to="/Register">注册  </router-link></el-menu-item>-->

      </el-menu>
      <div class="fr loginMenu"><router-link to="/Login">   登录  </router-link></div>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
              activeIndex: '1',
              isLoginPage:false
            }
        },
        methods: {
          handleSelect(key, keyPath) {
//      console.log(key, keyPath);
          },
          chkIsLoginPage(){
            let path = this.$route.path;
            if(String(path)==="/Login"){
              this.isLoginPage =true;
            }
          }
        },
        created: function () {

        },
        components: {}
    }
</script>
<style>

</style>
