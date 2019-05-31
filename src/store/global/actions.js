import {
  CHANGE_TEST_TEXT
} from './mutations-types'

export default {
  changeTestText ({ commit }, testText) {
    commit(CHANGE_TEST_TEXT, testText)
  }
}
