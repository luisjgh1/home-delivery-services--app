/**
 * Created by lgonzalez on 11/12/17.
 */
import firebase from '../lib/firebase'
import { FETCH_REQUESTS, SET_REQUEST, FETCH_CONFIRMED_REQUESTS } from './types'

let database = firebase.database()

export const fetchRequests = (id)=> {
  console.log(id)
  return async dispatch => {
    database.ref('/requests/').orderByChild('userId').equalTo(id).on('value', (snapshot)=> {
      const result = snapshot.val()
      return dispatch({
        type: FETCH_REQUESTS,
        requests: result ? Object.keys(result)
          .filter(e=> result[e].status === 'pending')
            .map(e=> { return result[e] })
        : []
      })
    })
  }
}

export const fetchConfirmedRequests = (id)=> {
  console.log(id)
  return async dispatch => {
    database.ref('/requests/').orderByChild('userId').equalTo(id).on('value', (snapshot)=> {
      const result = snapshot.val()
      return dispatch({
        type: FETCH_CONFIRMED_REQUESTS,
        requests: result ? Object.keys(result)
          .filter(e=> result[e].status === 'confirmed')
            .map(e=> { return result[e] })
        : []
      })
    })
  }
}

export const setRequest = (request)=> {
  return dispatch => {
    return dispatch({type: SET_REQUEST,  request })
  }
}
