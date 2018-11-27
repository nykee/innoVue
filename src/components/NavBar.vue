<template>
    <Row  class="navBar" v-show="!isLoginPage">
      <i-col span="2">
        <h2 class="fl pic"><router-link to="/"><img src="" alt=""></router-link></h2>
      </i-col>
      <i-col span="20">  <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="1">
          <Icon type="ios-paper" />
          <router-link to="/">首页</router-link>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-people" />
          <router-link to="/Mcenter">多中心 </router-link>
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-stats" />
          <router-link to="/Manage">管理中心</router-link>
        </MenuItem>
        </Menu>
      </i-col>
      <i-col span="2" ><Button type="primary" @click="login">登录</Button></i-col>
    </Row>
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
          login(){
            this.$router.push("/Login")
          },
        },
        created: function () {

        },
        components: {}
    }
</script>
<style scoped="scoped">
  .navBar{
    background: #515A6E;
  }
  .pic{
    margin-right:30px;
  }
</style>
