import Vue from 'vue'
import Router from 'vue-router'
import Mcenter from '../components/Mcenter.vue'
import Manage from '../components/Manage.vue'
import Index from '../components/Index.vue'
import Hospital from '../components/Hospital.vue'
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
    },
    {
      path:'/Hospital/:id',
      name:"Hospital",
      component:Hospital
    }
  ]
})
