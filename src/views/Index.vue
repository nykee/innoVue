<template>
  <div class="main-content ">

    <!--轮播-->
    <Carousel v-model="carouselIndex" loop autoplay dots="outside" :autoplay-speed="autoPlaySpeed">
      <CarouselItem v-for="item in items" :key="item.id" style="height: 400px">
        <div style="position: relative;color:#fff">
          <img :src="item.src" alt="">
          <h2 class="carousel-info-title">{{item.title}}</h2>
          <h3 class="carousel-info-desc">{{ item.desc }}</h3>
        </div>
      </CarouselItem>

    </Carousel>

    <!--平台简介-->
    <div class=" funcZone">
      <div id="platformIntro" class="platformIntro">
        <h3 >XX云平台--安全、稳定的云平台</h3>
        <p ><router-link to="/Mcenter">依托XX多中心架设，集云计算、云存储、网络、安全、大数据与神经网络，让骨科诊疗更快速有效</router-link></p>
      </div>
      <!--平台功能-->
      <div id="platformFunction" class="platformFunction">
        <!--功能图标-->
        <Row  type="flex" class="row-bg functionName" justify="space-around">
              <i-col span="4" >
                  <a id="yjs"  @click="calDetailToggle">
                    <div class="funcImg" ></div>
                    <div class="funcTitle" :class="{'myActive':calDetailShow}">云计算</div>
                  </a>
              </i-col>
              <i-col span="4" >
                  <a id="ycc" @click="storeDetailToggle">
                    <div class="funcImg" ></div>
                    <div class="funcTitle" :class="{'myActive':storeDetailShow}" >云存储</div>
                  </a>
              </i-col>
              <i-col span="4"  >
                  <a id="sjwl" @click="neuralDetailToggle">
                    <div class="funcImg" ></div>
                    <div class="funcTitle" :class="{'myActive':neuralDetailShow}">神经网络</div>
                  </a>
              </i-col>
          </Row>


        <div class="functionDetail">
          <!--云计算详情-->
          <Row id="calDetail" v-if="calDetailShow" >

              <i-col span="6"  class="funcDescCol flex-container" >
               <span class="">云计算提供了最可靠、最安全的数据存储中心</span><s>&gt;</s>
              </i-col>
               <i-col span="6" class="funcDescCol flex-container">
                 <span class="">云计算对用户端的设备要求最低</span><s>&gt;</s>
               </i-col>
               <i-col span="6" class="funcDescCol flex-container">
                 <span>增强的计算能力</span><s>&gt;</s>
               </i-col>
               <i-col span="6" class="funcDescCol flex-container">
                 <span>无限的存储容量</span><s>&gt;</s>
               </i-col>

          </Row>
          <!--云存储详情-->
          <Row id="storeDetail"  v-if="storeDetailShow" >

              <i-col span="8" class="funcDescCol flex-container"><span>存储管理自动化、智能化，所有的存储资源被整合到一起</span><s>&gt;</s></i-col>
              <i-col span="8" class="funcDescCol flex-container"><span>提高存储效率、提高了存储空间的利用率，同时具备负载均衡、故障冗余功能</span><s>&gt;</s></i-col>
              <i-col span="8" class="funcDescCol flex-container"><span>实现规模效应和弹性扩展，降低运营成本，避免资源浪费</span><s>&gt;</s></i-col>

          </Row>
          <!--神经网络详情-->
          <Row id="neuralDetail " v-if="neuralDetailShow" >

              <i-col span="8" class="funcDescCol flex-container"><span>自学习功能</span><s>&gt;</s></i-col>
              <i-col span="8" class="funcDescCol flex-container"><span>联想存储功能</span><s>&gt;</s></i-col>
              <i-col span="8" class="funcDescCol flex-container"><span>高速寻找优化解的能力</span><s>&gt;</s></i-col>

          </Row>
        </div>
      </div>
      <!--平台解决方案-->
      <!--平台目标市场-->
      <div id="market"  class="market">
        <div class="marketDesc">
          <h3 class="market-slogan ">精确定位，发散市场，XX云能为各种类型的市场提供服务</h3>
        </div>
        <Row type="flex" class="row-bg" justify="space-around">
          <i-col span="4" class="market-function-item">
            <div>
              <img src="static/images/index/ky.png" alt=""/>
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>科研评估</span></a>
          </i-col>
          <i-col span="4" class="market-function-item">
            <div>
              <img src="static/images/index/kf.png" alt=""/>
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>关节康复</span></a>
          </i-col>
          <i-col span="4" class="market-function-item">
            <div>
              <img src="static/images/index/mz.png" alt="">
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>门诊辅助</span></a>
          </i-col>
        </Row>
        <Row type="flex" class="row-bg" justify="space-around">
          <i-col span="4" class="market-function-item">
            <div>
              <img src="static/images/index/yd.png" alt="">
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>运动训练</span></a>
          </i-col>
          <i-col span="4" class="market-function-item">
            <div>
              <img src="static/images/index/js.png" alt="">
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>军事训练</span></a>
          </i-col>
          <i-col span="4" class="market-function-item">
            <div>
              <img src="static/images/index/tj.png" alt="">
            </div>
            <a href="javascript:void 0" class="marketTitle" style="color:#000"><span>体检项目</span></a>
          </i-col>
        </Row>

      </div>
      <!--分割线-->
      <div class="line"></div>
      <!--XX多中心显示chart-->
      <div id="map" >
        <Row justify="center" type="flex" class="row-bg">

         <i-col span="6">
           <h3 class="map-slogan">XX云分布全国的骨科中心--数据更可靠</h3>
         </i-col>
        </Row >
        <Row justify="center" type="flex" class="row-bg">
          <i-col span="12">
              <!--地图chart,组件引入-->
            <MapChart></MapChart>
          </i-col>
        </Row>


      </div>
      <!--立刻注册按钮及点击查看多中心按钮-->
      <Row id="regNowRow"  type="flex" justify="center">
          <i-col span="8">
            <router-link to="/Mcenter" class="RR-btn"><span class="regNowRow_btn"  id="regNow_2mcenter">查看XX多中心</span></router-link>
            <router-link to="/Register" class="RR-btn"><span class="regNowRow_btn" id="regNowRow_regbtn" >免费注册</span></router-link>
            <router-link to="/Login" class="RR-btn"><span class="regNowRow_btn" id="regNowRow_loginbtn" >立刻登录</span></router-link>
          </i-col>
      </Row>


    </div>
  </div>
