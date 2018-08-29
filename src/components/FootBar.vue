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
            <a href="">地址：上海市XXXXXXX园<br>XXX路XX号</a>
          </li>
          <li class="li_2">电话：021-XXXXX XXXXX<br/>传真：021-XXXXXX<br/><a href="mailto:info@XXXXXX.biz">E-mail：info@XXXXXX.biz</a><br /><a
            href="#">http://www.ABCDEF.biz</a></li>
        </ul>
      </el-col>

    </el-row>
    <el-row class="row LogoAndCR">

      <el-col :span="12" class="copyright ">
        <ul>
          <li>上海XXXX科技有限公司</li>
          <li>Copyright &copy; 2012-{{currentYear}} Shanghai XXXXX TECH Inc. All Rights Reserved</li>
        </ul>
      </el-col>
      <el-col :span="6" :offset="6" class="bottomLogo">
        <img src="../../static/images/nykeeLogo.png" alt="XX医疗">
      </el-col>
    </el-row>


  </footer>
</template>

<script>
    export default {
        data:()=>{
          return {
            isLoginPage:false,
            currentYear:new Date().getFullYear()
          }
        },
        methods: {},
        created: function () {

        },
        components: {}
    }
</script>
<style>
  /*页面尾部通用样式*/
  footer{
    width:100%;
    background:#027bbb;
    padding-bottom:30px;
    float: left;
    color:#A0DEFF;
  }
  .LogoAndCR{
    border-top:1px dotted #4B5054;
    padding-top:10px;
  }
  .bottomNav_title{
    font-size: 16px;
    color: #7DDEFF;
  }
  .bottomNav{
    padding-top:10px;
  }
  .bottomNav li{
    margin-top:5px;
  }
  .bottomNav li a:hover{
    color:#fff !important;
  }
  .bottomNav li a{color:#A0DEFF !important}


</style>
