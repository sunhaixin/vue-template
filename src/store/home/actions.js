import {
  CHANGE_TITLE_HOME,
  CHANGE_NAME_HOME,
  CHANGE_AGE_HOME,
} from './mutations-types'

export default {
  changeTitle ({commit, state, rootState}, title) {
    console.log('----home/actions/', state, rootState, title)
    commit(CHANGE_TITLE_HOME, title)
  },

  changeName ({commit, state}, name) {
    commit({type: CHANGE_NAME_HOME, name})
  },

  changeAge ({commit, state}, age) {
    commit(CHANGE_AGE_HOME, age)
  }
}