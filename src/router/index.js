import Vue from 'vue'
import Router from 'vue-router'
import boddy from '../components/boddy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'boddy',
      component:boddy
    }
   
  ]
})
