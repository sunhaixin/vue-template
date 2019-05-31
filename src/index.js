import Vue from 'vue'
import App from '@view/App.vue'
import router from '@src/router'
import store from '@src/store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
