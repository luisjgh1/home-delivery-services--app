import * as Types from './types'
import firebase from '../lib/firebase'
import { goToRecoverySuccess, goToOnboarding1 } from '../components/common/commonHelper'

export const login = (email, password, navigator)=> {
  return async (dispatch) => {
    try {
      let login = await firebase.auth().signInWithEmailAndPassword(email, password)
      let uid = firebase.auth().currentUser.uid
      let userData = await firebase.database().ref('/user/').orderByChild('id').equalTo(uid).once('value')
      dispatch({ type: Types.SET_USER_DATA, userData: userData.val()[uid] })
      goToOnboarding1(navigator)
      return false
    } catch(err) {
      console.log(err)
      dispatch({type: Types.SET_LOGIN_ERROR, err})
      return true
    }
  }
}

export const logout = (props) => {
  return async () => {
    try {
      const auth = await firebase.auth().signOut()
      goToLogin(props)
    } catch (err) {
      dispatch({type: Types.SET_LOGIN_ERROR, err})
    }
  }
}

export const recovery = (props, email) => {
  return async (dispatch) => {
    try {
      dispatch({type: Types.SET_RECOVERY_REQUEST, activity: true})
      await firebase.auth().sendPasswordResetEmail(email)
      dispatch({type: Types.SET_RECOVERY_REQUEST, activity: false})
      goToRecoverySuccess(props)
      //goToRecoverySuccess(this.props)
    }
    catch(err) {
      dispatch({type: Types.SET_RECOVERY_REQUEST, activity: false})
      dispatch({type: Types.SET_RECOVERY_ERROR, err})
    }
  }
}
