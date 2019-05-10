/**
 * Created by lgonzalez on 23/08/17.
 */
import * as authActions  from './authActions'
import * as registerActions from './registerActions'
import * as requestActions from './requestActions'
import * as dashboardActions from './dashboardActions'

export const ActionCreators = Object.assign({},
  authActions,
  registerActions,
  requestActions,
  dashboardActions)