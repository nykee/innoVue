<template>

    <Row >
      <i-col :lg="6" v-for="{title,index} in titles" :key="index">
        {{title}}
      </i-col>

    </Row>


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