</template>

<script>
  import MapChart from "../components/IndexPage/MapChart";

    export default {

        data(){

          return {
            items:[
              {id:1,title:"XX大数据",src:"static/images/index/silde-banner3.jpg",desc:"XX依托全国各地的多中心建立骨科、关节大数据！"},
              {id:2,title:"XX云计算",src:"static/images/index/silde-banner4.jpg",desc:"XX多中心上传的数据通过云计算处理大数据"},
              {id:3,title:"XX神经网络",src:"static/images/index/silde-banner5.jpg",desc:"建立骨科关节测试模型，数据分析更科学高效！"},
              ],
            calDetailShow:true,
            storeDetailShow:false,
            neuralDetailShow:false,
            carouselIndex:0,
            autoPlaySpeed:5000
          }

        },
        methods: {
          calDetailToggle(){
            if(this.calDetailShow){return 0}
            else {
              this.calDetailShow = !this.calDetailShow;
              this.storeDetailShow =false;
              this.neuralDetailShow=false;
            }

          },
          storeDetailToggle(){
            if(this.storeDetailShow){return 0}
            else {
              this.storeDetailShow= !this.storeDetailShow;
              this.calDetailShow =false;
              this.neuralDetailShow=false;
            }
          },
          neuralDetailToggle(){
            if(this.neuralDetailShow){return 0}
            else {
              this.neuralDetailShow= !this.neuralDetailShow;
              this.storeDetailShow =false;
              this.calDetailShow=false;
            }
          },


        },
        created: function () {

        },
      mounted(){

      },
        components: {
        MapChart
        }
    }
