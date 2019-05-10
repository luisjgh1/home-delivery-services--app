/**
 * Created by lgonzalez on 30/08/17.
 */
import * as Types from './types'
import firebase from '../lib/firebase'
import { goToLogin } from '../components/common/commonHelper'

export const goToNextStep = (fields)=> {
  return (dispatch)=> {
    dispatch({type: Types.REGISTER_NEXT_STEP, fields})
  }
}

export const goToPrevious = (fields)=> {
  return (dispatch)=> {
    dispatch({type: Types.REGISTER_PREV_STEP, fields})
  }
}

export const resetSteps = ()=> {
  return (dispatch) => {
    dispatch({type: Types.REGISTER_RESET_STEPS})
  }
}

export const setRegisterField = (obj)=> {
  return (dispatch) => {
    dispatch({type: Types.SET_REGISTER_FIELD, ...obj})
  }
}

export const setBasicField = (obj)=> {
  return (dispatch) => {
    dispatch({type: Types.SET_BASIC_FIELD, ...obj})
  }
}

export const setPhoto = (obj)=> {
  return (dispatch) => {
    dispatch({type: Types.SET_REGISTER_PHOTO, ...obj})
  }
}

export const setRegisterSelfie = (obj)=> {
  return (dispatch) => {
    dispatch({type: Types.SET_REGISTER_SELFIE, ...obj})
  }
}

export const setRegisterValidation = (bool)=> {
  return dispatch => {
    dispatch({type: Types.SET_REGISTER_VALIDATION, validation: bool})
  }
}