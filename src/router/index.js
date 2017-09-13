import Vue from 'vue'
import Router from 'vue-router'
import Mcenter from '../components/Mcenter.vue'
import Manage from '../components/Manage.vue'
import Index from '../components/Index.vue'
import GZJQ from '../components/MCenter/GZJQ.vue'

Vue.use(Router);

export default new Router({
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
      component:Manage
    },{
      path:'GZJQ',
      component:GZJQ
    }
  ]
})
