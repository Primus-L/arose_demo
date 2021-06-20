import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EasyHPC from '@/views/EasyHPC.vue'
import SHCS from '@/views/SHCS.vue'
import JobSubmit from '@/views/JobSubmit.vue'
import JobList from '@/views/JobList.vue'
import JobInfo from '@/views/JobInfo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/easyhpc',
    name:'EasyHPC',
    component:EasyHPC
  },
  {
    path:'/appcenter',
    name:'AppCenter',
    component:SHCS
  },
  {
    path:'/jobsubmit',
    name:'JobSubmit',
    component:JobSubmit,
    children:[
      {
        path:'',
        component:JobList,
      },
      {
        path:':jobId',
        component:JobInfo,
        name:'JobInfo'
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
