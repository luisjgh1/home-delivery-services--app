/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import {isLogged} from '../authentication/helper'
import {goToWelcome, goToDashboard} from '../common/commonHelper'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../actions'
import {strings} from '../../locale'
import LinearGradient from 'react-native-linear-gradient';
import { logout } from '../../actions/authActions'

class Loading extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    isLogged() ? goToDashboard(this.props) : goToWelcome(this.props)
  }


  render() {
    return (
      <LinearGradient
        colors={['#0fa4ac', '#5a4ea3']}
        start={{x: 1.5, y: 0.1}}
        end={{x: -0.25, y: 0.5}}
        style={styles.linearGradient}>
          <Image
            source={require('./images/logo_ubi_welcome.png')}
            style={styles.logo}
            resizeMode={Image.resizeMode.contain}
          />
      </LinearGradient>
    )
  }
}

let styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  },
});


const MapActionCreators = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = (states) => {
  console.log('estados', states)
  return {}
}

export default connect(MapStateToProps, MapActionCreators)(Loading)