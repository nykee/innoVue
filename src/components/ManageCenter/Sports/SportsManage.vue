<template>
  <div class="manage-page-subview-container">
    <!--<h2>运动学病例管理</h2>-->
    <CommonHeader title="运动学病例管理" iconName="fa fa-magic fa-2x"/>
    <div class="data-table-container">
      <Table border ref="selection" :columns="columns" :data="dataCurrent"  stripe></Table>
      <Button @click="handleSelectAll(true)" class="choose-all-btn">设置全选</Button>
      <Button @click="handleSelectAll(false)" class="choose-all-btn">取消全选</Button>
    </div>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="total" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
    <div class="demo-spin-container" v-if="loadingStatus">
      <Spin fix size="large"></Spin>
    </div>


  </div>
</template>

<script>
  import CommonHeader from '../CommonHeader'
  // import axios from 'axios'
    export default {
        data() {
            return {
              columns: [
                {
                  type: 'selection',
                  width: 60,
                  align: 'center'
                },
                {
                  title: '姓名',
                  key: 'pname'
                },
                {
                  title: '年龄',
                  key: 'age'
                },
                {
                  title: '身高(cm)',
                  key: 'height'
                },
                {
                  title: '体重(Kg)',
                  key: 'weight'
                },
                {
                  title: 'bmi',
                  key: 'bmi'
                },
                {
                  title: '性别',
                  key: 'sex'
                },
                {
                  title: '病种',
                  key: 'dType'
                },
                {
                  title: '测试次数',
                  key: 'testCount'
                },
                {
                  title: 'Action',
                  key: 'action',
                  render: (h, params) => {
                    return h('div', [
                      h('Button', {
                        props: {
                          type: 'info',
                          size: 'small'
                        },
                        style: {
                          margin: '5px'
                        },
                        on: {
                          click: () => {
                            // this.show(params.index)
                            console.log(params.index);
                          }
                        }
                      }, '查看测试报告'),
                      h('Button', {
                        props: {
                          type: 'primary',
                          size: 'small'
                        },
                        style: {
                          margin: '5px'
                        },
                        on: {
                          click: () => {
                            // this.remove(params.index)
                          }
                        }
                      }, '推送测试报告')
                    ]);
                  }
                }
              ],
              dataAll: [],
              dataCurrent:[],
              loadingStatus:true,
              total:0,
              dataPerPage:10
            }

        },
        methods: {
          handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
          },
          changePage(pageIndex){
            let startIdx = (pageIndex-1)*this.dataPerPage;
            let endIdx = this.dataPerPage*pageIndex;
            // console.log(pageIndex);
            // console.log(startIdx);
            // console.log(endIdx );
            // console.log();
            // this.dataCurrent = this.dataAll.slice(pageIndex-)
            if(pageIndex ===Math.round(this.total/this.dataPerPage)){

              this.dataCurrent= this.dataAll.slice(startIdx)
            }
            else {
              this.dataCurrent= this.dataAll.slice(startIdx,endIdx)
            }
          }
        },
        created: function () {

        },
      mounted(){


          this.$http.get("/queryPatient",{params: {username:"inno"}})
            .then((data)=>{
                let len= this.total = data.data.length;
                this.dataAll =data.data;
                for(let i=0;i<len;i++){
                  switch (this.dataAll[i].dType){
                    case "1":
                      this.dataAll[i].dType ="健康";
                      break;
                    case "2":
                      this.dataAll[i].dType ="韧带断裂";
                      break;
                    case "3":
                      this.dataAll[i].dType ="关节炎";
                      break;
                    case "4":
                      this.dataAll[i].dType ="半月板损伤";
                      break;
                    case "5":
                      this.dataAll[i].dType ="骨质增生";
                      break;
                    case "6":
                      this.dataAll[i].dType ="滑膜炎";
                      break;
                    case "7":
                      this.dataAll[i].dType ="韧带重建";
                      break;
                    case "8":
                      this.dataAll[i].dType ="全膝置换";
                      break;
                    case "9":
                      this.dataAll[i].dType ="其他";
                      break;
                    /* case "10":
                       data.data[i].dType ="健康";
                       break;*/
                    case "11":
                      this.dataAll[i].dType ="臀肌挛缩";
                      break;
                    case "12":
                      this.dataAll[i].dType ="股骨头坏死";
                      break;
                    case "13":
                      this.dataAll[i].dType ="髋关节撞击";
                      break;
                    case "14":
                      this.dataAll[i].dType ="髌骨半脱位";
                      break;
                    case "15":
                      this.dataAll[i].dType ="踝关节距下关节炎";
                      break;
                    case "16":
                      this.dataAll[i].dType ="脑卒中";
                      break;
                    default:
                      this.dataAll[i].dType ="其他";
                      break;
                  }
                }
                this.dataCurrent = this.dataAll.slice(0,this.dataPerPage);
                // console.log(this.pData);
                this.loadingStatus =false;

              }
            )
            .catch((err)=>{
              console.log(err);
            });




      },
        components: {CommonHeader}
    }
</script>
<style scoped>
  .data-table-container{
    margin: 1rem 0;
    padding: 0 .5rem;
  }
  .choose-all-btn{
    margin-top: .8rem;
  }
</style>
