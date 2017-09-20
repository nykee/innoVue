<template>
  <div class="loginBody">

      <el-form ref="form"  class="signin" label-width="80px">
        <el-form-item label="用户名">
          <el-input  placeholder="请输入用户名" v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input  placeholder="请输入密码" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
        </el-form-item>
      </el-form>

  </div>

</template>

<script>
  import axios from 'axios';
    export default {
        data() {
            return {
              username:"",
              password:""
            }
        },
        methods: {
          onSubmit() {
            console.log('submit!');
            console.log(this.password);
            console.log(this.username);
            let username = this.username;
            let password = this.password;

            /*ajax请求后端登录验证*/
            axios.post('/user/checkLogin',{username:username,password:password})
              .then(function (res) {
                console.log(res);
                if(res.code===200){
                  //请求成功跳转至默认页
                  this.$router.push({path: '/'});
                }
                else if(res.code===100){
                 //请求失败
                 console.log("err");
                }
              }).catch(function (err) {
                console.log(err);
            });


          }
        },
        created: function () {

        },
        components: {}
    }
</script>
<style >
  .signin {
    width: 25%;
    margin: 80px auto 0;
    background-color: rgba(56, 49, 49, 0.13);
    padding: 40px;
    border: 2px ridge rgba(238, 238, 238, 0.13);
    border-radius: 5px;
    -moz-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    -webkit-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    border-bottom: none;
  }
  /*.loginBody{
    background: url('../../static/images/Index_bg2.jpg') no-repeat;

    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 900px;
  }*/
  /*html{
    background: url('../../static/images/Index_bg2.jpg') no-repeat;

    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }*/
</style>
