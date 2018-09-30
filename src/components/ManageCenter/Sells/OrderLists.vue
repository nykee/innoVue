<template>
  <div>
    <h2>your orders</h2>
    <OrderListsHeader></OrderListsHeader>
  </div>
</template>

<script>
  import OrderListsHeader from './OrderListsHeader'
    export default {

        data() {
          let orders =[
            {item:'HTC Mobile',Costumer:'alan B',price:'$438',Product:'B-TZF'},
            {item:'Samsung Mobile',Costumer:'alan C',price:'$680',Product:'C-565'},
            {item:'Apple Mobile',Costumer:'alan D',price:'$680',Product:'A-292'},
            {item:'XiaoMi Mobile',Costumer:'alan E',price:'$438',Product:'D-T23'},
            {item:'LG Mobile',Costumer:'alan G',price:'$230',Product:'G-T24'},
            {item:'Nokia Mobile',Costumer:'alan F',price:'$120',Product:'A-TG1'},
            {item:'HuaWei Mobile',Costumer:'alan Z',price:'$220',Product:'D-TG2'},
            {item:'Oppo Mobile',Costumer:'alan X',price:'$220',Product:'D-TG2'},
            {item:'Vivo Mobile',Costumer:'alan T',price:'$220',Product:'D-TG2'},
            {item:'MeiZu Mobile',Costumer:'alan K',price:'$220',Product:'D-TG2'},
          ];
          let page1 =[];
          let page2 =[];
          let amountPerPage =5;


            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          OrderListsHeader
        }
    }
</script>
<style>

</style>
