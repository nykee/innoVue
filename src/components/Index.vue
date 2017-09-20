<template>
  <div class="main-content ">

    <!--轮播-->
    <el-carousel height="394px" indicator-position="outside" >
      <el-carousel-item v-for="item in items" :key="item"  >
        <div style="position: relative">
          <img :src="item.src" alt="">
          <h2>{{item.title}}</h2>
          <h3>{{ item.desc }}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>

    <!--平台简介-->
    <div class=" funcZone">
      <div id="platformIntro" class="platformIntro">
        <h3 >逸动云平台--安全、稳定的云平台</h3>
        <p ><router-link to="/Mcenter">依托逸动多中心架设，集云计算、云存储、网络、安全、大数据与神经网络，让骨科诊疗更快速有效</router-link></p>
      </div>
      <!--平台功能-->
      <div id="platformFunction" class="platformFunction">
        <!--功能图标-->
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
          <el-row id="calDetail" v-if="calDetailShow" style="height:100px">

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
          <el-row id="storeDetail"  v-if="storeDetailShow" style="height: 100px">

              <el-col :span="8"><span>存储管理自动化、智能化，所有的存储资源被整合到一起</span><s>&gt;</s></el-col>
              <el-col :span="8"><span>提高存储效率、提高了存储空间的利用率，同时具备负载均衡、故障冗余功能</span><s>&gt;</s></el-col>
              <el-col :span="8"><span>实现规模效应和弹性扩展，降低运营成本，避免资源浪费</span><s>&gt;</s></el-col>

          </el-row>
          <!--神经网络详情-->
          <el-row id="neuralDetail " v-if="neuralDetailShow" style="height: 100px">

              <el-col :span="8"><span>自学习功能</span><s>&gt;</s></el-col>
              <el-col :span="8"><span>联想存储功能</span><s>&gt;</s></el-col>
              <el-col :span="8"><span>高速寻找优化解的能力</span><s>&gt;</s></el-col>

          </el-row>
        </div>
      </div>
      <!--平台解决方案-->
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
        <el-row justify="center" type="flex" class="row-bg">

         <el-col :span="6">
           <h3 >逸动云分布全国的骨科中心--数据更可靠</h3>
         </el-col>
        </el-row >
        <el-row justify="center" type="flex" class="row-bg">
          <el-col :span="12">
              <!--地图chart,组件引入-->
            <MapChart></MapChart>
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
  import MapChart from "./MapChart.vue";
    export default {
        data(){

          return {
            items:[
              {title:"逸动大数据",src:"/static/images/index/silde-banner3.jpg",desc:"逸动依托全国各地的多中心建立骨科、关节大数据！"},
              {title:"逸动云计算",src:"/static/images/index/silde-banner4.jpg",desc:"逸动多中心上传的数据通过云计算处理大数据"},
              {title:"逸动神经网络",src:"/static/images/index/silde-banner5.jpg",desc:"建立骨科关节测试模型，数据分析更科学高效！"},
              ],
            calDetailShow:true,
            storeDetailShow:false,
            neuralDetailShow:false,
          }

        },
        methods: {
          calDetailtoggle(){
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
    padding-left:20px;}
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


  .line{
    border-bottom: 1px solid #E1E1E1;
    margin-bottom:10px;
  }
  #chart-container{
    margin:0 auto;

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