</script>
<style>


  .el-carousel__item h3 {
    color: #fff;
    font-size: 14px;
    opacity: 0.95;
    line-height: 20px;
    margin: 0;
    position: fixed;
    bottom: 10%;
    right: 36%;
  }
  .el-carousel__item h2 {
    color: #fff;
    font-size: 18px;
    opacity: 0.95;
    line-height: 30px;
    margin: 0;
    position: fixed;
    bottom: 17%;
    right: 45%;
  }

  .el-carousel__item img{
    height: 395px;
  }
  #yjs,#sjwl,#ycc{cursor: pointer}


  .platformIntro p a,#platformFunction a{color:#000}
  .platformIntro p a:hover{color:#027ACE !important; text-decoration: none !important}
  .platformIntro h3,.platformIntro p, .marketDesc h3, .platformSolutionDesc h3{text-align: center}

  .myActive{color:#00C1DE;text-decoration: none}
  .funcTitle{
    padding-left:20px;
  }
  .funcTitle:hover{color:#00C1DE }
  .functionDetail{
    margin-top:10px;}
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


  .funcImg{
    width: 80px;
    height: 80px;
    margin-bottom:20px;
  }
  a[id='yjs'] .funcImg{
    background: url("../../static/images/index/yjs_80.png") no-repeat;
  }a[id='ycc'] .funcImg{
     background: url("../../static/images/index/ycc_80.png") no-repeat;
   }a[id='sjwl'] .funcImg{
      background: url("../../static/images/index/sjwl_80.png") no-repeat;
    }
  .platformIntro{
    margin-top:30px;}
  .platformIntro p a:hover{
    color:#00C1DE !important;
  }
  .platformFunction{
    margin-top:40px;
  }

  #platformFunction ul li a:hover{
    color:#00C1DE !important;text-decoration: none !important;
  }
  .slide-body li{

    height: 368px;
    padding: 0 !important;
  }

  .slide-items a{display: block}
  .market{
    margin-top: 50px;
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
    margin-top:15%;
    display: inline-block;
    font-weight: 800;
    font-size: 1.2rem;
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


  .line{
    border-bottom: 1px solid #E1E1E1;
    margin-bottom:10px;
  }
  #chart-container{
    margin:0 auto;

  }

  #map{
    margin-bottom:5px;
    background: #F2F3F3;
  }
  #regNowRow{
    height: 90px;
    line-height: 90px;
    background-color: #00c1De;
  }
  .regNowRow_btn{
    background-color: #00C1DE;
    border:1px solid #fff;
    color:#fff;
    font-size: 18px;
    padding: 10px;
    height: 25px;
    margin-left:5px;
  }
  .RR-btn>span{
    border-radius: 2px ;
  }
  .RR-btn>span:hover{
    color:#00c1de;
    background:#fff ;
  }
  #calDetail,#storeDetail,#neuralDetail{
    height: 160px;
  }
  .funcDescCol{
    border: 1px solid transparent;
    padding: .5rem;


    border-radius: 2px ;
  }
  .funcDescCol>span{
    height: 60px;
    display: inline-block;
  }

  .funcDescCol:hover{
    border: 1px solid #fff;
    background: #fff;
    box-shadow:0 0 8px 0 rgba(0,0,0,.15);
  }
  .funcDescCol>s{
    display: none;
    text-decoration: none;
    position: absolute;
    top: 25%;
    right: 1%;
  }
  .carousel-info-title,.carousel-info-desc{
    position: absolute;
  }
  .carousel-info-title{top:56%;left:51%}
  .carousel-info-desc{top:60%;left:42%}
  .market-slogan{
    margin-bottom: 2rem;
    font-size: 1.6rem;

  }
  .row-bg{
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  .market-function-item{
    cursor: pointer;
  }
  .market-function-item img:hover{-webkit-transform: rotateY(360deg)}
  .map-slogan{
    margin-top: .8rem;
    font-size: 1.2rem;
    display: inline-block;
    width: 22rem;
  }
</style>
