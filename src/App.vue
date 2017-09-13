<template>
  <div id="app">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/">       首页   </router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/Mcenter">多中心 </router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/Manage">管理中心</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/Login">   登录  </router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/Register">注册  </router-link></el-menu-item>

    </el-menu>

    <router-view></router-view>


    <footer >
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
          <img src="../static/images/inno1.png" alt="逸动医疗">
        </el-col>
      </el-row>


    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeIndex: '1'
    }
  },
  name: 'app'
}
</script>

<style>

body, button, select, textarea, input, label, option, fieldset, legend{font-family: 微软雅黑E\8F6F\96C5\9ED1,Tahoma,Verdana;font-size: 12px;line-height: 18px;color: #444;}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, button, p, blockquote, th, td{margin: 0;padding: 0;}
textarea{resize: none}

a,img{border:0;}
img{vertical-align: middle}
a{color: #000 ;text-decoration: none !important;}
a:hover{
  text-decoration: none !important;
}
li{list-style-type:none;}
.navbar-default .navbar-nav>li>a:hover{
  color:#fff !important;

}


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
