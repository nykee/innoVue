<template>
  <div>

    <Row class="main-content">
      <i-col :span="4">

        <div class="menuBG">


          <Menu theme="light" accordion style="width: auto!important;">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper" />
                运动学分析
              </template>
              <MenuItem name="1-1" >
                <span @click="ShowChildrenModule('SportsManage')">病例数据管理</span>
              </MenuItem>
              <MenuItem name="1-2" >
                <span @click="ShowChildrenModule('SportsUPLD')">病例数据上传</span>
              </MenuItem>
              <MenuItem name="1-3" >
                <span @click="ShowChildrenModule('SportsCharts')">基本图表分析</span>
              </MenuItem>
              <MenuItem name="1-4" >
                <span @click="ShowChildrenModule('SportsHotMap')">病例数据热力图分布</span>
              </MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people" />
                <span>销售业务分析</span>
              </template>
              <MenuItem name="2-1" >
                <span @click="ShowChildrenModule('SellsDash')">销售业务dashboard</span>
              </MenuItem>
              <!--<MenuItem name="2-2">活跃用户</MenuItem>-->
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats" />
                <span>服务器监控</span>
              </template>
              <MenuItem name="3-1" >
                <span @click="ShowChildrenModule('ServerDash')">服务器监控dashboard</span>
              </MenuItem>
              <!--<MenuItem name="3-2">活跃用户</MenuItem>-->
            </Submenu>
          </Menu>
        </div>

      </i-col>
      <i-col :span="20">

        <router-view>
            <!--子模块显示路由-->
        </router-view>
      </i-col>
    </Row>

  </div>
</template>

<script>
  import SportsUpload from '../components/ManageCenter/Sports/SportsUpload.vue';
  import SportsHotMap from '../components/ManageCenter/Sports/SportsHotMap.vue';
  import SportsManage from '../components/ManageCenter/Sports/SportsManage.vue';
  import SportsCharts from '../components/ManageCenter/Sports/SportsCharts.vue';
  import SellsDash from '../components/ManageCenter/Sells/SellsDashboard';
  import ServerDash from '../components/ManageCenter/Server/ServerDashboard';
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
              this.$router.push( '/Manage/SportsUpload')
                          }
            else if(funcName ==="SportsManage"){

              this.$router.push(  '/Manage/SportsManage')
            }
            else if(funcName ==="SportsCharts"){

              this.$router.push( '/Manage/SportsCharts')
            }
            else if(funcName ==="SportsHotMap"){

              this.$router.push( '/Manage/SportsHotMap')
            }
            else if(funcName ==="SellsDash"){

              this.$router.push( '/Manage/SellsDash')
            }
            else if(funcName ==="ServerDash"){

              this.$router.push( '/Manage/ServerDash')
            }

          }
        },
        created: function () {

        },
        components: {
          SportsUpload,
          SportsHotMap,
          SportsManage,
          SportsCharts,
          SellsDash,
          ServerDash
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
  .manage-page-subview-container{
    padding-left: .5rem;
    padding-top: .6rem;
  }
</style>
