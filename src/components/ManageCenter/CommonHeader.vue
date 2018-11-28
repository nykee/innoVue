<template>
  <Row>
    <i-col
      :xs="8" :sm="6" :md="4" :lg={span:10} :xl={span:10} >
      <h2>{{title}}</h2>
    </i-col>
    <i-col
      :xs="8" :sm="6" :md="4" :lg={span:1,offset:13} :xl={span:1,offset:13}  >
      <i :class=iconName></i>
    </i-col>
  </Row>
</template>

<script>

    export default {
      props:['title','iconName'],
        data() {
            return {}
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
