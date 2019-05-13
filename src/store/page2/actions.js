import {
  CHANGE_TITLE_PAGE2,
  CHANGE_NAME_PAGE2,
  CHANGE_AGE_PAGE2,
} from './mutations-types'

export default {
  changeTitle ({commit, state}, title) {
    commit(CHANGE_TITLE_PAGE2, title)
  },

  changeName ({commit, state}, name) {
    commit({type: CHANGE_NAME_PAGE2, name})
  },

  changeAge ({commit, state}, age) {
    commit(CHANGE_AGE_PAGE2, age)
  }
}