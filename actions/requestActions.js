import * as Types from './types'
import firebase from '../lib/firebase'

const databaseRef = firebase.database().ref()

export const setCategory = (category)=> {
  return (dispatch )=> dispatch({type: Types.SET_CATEGORY, category})
}

export const setServices = (services)=> {
  return (dispatch)=> dispatch({type: Types.SET_SERVICES, services})
}

export const setAddressField = (field)=> {
  return dispatch=> dispatch({type: Types.SET_ADDRESS_FIELD, ...field})
}

export const setRequestDescription = (description)=> {
  return dispatch=> dispatch({type: Types.SET_REQUEST_DESCRIPTION, description})
}

export const pushRequest = (requestObj)=> {
  return async (dispatch)=> {
    try {
      const key = await databaseRef.child('requests').push().key
      const newObj = {...requestObj, id: key}
      databaseRef.child('requests/'+key).set({
         ...newObj
      })
      dispatch({type: Types.SET_REQUEST_DESCRIPTION, description: 'lll'})
    } catch (err) {
      dispatch({type: Types.SET_REQUEST_DESCRIPTION, description: 'lll'})    
    }
  }
}

export const cancelRequest = (id)=> {
  return async (dispatch)=> {
    try{
      const cancel = await databaseRef.child('/requests/'+id.trim()).update({status: 'cancelled'})
    } catch (err) {
      console.log('err')
    }
  }
}

export const confirmRequest = (id)=> {
  return async (dispatch)=> {
    try{
      const cancel = await databaseRef.child('/requests/'+id.trim()).update({status: 'confirmed'})
    } catch (err) {
      console.log('err')
    }
  }
}

export const getRequests = ()=> {
  return async (dispatch)=> {
    try {
      const pendingRequests = await databaseRef.child('requests').orderByChild('idUser').equalTo('123').once('value')
      const values = pendingRequests.val() 
      const requestArr = values ? Object.keys(pendingRequests.val()).map(e=> values[e]) : []
      console.log(requestArr)
      
    } catch (err) {
      console.log(err)
    }
  }
}

export const getProviderDetails = (idProvider)=> {
  return async (dispatch)=> {
    try {
      const provider = await databaseRef.child('/providers/'+ idProvider)
      const providerInfo = pendingRequests.val() 
      console.log(providerInfo)
    } catch (err) {
      console.log(err)
    }
  }
}