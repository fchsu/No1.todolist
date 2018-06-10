import Vue from 'vue'
import Router from 'vue-router'
import MyTasks from '@/components/MyTasks'
import InProgress from '@/components/InProgress'
import Completed from '@/components/Completed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MyTasks',
      name: 'MyTasks',
      component: MyTasks
    },
    {
      path: '/InProgress',
      name: 'InProgress',
      component: InProgress
    },
    {
      path: '/Completed',
      name: 'Completed',
      component: Completed
    }
  ]
})
