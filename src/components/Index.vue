<template>
  <div class="main-content ">

    <!--轮播-->
    <!--<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      &lt;!&ndash; Indicators &ndash;&gt;

      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      &lt;!&ndash; Wrapper for slides &ndash;&gt;
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../../static/images/index/silde-banner4.jpg" alt="...">
          <div class="carousel-caption">
            <h3>逸动大数据</h3>
            <p>逸动医学依托北上广及全国各地的多中心建立骨科、关节大数据！</p>
          </div>
        </div>
        <div class="item">

          <img src="../../static/images/index/silde-banner3.jpg" alt="...">
          <div class="carousel-caption">
            <h3>逸动云计算</h3>
            <p>逸动多中心上传的数据通过云计算处理大数据</p>
          </div>
        </div>
        <div class="item">
          <img src="../../static/images/index/silde-banner5.jpg" alt="...">
          <div class="carousel-caption">
            <h3>逸动神经网络</h3>
            <p>建立骨科关节测试模型，数据分析更科学高效！</p>
          </div>
        </div>
      </div>

      &lt;!&ndash; Controls &ndash;&gt;
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>-->
    <el-carousel >
      <el-carousel-item v-for="item in 3" :key="item">
        <h3>{{ item }}</h3>

      </el-carousel-item>
    </el-carousel>
    <div class=" funcZone">
      <!--平台简介-->
      <div id="platformIntro" class="platformIntro row">
        <h3 >逸动云平台--安全、稳定的云平台</h3>
        <p ><router-link to="/Mcenter">依托逸动多中心架设，集云计算、云存储、网络、安全、大数据与神经网络，让骨科诊疗更快速有效</router-link></p>
      </div>
      <!--平台功能-->
      <div id="platformFunction" class="platformFunction">

          <el-row  type="flex" class="row-bg functionName" justify="space-around">

              <el-col :span="6" >
                  <a id="yjs"  @click="calDetailtoggle()">
                    <div class="funcImg" ></div>
                    <div class="funcTitle myActive" >云计算</div>
                  </a>
              </el-col>
              <el-col :span="6" >
                  <a id="ycc" @click="storeDetailtoggle()">
                    <div class="funcImg" ></div>
                    <div class="funcTitle" >云存储</div>
                  </a>
              </el-col>
              <el-col :span="6"  >
                  <a id="sjwl" @click="neuralDetailtoggle()">
                    <div class="funcImg" ></div>
                    <div class="funcTitle" >神经网络</div>
                  </a>
              </el-col>

          </el-row>


        <div class="functionDetail">
          <!--云计算详情-->
          <el-row id="calDetail" v-if="calDetailShow">

              <el-col :span="6">
               <span class="">云计算提供了最可靠、最安全的数据存储中心</span><s>&gt;</s>
              </el-col>
               <el-col :span="6">
                 <span class="">云计算对用户端的设备要求最低</span><s>&gt;</s>
               </el-col>
               <el-col :span="6">
                 <span>增强的计算能力</span><s>&gt;</s>
               </el-col>
               <el-col :span="6">
                 <span>无限的存储容量</span><s>&gt;</s>
               </el-col>

          </el-row>
          <!--云存储详情-->
          <el-row id="storeDetail"  v-if="storeDetailShow">

              <el-col :span="8"><span>存储管理自动化、智能化，所有的存储资源被整合到一起</span><s>&gt;</s></el-col>
              <el-col :span="8"><span>提高存储效率、提高了存储空间的利用率，同时具备负载均衡、故障冗余功能</span><s>&gt;</s></el-col>
              <el-col :span="8"><span>实现规模效应和弹性扩展，降低运营成本，避免资源浪费</span><s>&gt;</s></el-col>

          </el-row>
          <!--神经网络详情-->
          <el-row id="neuralDetail " v-if="neuralDetailShow">

              <el-col :span="8"><span>自学习功能</span><s>&gt;</s></el-col>
              <el-col :span="8"><span>联想存储功能</span><s>&gt;</s></el-col>
              <el-col :span="8"><span>高速寻找优化解的能力</span><s>&gt;</s></el-col>

          </el-row>
        </div>
      </div>
      <!--平台解决方案-->
      <!--<div id="platformSolution" class="platformSolution" >-->
      <!--<div class="row platformSolutionDesc">-->
        <!--<h3>与逸动医疗其他产品联动，给予客户不同的解决方案！</h3>-->
      <!--</div>-->
      <!--<div class="slide-container">-->
        <!--<div class="slide-body">-->
          <!--<ul class="slide-content row">-->
            <!--<li class="    slide-items">-->
              <!--<a href="javascript:void 0">-->
                <!--<img  class="itemBG" src="/static/images/index/slideBG1.jpg" alt="">-->
                <!--<div class="mask">-->
                  <!--<div class="bg"></div>-->
                  <!--<div class="content">-->
                    <!--<div class="item-img-panel">-->
                      <!--<img  class="item-img" src="" alt="">-->
                      <!--<img  class="item-img-hover" src="" alt="">-->
                    <!--</div>-->
                    <!--<p class="line-panel">-->
                      <!--<i class="item-line"></i>-->
                    <!--</p>-->
                    <!--<h3 class="item-title">运动医学解决方案</h3>-->
                    <!--<p class="item-desc">运动医学解决方案描述运动医学解决方案描述运动医学解决方案描述</p>-->
                    <!--<span class="item-link">查看详情</span>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li  class="    slide-items">-->
              <!--<a href="javascript:void 0">-->
                <!--<img class="itemBG" src="/static/images/index/slideBG2.jpg" alt="">-->
                <!--<div class="mask">-->
                  <!--<div class="bg"></div>-->
                  <!--<div class="content">-->
                    <!--<div class="item-img-panel">-->
                      <!--<img  class="item-img" src="" alt="">-->
                      <!--<img  class="item-img-hover" src="" alt="">-->
                    <!--</div>-->
                    <!--<p class="line-panel">-->
                      <!--<i class="item-line"></i>-->
                    <!--</p>-->
                    <!--<h3 class="item-title">骨科影像学解决方案</h3>-->
                    <!--<p class="item-desc">运动医学解决方案描述运动医学解决方案描述运动医学解决方案描述</p>-->
                    <!--<span class="item-link">查看详情</span>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="    slide-items">-->
              <!--<a href="javascript:void 0">-->
                <!--<img class="itemBG" src="/static/images/index/slideBG3.jpg" alt="">-->
                <!--<div class="mask">-->
                  <!--<div class="bg"></div>-->
                  <!--<div class="content">-->
                    <!--<div class="item-img-panel">-->
                      <!--<img  class="item-img" src="" alt="">-->
                      <!--<img  class="item-img-hover" src="" alt="">-->
                    <!--</div>-->
                    <!--<p class="line-panel">-->
                      <!--<i class="item-line"></i>-->
                    <!--</p>-->
                    <!--<h3 class="item-title">数字导航解决方案</h3>-->
                    <!--<p class="item-desc">运动医学解决方案描述运动医学解决方案描述运动医学解决方案描述</p>-->
                    <!--<span class="item-link">查看详情</span>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="    slide-items">-->
              <!--<a href="javascript:void 0">-->
                <!--<img class="itemBG img-responsive" src=" /static/images/index/slideBG4.jpg" alt="">-->
                <!--<div class="mask">-->
                  <!--<div class="bg"></div>-->
                  <!--<div class="content">-->
                    <!--<div class="item-img-panel">-->
                      <!--<img  class="item-img" src="" alt="">-->
                      <!--<img  class="item-img-hover" src="" alt="">-->
                    <!--</div>-->
                    <!--<p class="line-panel">-->
                      <!--<i class="item-line"></i>-->
                    <!--</p>-->
                    <!--<h3 class="item-title">医疗云平台解决方案</h3>-->
                    <!--<p class="item-desc">运动医学解决方案描述运动医学解决方案描述运动医学解决方案描述</p>-->
                    <!--<span class="item-link">查看详情</span>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
      <!--平台目标市场-->
      <div id="market"  class="market">
        <div class="marketDesc">
          <h3 class=" ">精确定位，发散市场，逸动云能为各种类型的市场提供服务</h3>
        </div>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <div>
              <img src="/static/images/index/ky.png" alt=""/>
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>科研评估</span></a>
          </el-col>
          <el-col :span="6">
            <div>
              <img src="/static/images/index/kf.png" alt=""/>
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>关节康复</span></a>
          </el-col>
          <el-col :span="6">
            <div>
              <img src="/static/images/index/mz.png" alt="">
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>门诊辅助</span></a>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <div>
              <img src="/static/images/index/yd.png" alt="">
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>运动训练</span></a>
          </el-col>
          <el-col :span="6">
            <div>
              <img src="/static/images/index/js.png" alt="">
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>军事训练</span></a>
          </el-col>
          <el-col :span="6">
            <div>
              <img src="/static/images/index/tj.png" alt="">
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>体检项目</span></a>
          </el-col>
        </el-row>

      </div>
      <!--分割线-->
      <div class="line"></div>
      <!--逸动多中心显示chart-->
      <div id="map" >
        <el-row justify="center" type="flex">

         <el-col :span="10" >
           <h3 >逸动云分布全国的骨科中心--数据更可靠</h3>
         </el-col>
          <el-col :span="24">
            <div id="chart-container"   style="height:500px"></div>
          </el-col>

        </el-row>
      </div>
      <!--立刻注册按钮及点击查看多中心按钮-->
      <el-row id="regNowRow"  type="flex" justify="center">
          <el-col :span="8">
            <router-link to="/Mcenter"><span class="regNowRow_btn"  id="regNow_2mcenter">查看逸动多中心</span></router-link>
            <router-link to="/Register"><span class="regNowRow_btn" id="regNowRow_regbtn" >免费注册</span></router-link>
            <router-link to="/Login"><span class="regNowRow_btn" id="regNowRow_loginbtn" >立刻登录</span></router-link>
          </el-col>
      </el-row>


    </div>
  </div>
