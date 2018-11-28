<template>
  <div class="manage-page-subview-container">
    <!--<h3>运动学数据上传</h3>-->
    <CommonHeader title="运动学数据上传" iconName="fa fa-magic fa-2x"/>
    <Upload
      multiple
      action="//jsonplaceholder.typicode.com/posts/">
      <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
  </div>

</template>

<script>
  import CommonHeader from '../CommonHeader'
    export default {
        data() {
            return {
              fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
        },
        methods: {
          submitUpload() {
            this.$refs.upload.submit();
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
          },
        },
        created: function () {

        },
        components: {CommonHeader}
    }
</script>
<style>

</style>
