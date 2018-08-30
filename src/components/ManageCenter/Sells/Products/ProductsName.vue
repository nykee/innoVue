<template>
  <span class="product-name">{{pName}}</span>
</template>

<script>
    export default {
      props:['pName'],
        data() {
            return {}
        },
    }
</script>
<style>
  .product-name{
    font-size: .9rem;
    font-weight: bold;
    text-align: left;
    color:#fff;
  }
</style>
