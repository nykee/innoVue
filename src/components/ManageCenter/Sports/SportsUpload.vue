<template>
  <div class="manage-page-subview-container">
    <!--<h3>运动学数据上传</h3>-->
    <CommonHeader title="运动学数据上传" iconName="fa fa-magic fa-2x"/>
    <Upload
      :before-upload="handleUpload">
      <Button icon="ios-cloud-upload-outline">选择需要上传的文件</Button>
    </Upload>
    <div v-if="file !== null&&fileTypeOk">上传文件: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中...' : '点击上传' }}</Button></div>
  </div>

</template>

<script>
  import CommonHeader from '../CommonHeader'
    export default {
        data() {
            return {
              file: null,
              loadingStatus: false,
              fileTypeOk:false
            }
        },
        methods: {
          handleUpload (file) {
            this.file = file;
            console.log(file);
            console.log(file.name.slice(file.name.toString().indexOf(".")));
            let suffix= file.name.slice(file.name.toString().indexOf("."));
            if(suffix ===".opt"){
              this.fileTypeOk =true;
            }
            else {
              this.$Message.warning('请选择.opt格式的文件!!');
            }
            return false;
          },
          upload () {
            this.loadingStatus = true;
            let param = new FormData();
            param.append('file',this.file,this.file.name);
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头

            this.$http.post("/file/upload",param,config)
              .then((data)=>{
                console.log(data);
                if(data.data.code === 100){
                  this.loadingStatus = false;
                  this.$Message.success('上传成功！');
                }

              })
              .catch((err)=>{
                console.log(err);
              })


          }

        },
        created: function () {

        },
        components: {CommonHeader}
    }
</script>
<style>

</style>
