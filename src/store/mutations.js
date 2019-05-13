import {
  CHANGE_TITLE_GLOBAL,
} from './mutations-types'

export default {
  [CHANGE_TITLE_GLOBAL](state, title) {
    state.title = title
  }
}