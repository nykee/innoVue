<template>
  <div>
    <Dropdown>
      <a href="javascript:void(0)">
        <span>{{ user}}</span>
        <Avatar :src="avScr" />
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>个人设置</DropdownItem>
        <DropdownItem>管理中心</DropdownItem>
        <DropdownItem><span @click="logOut">退出登录</span></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              user:sessionStorage.getItem("username"),
              avScr:sessionStorage.getItem("avatar"),
            }
        },
        methods: {
          logOut(){
            console.log("trigger logout");
            sessionStorage.setItem("isLogin","false");
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("avatar");
            this.$emit("userLogOut","logout")

          }
        },
        created: function () {

        },
        mounted() {

        },

        components: {}
    }
</script>
<style>

</style>
