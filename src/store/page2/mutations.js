import {
  CHANGE_TITLE_PAGE2,
  CHANGE_NAME_PAGE2,
  CHANGE_AGE_PAGE2,
} from './mutations-types'

export default {
  [CHANGE_TITLE_PAGE2](state, title){
    state.title = title
  },

  [CHANGE_NAME_PAGE2](state, name) {
    state.name = name
  },

  [CHANGE_AGE_PAGE2](state, age) {
    state.age = age
  }
}