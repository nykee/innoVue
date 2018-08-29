<template>
  <div>
    <el-row class="main-content">
      <el-col :span="6">
       <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>-->
        <div class="menuBG">
          <el-menu default-active="1-2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">运动学分析</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"  @click="ShowChildrenModule('SportsManage')"><i class="el-icon-message"></i>病例数据管理</el-menu-item>
              <el-menu-item index="1-2" @click="ShowChildrenModule('SportsUPLD')"><i class="el-icon-message"></i>病例数据上传</el-menu-item>
              <el-menu-item index="1-3"  @click="ShowChildrenModule('SportsCharts')"><i class="el-icon-message"></i>基本图表分析</el-menu-item>
              <el-menu-item index="1-4"  @click="ShowChildrenModule('SportsHotMap')"><i class="el-icon-message"></i>病例数据热力图分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">销售业务分析</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1"><i class="el-icon-message"></i>销售业务dashboard</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">服务器监控</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1"><i class="el-icon-message"></i>服务器监控dashboard</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        </div>
      </el-col>
      <el-col :span="16">
        <router-view>
            <!--子模块显示路由-->
        </router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SportsUpload from '../components/Sports/SportsUpload.vue';
  import SportsHotMap from '../components/Sports/SportsHotMap.vue';
  import SportsManage from '../components/Sports/SportsManage.vue';
  import SportsCharts from '../components/Sports/SportsCharts.vue';
    export default {
        data() {
          return{
            isCollapse: false,
          }
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          ShowChildrenModule(funcName){
            if(funcName ==="SportsUPLD"){


              this.$router.push( {path: '/Manage/SportsUpload'})
                          }
            else if(funcName ==="SportsManage"){

              this.$router.push( {path: '/Manage/SportsManage'})
            }
            else if(funcName ==="SportsCharts"){

              this.$router.push( {path: '/Manage/SportsCharts'})
            }
            else if(funcName ==="SportsHotMap"){

              this.$router.push( {path: '/Manage/SportsHotMap'})
            }

          }
        },
        created: function () {

        },
        components: {
          SportsUpload,SportsHotMap,SportsManage,SportsCharts
        },
      mounted(){
//        this.$router.push( {path: '/Manage/SportsUpload'})
      }
    }
</script>
<style scoped>
  .main-content{
    height: 700px;
  }
  .menuBG{
    height: 700px;
    background: #EEF1F6;
  }
</style>
