<template>
  <div>
    <CommonHeader title="销售监控dashboard" iconName="fa fa-magic fa-2x"/>
    <el-row>
      <el-col
        :lg="16"
      >
        <MonthlySummary/>
      </el-col>
      <el-col
        :lg="8"
      >
        <PercentCount/>
      </el-col>
    </el-row>



  </div>


</template>

<script>
  import CommonHeader from '../CommonHeader'
  import PercentCount from './PercentCount'
  import MonthlySummary from './MonthlySummary'
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          CommonHeader,
          PercentCount,
          MonthlySummary
        }
    }
</script>
<style>

</style>
