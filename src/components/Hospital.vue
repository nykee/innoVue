<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/Mcenter' }">多中心</el-breadcrumb-item>
      <el-breadcrumb-item>医院名称</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row>
      <el-col :span="2"><img src="" alt=""></el-col>
      <el-col :span="20"><h2>医院名称</h2></el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        data() {
          return{

          }
        },
        methods: {},
        created: function () {

        },
        components: {}
    }
</script>
<style>

</style>
