import Vue from 'vue'
import Router from 'vue-router'
import Mcenter from '../views/Mcenter.vue'
import Manage from '../views/Manage.vue'
import Index from '../views/Index.vue'
import Hospital from '../components/Hospital.vue'
import SportsUpload from '../components/ManageCenter/Sports/SportsUpload.vue'
import SportsManage from '../components/ManageCenter/Sports/SportsManage.vue'
import SportsCharts from '../components/ManageCenter/Sports/SportsCharts.vue'
import SportsHotMap from '../components/ManageCenter/Sports/SportsHotMap.vue'
import SellsDash from '../components/ManageCenter/Sells/SellsDashboard'
import ServerDash from '../components/ManageCenter/Server/ServerDashboard'
import Login from '../views/Login.vue'
Vue.use(Router);

export default new Router({
  /*routes: [
    {
      path:'/Login',
      name:"Login",
      component:Login
    },
   {
      path:"/main",
     component: Index,
     children:[
       {
         path:'/Mcenter',
         name:'Mcenter',
         component:Mcenter,

       },
       {
         path:'/Manage',
         name:'Manage',
         component:Manage,
         children:[
           {
             path:'SportsUpload',

             component:SportsUpload
           },
           {
             path:'SportsManage',

             component:SportsManage
           },
           {
             path:'SportsCharts',

             component:SportsCharts
           },
           {
             path:'SportsHotMap',

             component:SportsHotMap
           },
         ]
       },
       {
         path:'/Hospital/:id',
         name:"Hospital",
         component:Hospital
       },
     ]
    }
  ]*/
  routes: [
    {

      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/Mcenter',
      name:'Mcenter',
      component:Mcenter,

    },
    {
      path:'/Manage',
      name:'Manage',
      component:Manage,
      children:[
        {
          path:'SportsUpload',

          component:SportsUpload
        },
        {
          path:'SportsManage',

          component:SportsManage
        },
        {
          path:'SportsCharts',

          component:SportsCharts
        },
        {
          path:'SportsHotMap',

          component:SportsHotMap
        },
        {
          path:'SellsDash',

          component:SellsDash
        },
        {
          path:'ServerDash',

          component:ServerDash
        },
      ]
    },
    {

      path:'/Hospital/:id',
      name:"Hospital",
      component:Hospital
    },
    {
      path:'/Login',
      name:"Login",
      component:Login
    }
  ]
})
