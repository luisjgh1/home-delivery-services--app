/**
 * Created by lgonzalez on 23/08/17.
 */
import firebase from '../../lib/firebase'
export const isLogged = ()=> (
  firebase.auth().authenticated
)
