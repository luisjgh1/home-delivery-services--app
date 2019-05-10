/**
 * Created by lgonzalez on 07/09/17.
 */
import createReducers from '../lib/createReducers'
import * as types from '../actions/types'

const initialState = {
  err: ''
}

export default recovery = createReducers(initialState, {
  [types.SET_RECOVERY_ERROR](state, action) {
    return {
      ...state,
      err: action.err
    }
  },
  [types.SET_RECOVERY_REQUEST](state, action) {
    return {
      ...state,
      activity: action.activity
    }
  },
})