<template>
  <div>
    <CommonHeader title="销售监控dashboard" iconName="fa fa-magic fa-2x"/>
    <el-row>
      <el-col
        :lg="16"
      >
        Month
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
          PercentCount
        }
    }
</script>
<style>

</style>
