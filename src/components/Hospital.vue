<template>
  <div class="main">
    <el-breadcrumb separator="/" class="breadNav">
      <el-breadcrumb-item :to="{ path: '/Mcenter' }">多中心</el-breadcrumb-item>
      <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
    </el-breadcrumb>

    <Row>
      <i-col :span="4" class="hosLogoCol"><img :src="imgsrc" class="hosLogo" alt=""></i-col>
      <i-col :span="20"><h2>{{name}}</h2></i-col>
    </Row>
    <Row>
      <i-col>
          <p class="hosDesc">{{desc}}</p>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import hospital from '../store/hospital.js';
    export default {
        data() {
          return{
            name:'',
            sname:'',
            imgsrc:'',
            desc:''

          }
        },
        methods: {
          getHospitalName(){
            let path = this.$route.path;
            console.log(path);
            let tempSname = path.substring(path.indexOf(':')+1);
            this.sname =tempSname;
            console.log(tempSname);
//            console.log(hospital[0].name);
            switch (tempSname){
              case '301':
                this.name=hospital[0].name;
                this.imgsrc = hospital[0].imgsrc;
                this.desc = hospital[0].desc;
                break;
              case 'JST':
                this.name=hospital[1].name;
                this.imgsrc = hospital[1].imgsrc;
                this.desc = hospital[1].desc;
                break;
                case 'GJTY':
                  this.name=hospital[2].name;
                this.imgsrc = hospital[2].imgsrc;
                this.desc = hospital[2].desc;
                break;
                case 'SHHS':
                  this.name=hospital[3].name;
                this.imgsrc = hospital[3].imgsrc;
                this.desc = hospital[3].desc;
                break;
                case 'D9RM':
                  this.name=hospital[4].name;
                this.imgsrc = hospital[4].imgsrc;
                this.desc = hospital[4].desc;
                break;
                case 'D6RM':
                  this.name=hospital[5].name;
                this.imgsrc = hospital[5].imgsrc;
                this.desc = hospital[5].desc;
                break;
                case 'GZJQ':
                  this.name=hospital[6].name;
                this.imgsrc = hospital[6].imgsrc;
                this.desc = hospital[6].desc;
                break;
                case 'HNLG':
                  this.name=hospital[7].name;
                this.imgsrc = hospital[7].imgsrc;
                this.desc = hospital[7].desc;
                break;
                case 'XGZW':
                  this.name=hospital[8].name;
                this.imgsrc = hospital[8].imgsrc;
                this.desc = hospital[8].desc;
                break;
              default:
                console.log("无此医院");
                break;
            }
          }
        },
        created: function () {

        },
      mounted(){
        this.getHospitalName();

      },
        components: {}
    }
</script>
<style>
  .main{
    height: 700px;
  }
  .breadNav{
    margin-top:20px;
    margin-left:20px;
  }
  .hosLogoCol{
    margin-bottom:20px;
    margin-top:20px;
  }
  .hosLogo{
    width: 100px;
    height: 100px;
    margin-left:10px;
  }
  .hosDesc{
    text-indent:20px;
  }
</style>