</template>

<script>
    export default {
        data(){

          return {
            calDetailShow:true,
            storeDetailShow:false,
            neuralDetailShow:false,
          }

        },
        methods: {
          calDetailtoggle(){
//            this.calDetailShow=(this.calDetailShow?(!this.calDetailShow):this.calDetailShow);
//            this.storeDetailShow=(this.storeDetailShow?(!this.storeDetailShow):this.storeDetailShow);;
//            this.neuralDetailShow=(this.neuralDetailShow?(!this.neuralDetailShow):this.neuralDetailShow);;


            if(this.calDetailShow){return 0}
            else {
              this.calDetailShow = !this.calDetailShow;
              this.storeDetailShow =false;
              this.neuralDetailShow=false;
            }

          },
          storeDetailtoggle(){
            if(this.storeDetailShow){return 0}
            else {
              this.storeDetailShow= !this.storeDetailShow;
              this.calDetailShow =false;
              this.neuralDetailShow=false;
            }
          },
          neuralDetailtoggle(){
            if(this.neuralDetailShow){return 0}
            else {
              this.neuralDetailShow= !this.neuralDetailShow;
              this.storeDetailShow =false;
              this.calDetailShow=false;
            }
          }


        },
        created: function () {

        },
        components: {}
    }
</script>
<style>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(0) {
    background:url("/static/images/index/silde-banner3.jpg") no-repeat;
  }

  .el-carousel__item:nth-child(1) {
    background:url("/static/images/index/silde-banner4.jpg") no-repeat;
  }
  .el-carousel__item:nth-child(2) {
    background:url("/static/images/index/silde-banner5.jpg") no-repeat;
  }


  .platformIntro p a,#platformFunction a{color:#000}
  .platformIntro p a:hover{color:#027ACE !important; text-decoration: none !important}
  .platformIntro h3,.platformIntro p, .marketDesc h3, .platformSolutionDesc h3{text-align: center}

  .myActive{color:#00C1DE;text-decoration: none}
  .funcTitle{
    padding-left:20px;}
  .functionDetail>div{
    background-color: #F5F5F6;
    padding: 40px;
  }
  .functionDetail>div>ul>li{
    position: relative;
    height: 60px;

  }
  .functionDetail>div>ul>li>span{
    height: 40px;
    margin-top:10px;
    margin-left:10px;
    display: inline-block;

  }

  .functionDetail>div>ul>li>s{
    display: none;
    text-decoration: none;
    position: absolute;
    top: 25%;
    right: 1%;
  }
  .addBG{
    background-color:#fff;
    /*border:1px solid transparent;*/
    box-shadow:0 0 8px 0 rgba(0,0,0,.15);
    /*padding: 1px;*/
  }

  .funcImg{
    width: 80px;
    height: 80px;
    margin-bottom:20px;
  }
  a[id='yjs'] .funcImg{
    background: url("/static/images/index/yjs_80.png") no-repeat;
  }a[id='ycc'] .funcImg{
     background: url("/static/images/index/ycc_80.png") no-repeat;
   }a[id='sjwl'] .funcImg{
      background: url("/static/images/index/sjwl_80.png") no-repeat;
    }
  .platformIntro{
    margin-top:30px;}
  .platformIntro p a:hover{
    color:#00C1DE !important;
  }
  .platformFunction{
    margin-top:40px;
  }
  .platformSolution{
    margin-top:50px;
  }

  #platformFunction ul li a:hover{
    color:#00C1DE !important;text-decoration: none !important;
  }
  .slide-body li{

    height: 368px;
    padding: 0 !important;
  }
  .itemBG{height: 100%;width: 100%}
  .bg{
    background: #161A1D;
    opacity: 0.5;
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
  }
  .mask{
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top:160px;
    bottom: 0;
  }
  .slide-items{
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  .slide-items a{display: block}
  .market{
    margin-top: 50px;
  }
  .item-desc,.item-link{
    opacity: 0;
  }
  .item-title{
    color: #fff;
    font-size: 22px;
    line-height:24px;
    margin: 0;
    padding: 0;
    margin-top:24px;
    font-weight: bold;
  }
  .item-desc{
    font-size: 14px;
    color: #fff;
    text-align: center;
    margin-top:30px;
    padding: 0 32px;
    line-height:24px;
    height: 72px;
  }
  .item-link{
    display: inline-block;
    border: 1px solid #fff;
    width: 120px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    text-decoration: none;
    margin-top:62px;
    color: #fff;
  }

  @keyframes MoveDivUp {
    0%{
      top:160px;

    }
    20%{
      top:148px;
    }
    40%{
      top:136px;
    }
    60%{
      top:124px;
    }
    80%{
      top:112px
    }
    100%{
      top:100px;
    }
  }
  .MoveDivUp{
    -webkit-animation-name: MoveDivUp;
    -webkit-animation-duration: 1s;
  }
  .whiteBG{
    background: #fff !important;
    color:#1AC8E1 !important
  }
  .market img{
    width: 50px;
    height: 50px;
    -webkit-transition:all 1s ease-in-out;-moz-transition:all 1s ease-in-out
  }
  .market>ul>li>div,.market>ul>li>a{
    margin-left:30%;
  }
  .marketTitle{
    margin-top:5%;
    display: inline-block;
  }
  .market>ul>li>a>span{
    font-size: 19px;
    font-weight:bold;
  }
  .market>ul{
    margin-top:4%;
  }
  .marketTitle:hover{
    color:#00C1DE !important;
  }
  .myTransform{
    -webkit-transform: rotateY(360deg);
    -moz-transform:rotateY(360deg);
    -o-transform:rotateY(360deg) ;
  }
  .platformSolutionDesc,.marketDesc{
    margin-bottom:2%;
  }
  @media screen and (max-width: 768px) {
    .mask{
      height: 280px;
    }
    .content{
      top:100px;
    }
    .item-title{
      font-size: 18px;
    }
    .item-desc{
      margin-top:20px;
    }
    .item-link{
      margin-top:30px;
    }
    .itemBG{
      height: 280px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 414px ) {
    .carousel-caption h3{
      margin-bottom:0 !important;
      font-size: 20px !important;
    }
    .carousel-caption p{
      margin: 0 !important;
    }

    .itemBG{
      height: 280px !important;
    }
    .slide-body li{
      height: auto;
      margin-top: 5px;
    }
  }
  .line{
    border-bottom: 1px solid #E1E1E1;
    margin-bottom:10px;
  }
  #chart-container{
    margin:0 auto;

  }
  .height300{
    height: 300px !important;
  }
  #map{
    margin-bottom:20px;
    background: #F2F3F3;
  }
  #regNowRow{
    height: 90px;
    line-height: 90px;
    background-color: #00c1De;
  }
  .regNowRow_btn{
    background-color: transparent;
    border:1px solid #fff;
    color:#fff;
    font-size: 18px;
    padding: 10px;
    height: 25px;
    margin-left:5px;
  }



</style>
