import {
  CHANGE_TITLE_HOME,
  CHANGE_NAME_HOME,
  CHANGE_AGE_HOME,
} from './mutations-types'

export default {
  [CHANGE_TITLE_HOME](state, title){
    state.title = title
  },

  [CHANGE_NAME_HOME](state, name) {
    state.name = name
  },

  [CHANGE_AGE_HOME](state, age) {
    state.age = age
  }
}