<template>

  <el-row  id="main-container">
    <el-row >
      <h1 id="title" class=" title " >XX医疗多中心展示</h1>
      <div class="defaultInfo ">
        <h3  class="mCenterDisc">XX医疗致力于关节功能多中心的建立，在北京上海广州香港等地均建立了多中心</h3>
      </div>
    </el-row>
    <div >
      <div class="" id="hosSel">
        <label for="hosSel">请选择你需要查看数据的医院或机构：</label>
        <select name="hSelect" id="hospitalSel" v-model="Hospital">
          <option value="301" selected="selected">解放军301总医院</option>
          <option value="JST">积水潭医院</option>
          <option value="GJTY">国家体育总局</option>
          <option value="SHHS">华山医院</option>
          <option value="D9RM">上海市第九人民医院</option>
          <option value="D6RM">上海市第六人民医院</option>
          <option value="GZJQ">广州军区总医院</option>
          <option value="HNLG">华南理工大学</option>
          <option value="XGZW">香港威尔士亲王医院</option>
        </select>
        <el-button type="primary"  @click="linkToHosp">前往</el-button>
        <b>或者点击下方的医院名称</b>
      </div>
    </div>
    <el-row>
      <el-col  :span="14" id="chart-container">
        <MCmapchart></MCmapchart>
      </el-col>
      <el-col id="mCenterInfo"  :span="8">

        <div class="beijingInfo ">
          <b>XX医疗北京中心</b>
          <ul>
            <li>
              <router-link to="/Hospital/:301"><img src="/static/images/mCenter/301.png" alt="解放军301总医院"><s>解放军301总医院</s></router-link>
            </li>
            <li>
              <router-link to="/Hospital/:JST"><img src="/static/images/mCenter/jst.png" alt="积水潭医院"><s>积水潭医院</s></router-link>
            </li>
            <li>
              <router-link to="/Hospital/:GJTY"><img src="/static/images/mCenter/nstc.png" alt="国家体育运动总局"><s>国家体育运动总局</s></router-link>
            </li>
          </ul>
        </div>
        <div class="shanghaiInfo">
          <b>XX医疗上海中心</b>
          <ul>
            <li>
              <router-link to="/Hospital/:SHHS"><img src="/static/images/mCenter/hsyy.png" alt="华山医院"><s>华山医院</s></router-link>
            </li>
            <li>
              <router-link to="/Hospital/:D9RM"><img src="/static/images/mCenter/9rm.png" alt="上海市第九人民医院"><s>上海市第九人民医院</s></router-link>
            </li>
            <li>
              <router-link to="/Hospital/:D6RM"><img src="/static/images/mCenter/6rm.jpg" alt="上海市第六人民医院"><s>上海市第六人民医院</s></router-link>
            </li>
          </ul>
        </div>
        <div class="guangdongInfo">
          <b>XX医疗广东中心</b>
          <ul>
            <li>
              <router-link to="/Hospital/:GZJQ"><img src="/static/images/mCenter/gzjy.png" alt=""><s>广州军区总医院</s></router-link>
            </li>
            <li>
              <router-link to="/Hospital/:HNLG"><img src="/static/images/mCenter/hnlg.jpg" alt=""><s>华南理工大学</s></router-link>
            </li>
            <li>
              <router-link to="/Hospital/:XGZW"><img src="/static/images/mCenter/wales.png" alt=""><s>香港威尔士亲王医院</s></router-link>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </el-row>

</template>

<script>
  import MCmapchart from './charts/MCmapchart.vue';
    export default {
        data() {
          return{
            Hospital:'301'
          }
        },
        methods: {
          linkToHosp() {
            this.$router.push('/Hospital/:'+this.Hospital);
          }
        },
        created: function () {

        },
        components: {
          MCmapchart
        }
    }
</script>
<style>
  html{height:100%}
  body{height:100%}

  #main-container{
    height: 800px;
    width: auto;
    margin: 0 auto;
  }
  #chart-container{
    margin-top: 20%;
    margin-left:2%;
    float: left;

  }

  #mCenterInfo{
    margin-top: 3%;
    margin-left:3%;
    float: left;
    width: 30%;
    height: 70%;
  }
  #mCenterInfo h1{
    margin: 5%;
    color:#027ACE;
  }
  #mCenterInfo img{
    width: 50px;
    height: 50px;
  }
  #mCenterInfo s{
    text-decoration: none;
    margin-left:2%;
    font-family: '微软雅黑', serif;
    font-size: 18px;
    font-weight: bold;
    color: #000 ;
  }
  #mCenterInfo b{
    font-size: 1.5em;
    color:#027bbb;
    margin:5%;
    display: block;
  }
  #mCenterInfo ul{
    list-style: none;
    margin-top:5%;
    margin-left:5%;
  }
  #mCenterInfo ul li{
    margin-top:3%;
  }
  .mCenterDisc{
    margin-top: 2%;
  }
  .beijingInfo,.shanghaiInfo,.guangdongInfo{
    border:1px solid transparent ;
    border-bottom:1px solid #E8EAEC;


  }
  .defaultInfo{
    border-top:1px solid #E8EAEC;
    text-align: center
  }
  .nav_nav ul li,.bottom ul li,.nav_nav ul,.bottom ul{
    float: left;
    overflow: hidden
  }
  .title{  text-align: center;}


  #hosSel {
    text-align: center;
  }
  #hosSel i{font-style: normal}

  .beijingInfo>ul>li>a>s:hover,.shanghaiInfo>ul>li>a>s:hover,.guangdongInfo>ul>li>a>s:hover{
    color:#00C1DE !important
  }



</style>
