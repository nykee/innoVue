<template>
  <div class="loginBody">

    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline class="signin">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </Form>

  </div>

</template>

<script>
  import axios from 'axios';
  let sha1 = require("sha1");
    export default {
        data() {
            return {
              formInline: {
                user: '',
                password: ''
              },
              ruleInline: {
                user: [
                  { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                ],
                password: [
                  { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                  { type: 'string', min: 4, message: 'The password length cannot be less than 4 bits', trigger: 'blur' }
                ]
              }
            }
        },
        methods: {
          handleSubmit(name) {
            this.$refs[name].validate((valid) => {
              if (!valid) {
                this.$Message.error('输入有误!');
              }
            });
            let self= this;
            let pwd = sha1(self.formInline.password);
            axios.get("/user/checkLogin",{params:{username:self.formInline.user,password:pwd}})
              .then((data)=>{
                // console.log(data);
                if(data.data.code === 100){
                  let avatar = data.data.extendInfo.avatar;
                  sessionStorage.setItem('username',self.formInline.user);
                  sessionStorage.setItem('avatar',avatar);
                  sessionStorage.setItem('isLogin',"true");
                  this.$emit("userLogin");
                  this.$router.push("/");



                }
                else{
                  console.log("login fail");
                }
              })
              .catch((err)=>{
                console.log(err);
                this.$Message.error('登录错误!');
              })
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
