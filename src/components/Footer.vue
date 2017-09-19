<template>
  <footer v-show="!isLoginPage">
    <el-row class="row-bg bottomNav"  type="flex"  justify="space-around">
      <el-col :span="6" class="fastEntrance ">
        <ul>
          <li class="bottomNav_title"><span>快速入口</span></li>
          <li> <router-link to="/Mcenter">多中心</router-link></li>
          <li> <router-link to="/Manage">管理中心</router-link></li>
        </ul>
      </el-col>
      <el-col :span="6" class="serviceSupport">
        <ul>
          <li class="bottomNav_title"><span>云平台咨询</span></li>
          <li><a href="#">常见问题FAQ</a></li>
        </ul>
      </el-col>
      <el-col :span="6" class="contactUs">
        <ul >
          <li class="bottomNav_title">
            <span class="ctUSLink">联系我们</span>
          </li>
          <li>
            <a href="">地址：上海市漕河泾开发区松江高科技园<br>莘砖公路518号11栋1004室</a>
          </li>
          <li class="li_2">电话：021-37027535 37027537<br/>传真：021-67690739<br/><a href="mailto:info@innomotion.biz">E-mail：info@innomotion.biz</a><br /><a
            href="http://www.innomotion.biz">http://www.innomotion.biz</a></li>
        </ul>
      </el-col>

    </el-row>
    <el-row class="row LogoAndCR">

      <el-col :span="12" class="copyright ">
        <ul>
          <li>上海逸动医学科技有限公司</li>
          <li>Copyright &copy; 2012-2017 Shanghai Innomotion Medical Inc. All Rights Reserved</li>
        </ul>
      </el-col>
      <el-col :span="6" :offset="6" class="bottomLogo">
        <img src="../../static/images/inno1.png" alt="逸动医疗">
      </el-col>
    </el-row>


  </footer>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        components: {}
    }
</script>
<style>

</style>
