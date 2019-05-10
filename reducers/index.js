import { combineReducers} from 'redux'
import loginFormReducer from './loginFormReducer'
import registerReducer from './registerReducer'
import recoveryReducer from './recoveryReducer'
import requestReducer from './requestReducer'
import dashboardReducer from './dashboardReducer'

export default combineReducers(Object.assign({},
  {
    login: loginFormReducer,
    register: registerReducer,
    recovery: recoveryReducer,
    request: requestReducer,
    dashboard: dashboardReducer
  }
))