<template>
  <div id="app" >
    <!--导航条-->
    <Navbar></Navbar>
    <!--路由显示-->
    <router-view></router-view>
    <!--页脚-->
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "./components/Footer.vue";
  import Navbar from "./components/Navbar.vue";
export default {
  data(){
    return {

    }
  },
  methods:{

  },
  mounted:function () {
    /*this.chkIsLoginPage();*/
  },
  watch:{
    /*'$route':'chkIsLoginPage'*/
  },
  components:{
    Footer,Navbar
  }





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
.loginMenu{
  margin-right:20px;
  line-height: 60px;
  height: 55px;
  font-size: 14px;
  color:#BFCBD9;
  width: 50px;
  text-align: center;

}

.loginMenu a{
  color:#BFCBD9;
}
.loginMenu:hover{
  border-bottom:5px solid #20a0ff;
}
.fl{
  float: left;}
.fr{
  float: right;}
.clearfix{*zoom:1}
.clearfix:after{display:block;visibility:hidden;clear:both;height:0;content:'.';font-size:0}

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

.navBar,.menu{
  /*background: #79cace;*/
  background: #324157;
}
.pic{
  margin-right:30px;
}


</style>
