<template>
  <div class="manage-page-subview-container">
    <div id="menu">
      <!--<h3>运动学图表分析</h3>-->
      <CommonHeader title="运动学图表分析" iconName="fa fa-magic fa-2x"/>
      <label >请选择统计维度</label>

      <Select v-model="selected" style="width:200px" >
        <Option v-for="opt in selectOptions" :value="opt.value" :key="opt.value">{{ opt.label }}</Option>
      </Select>
      <el-button type="primary" id="submitBtn" @click="showChart">点击查看</el-button>
    </div>
    <div id="chart" style="height: 600px;width: 600px" >
    </div>


  </div>
</template>

<script>
  import CommonHeader from '../CommonHeader'
    export default {
        data() {
            return {
              ageArray:[],
              ageArrayVal:[],
              typeArray:[],
              typeArrayVal:[],
              selected:"",
              selectOptions:[
                {value:'age',label:'年龄'},
                {value:'month',label:'月份'},
                {value:'gender',label:'性别'},
                {value:'dType',label:'病种'},
              ]



            }
        },
        methods: {
          showChart(){

          },
          fetchDimeData(){


          }
        },
        created: function () {

        },
      mounted(){


      },
        components: {
          CommonHeader
        }
    }
</script>
<style>

</style>
