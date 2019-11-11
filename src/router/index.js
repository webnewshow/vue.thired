import Vue from 'vue'
import Router from 'vue-router'
import Right from '../components/Right.vue'
import RightFood from '../components/RightFood.vue'
import City from '../components/city.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // 默认首页
    {
      path:'/',
      //redirect 是重新定向
      redirect:'/ss'
    },
    {
      path: '/ss',
      components: {
        default: Right
      },
      children:[{
        path:'/ss/taiwan',
        component:City
      },{
        path:'/ss/beijing',
        component:City
      }]    
    },
    { 
      path: '/ms',
      component: RightFood
    }
  ]
})
