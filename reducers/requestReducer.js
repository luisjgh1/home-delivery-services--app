/**
 * Created by lgonzalez on 24/11/17.
 */
import createReducers from '../lib/createReducers'
import * as types from '../actions/types'

const initialState =  {
  category: {},
  subCategoryStep: [],
  services: [],
  addressFields: {
    address: '',
    refPoint: ''
  },
  description: 'etv'
}

export default createReducers(initialState, {
  [types.SET_CATEGORY](state, action) {
    return {
      ...state,
      category: action.category
    }
  },
  [types.SET_SUB_CATEGORY](state, action) {
    return {
      ...state,
      subCategories: action.subCategories
    }
  },
  [types.SET_SERVICES](state, action){
    return {
      ...state,
      services: action.services
    }
  },
  [types.SET_ADDRESS_FIELD](state, action){
    const field = Object.keys(action).filter(e=> (e !='type'))
    return {
      ...state,
      addressFields: {
        ...state.addressFields,
        [field]: action[field]
      }
    }
  },
  [types.SET_REQUEST_DESCRIPTION](state, action){
    return { 
      ...state, 
      description: action.description
    }
  },
  [types.SET_PROVIDER_ID](state, action){
    return {
      ...state,
      id: action.id 
    }
  }
})