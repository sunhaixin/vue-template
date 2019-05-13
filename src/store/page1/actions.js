import {
  CHANGE_TITLE_PAGE1,
  CHANGE_NAME_PAGE1,
  CHANGE_AGE_AGE1,
} from './mutations-types'

export default {
  changeTitle ({commit, state, rootState}, title) {
    console.log('----page1/actions/', state, rootState, title)
    commit(CHANGE_TITLE_PAGE1, title)
  },

  changeName ({commit, state}, name) {
    commit({type: CHANGE_NAME_PAGE1, name})
  },

  changeAge ({commit, state}, age) {
    commit(CHANGE_AGE_AGE1, age)
  }
}