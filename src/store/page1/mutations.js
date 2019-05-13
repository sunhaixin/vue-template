import {
  CHANGE_TITLE_PAGE1,
  CHANGE_NAME_PAGE1,
  CHANGE_AGE_AGE1,
} from './mutations-types'

export default {
  [CHANGE_TITLE_PAGE1](state, title){
    state.title = title
  },

  [CHANGE_NAME_PAGE1](state, name) {
    state.name = name
  },

  [CHANGE_AGE_AGE1](state, age) {
    state.age = age
  }
}