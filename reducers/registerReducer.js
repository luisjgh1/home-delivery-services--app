/**
 * Created by lgonzalez on 30/08/17.
 */
import createReducers from '../lib/createReducers'
import * as types from '../actions/types'

const initialState = {
  step: 1,
  registerForm: {
    email: '',
    password: '',
    touched: false
  },
  registerErrors: {
    email: [null],
    password: [null]
  },
  basicErrors: {
    name: [null],
    lastName: [null],
    id: [null],
    address: [null],
    phoneNumber:[null]
  },
  basicForm: {
    name: '',
    lastName: '',
    typeid: 'CIV',
    id: '',
    gender: 'male',
    address: '',
    phoneNumber: '',
    acceptTerms: true
  },
  selfie: {
    uri: ''
  },
  photo: {
    uri: ''
  },
  validation: false
}
export default createReducers(initialState, {
  [types.REGISTER_NEXT_STEP](state, action) {
    return {
      ...state,
      step: state.step + 1
    }
  },
  [types.REGISTER_PREV_STEP](state, action) {
    return {
      ...state,
      step: state.step - 1
    }
  },
  [types.REGISTER_RESET_STEPS](state, action) {
    return {
      ...state,
      step: 1
    }
  },
  [types.SET_REGISTER_FIELD](state, action) {
    const field = Object.keys(action).filter(e=> (e != 'errors' && e !='type'))
    return {
      ...state,
      registerForm: {
        ...state.registerForm,
        [field]: action[field]
      },
      registerErrors: {
        ...state.registerErrors,
        [field]: action.errors
      }
    }
  },
  [types.SET_BASIC_FIELD](state, action) {
    const field = Object.keys(action).filter(e => (e != 'errors' && e != 'type'))
    return action.errors ?  {
      ...state,
      basicForm: {
        ...state.basicForm,
        [field]: action[field]
      },
      basicErrors: {
        ...state.basicErrors,
        [field]: action.errors
      }
    } : {
      ...state,
      basicForm: {
        ...state.basicForm,
        [field]: action[field]
      },
    }
  },
  [types.SET_REGISTER_PHOTO](state, action) {
    return {
      ...state,
      photo: {
        uri:  action.uri
      }
    }
  },
  [types.SET_REGISTER_SELFIE](state, action) {
    return {
      ...state,
      selfie: {
        uri:  action.uri
      }
    }
  },
  [types.SET_REGISTER_VALIDATION](state, action){
    return {
      ...state,
      validation: action.validation
    }
  }
})
