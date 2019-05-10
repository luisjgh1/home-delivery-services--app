/**
 * Created by lgonzalez on 23/08/17.
 */
import createReducers from '../lib/createReducers'
import * as types from '../actions/types'

const initialState = {
  err: '',
  userData: {}
}
export default auth = createReducers(initialState, {
  [types.SET_LOGIN_FORM](state, action) {
    let newState = {}
    newState.auth = action.auth
    return newState
  },
  [types.SET_LOGIN_ERROR](state, action) {
    return {
      ...state,
      err: action.err
    }
  },
  [types.SET_USER_DATA](state, action){
    return {
      ...state,
      userData: action.userData
    }
  }
})
