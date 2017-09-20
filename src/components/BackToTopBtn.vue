<template>
  <div>
    <div class="btn" @click="toTop" >
      <el-tooltip class="item" effect="dark" content="返回顶部" placement="left">
        <i class="el-icon-caret-top"></i>
      </el-tooltip>

    </div>
  </div>

</template>

<script>
    export default {
        data() {
            return {
              isTop:true,
              topVal:document.documentElement.scrollTop
            }
        },
        methods: {
          toTop(){
            window.scrollTo(0,0);
            console.log(document.documentElement.scrollTop);

          },
          chkIsTop(){

            if(this.topVal>100){
              this.isTop =false;
            }
          }

        },
        created: function () {

        },
        mounted() {
          this.topVal=document.documentElement.scrollTop;
          console.log(this.topVal);
        },
        components: {},
      watch:{
        topVal:"chkIsTop"

      }
    }
</script>
<style>
  .btn{
    height: 50px;
    width: 50px;
    background: #58b7ff;
    border-radius:25px;
    cursor: pointer;
    opacity:0.5;
  }
  .btn i{
    color:#fff;
    display: block;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
  }
  .btn:hover{
    opacity: 1;
  }

</style>
