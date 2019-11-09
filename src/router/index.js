import Vue from 'vue'
import Router from 'vue-router'
import Right from '../components/Right.vue'
import RightFood from '../components/RightFood.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ss',
      components: {
        default: Right
      } 
    },
    { 
      path: '/ms',
      component: RightFood
    }
  ]
})
