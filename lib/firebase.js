/**
 * Created by lgonzalez on 23/08/17.
 */
import fire from 'react-native-firebase'

const configurationOptions = {
    debug: false,
    persistence: false,
    errorOnMissingPlayServices: false,
    promptOnMissingPlayServices: false
}

const firebase = fire.initializeApp(configurationOptions)
export default firebase