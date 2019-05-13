import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import home from './home'
import page1 from './page1'
import page2 from './page2'

Vue.use(Vuex)

const state = {
  title: ''
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    home,
    page1,
    page2,
  }
})