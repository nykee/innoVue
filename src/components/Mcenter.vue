<template>

  <div class="container" id="main-container">
    <div class="row">
      <h1 id="title" class=" title col-lg-12 col-md-12 col-sm-12 col-xs-12" >逸动医疗多中心展示</h1>
      <div class="defaultInfo col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h3  class="mCenterDisc">逸动医疗致力于关节功能多中心的建立，在北京上海广州香港等地均建立了多中心</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12" id="hosSel">
        <i>请选择你需要查看数据的医院或机构：</i>
        <select name="hSelect" id="hospitalSel">
          <option value="301" selected="selected">解放军301总医院</option>
          <option value="JST">积水潭医院</option>
          <option value="GJTY">国家体育总局</option>
          <option value="SHHS">华山医院</option>
          <option value="D9RM">上海市第九人民医院</option>
          <option value="D6RM">上海市第六人民医院</option>
          <!--<option value="SHTY">上海体育学院</option>
          <option value="SHJT">上海交通大学</option>-->
          <option value="GZJQ">广州军区总医院</option>
          <option value="HNLG">华南理工大学</option>
          <option value="XGZW">香港威尔士亲王医院</option>
        </select>
        <span id="gotoBtn" class="btn btn-primary">前往</span>
        <b>或者点击下方的医院名称</b>
      </div>
    </div>
    <div class="row">
      <div id="chart-container" class="col-xs-12 col-sm-12 col-md-6 col-lg-6"  style="height:700px"></div>
      <div id="mCenterInfo" class="col-xs-12 col-sm-12 col-md-6  col-lg-6">

        <div class="beijingInfo " >
          <b>逸动医疗北京中心</b>
          <ul>
            <li>
              <a href="./mCenterDetail.html?hospital=301"><img src="/static/images/mCenter/301.png" alt="解放军301总医院"><s>解放军301总医院</s></a>
            </li>
            <li>
              <a href="./mCenterDetail.html?hospital=JST"><img src="/static/images/mCenter/jst.png" alt="积水潭医院"><s>积水潭医院</s></a>
            </li>
            <li>
              <a href="./mCenterDetail.html?hospital=GJTY"><img src="/static/images/mCenter/nstc.png" alt="国家体育运动总局"><s>国家体育运动总局</s></a>
            </li>
          </ul>
        </div>
        <div class="shanghaiInfo">
          <b>逸动医疗上海中心</b>
          <ul>
            <li>
              <a href="./mCenterDetail.html?hospital=SHHS"><img src="/static/images/mCenter/hsyy.png" alt="华山医院"><s>华山医院</s></a>
            </li>
            <li>
              <a href="./mCenterDetail.html?hospital=D9RM"><img src="/static/images/mCenter/9rm.png" alt="上海市第九人民医院"><s>上海市第九人民医院</s></a>
            </li>
            <li>
              <a href="./mCenterDetail.html?hospital=D6RM"><img src="/static/images/mCenter/6rm.jpg" alt="上海市第六人民医院"><s>上海市第六人民医院</s></a>
            </li>
            <!--<li>
                <a href="./mCenterDetail.html?hospital=SHTY"><img src="../images/mCenter/shty.jpg" alt="上海体育学院"><s>上海体育学院</s></a>
            </li>
            <li>
                <a href="./mCenterDetail.html?hospital=SHJT"><img src="../images/mCenter/shjt.jpg" alt="上海交通大学"><s>上海交通大学</s></a>
            </li>-->
          </ul>
        </div>
        <div class="guangdongInfo">
          <b>逸动医疗广东中心</b>
          <ul>
            <li>
              <router-link to="/Mcenter/GZJQ"><img src="/static/images/mCenter/gzjy.png" alt=""><s>广州军区总医院</s></router-link>
            </li>
            <li>
              <a href="./mCenterDetail.html?hospital=HNLG"><img src="/static/images/mCenter/hnlg.jpg" alt=""><s>华南理工大学</s></a>
            </li>
            <li>
              <a href="./mCenterDetail.html?hospital=XGZW"><img src="/static/images/mCenter/wales.png" alt=""><s>香港威尔士亲王医院</s></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        /*data() {

        },*/
        methods: {},
        created: function () {

        },
        components: {}
    }
</script>
<style>

</style>
