import {Platform} from 'react-native'
import {Navigation} from 'react-native-navigation'
import { registerScreens } from './screens'
import * as NavConstants from './screens/navigationConstants'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})
const createStoreWithMiddleware = applyMiddleware(thunk, loggerMiddleware)(createStore)

const store = createStoreWithMiddleware(reducers);

registerScreens(store, Provider);
// registerScreenVisibilityListener();
// this will start our app
Navigation.startSingleScreenApp({
  screen: {
    screen: NavConstants.LOADING,
    title: 'Loading',
    navigatorStyle: {
      navBarHidden: true
    },
    navigatorButtons: {}
  }
})