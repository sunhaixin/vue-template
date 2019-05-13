import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'page1',
      path: '/page1',
      component: Page1,
      children: [
        {
          name: 'page2',
          path: '/page1/page2',
          component: Page2
        }
      ]
    },
  ]
})
