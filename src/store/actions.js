import {
  CHANGE_TITLE_GLOBAL,
} from './mutations-types'

export default {
  changeTitleGlobal ({commit, state}, title) {
    commit(CHANGE_TITLE_GLOBAL, title)
  }
}