/**
 * Created by lgonzalez on 11/12/17.
 */
import createReducers from '../lib/createReducers'
import { FETCH_REQUESTS, SET_REQUEST, FETCH_CONFIRMED_REQUESTS } from '../actions/types'

const initialState = {
  requests: [],
  confirmedRequests: [],
  request: {}
}

export default dashboardReducer = createReducers(initialState, {
  [FETCH_REQUESTS](state, action) {
    return {
      ...state,
      requests: action.requests
    }
  },
  [SET_REQUEST](state, action) {
    return {
      ...state,
      request: action.request
    }
  },
  [FETCH_CONFIRMED_REQUESTS](state, action) {
    return {
      ...state,
      confirmedRequests: action.requests
    }
  }
})