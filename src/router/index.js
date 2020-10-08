import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  scrollBehavior (to, from, next) {
    if (to.hash) {
      return {selector: to.hash}
    }
    return {
      x: 0,
      y: 0
    }
  }
})
