import {
  CHANGE_TEST_TEXT,
} from './mutations-types'

export default {
  [CHANGE_TEST_TEXT] (state, testText){
    state.testText = testText
  }
}