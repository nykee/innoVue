<template>

    <el-row >
      <el-col :lg="6" v-for="{title,index} in titles" :key="index">
        {{title}}
      </el-col>

    </el-row>


</template>

<script>
    export default {
        data() {
            return {
              titles:["项目","顾客","价格","货号"]
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style>

</style>
