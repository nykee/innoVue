<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><img class="img-responsive center-block" src="././static/images/inno1.png" style="height: 50px" alt=""></a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav" id="nav-left">
          <li  ><a href="javascript:void 0"   class="isActive">首页 <span class="sr-only">(current)</span></a></li>
          <li><a href="./static/views/mCenter.html" style="color:#000">多中心展示</a></li>
          <li><a href="./static/views/controlCenter.html" style="color:#000">管理中心</a></li>


        </ul>

        <ul class="nav navbar-nav navbar-right" id="nav-right">
          <li><a  class="uControl" href="./static/views/loginAndReg.html" style="color:#000"><span class="glyphicon glyphicon-log-in"></span>登录</a></li>
          <li><a class="uControl" href="./static/views/loginAndReg.html?action=reg" id="regBtn" style="color:#000"><span class="glyphicon glyphicon-user"></span>注册</a></li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        data() {

        },
        methods: {},
        created: function () {

        },
        components: {}
    }
</script>
<style>

</style>
