/**
 * Created by Humbee on 1/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback, Dimensions} from 'react-native'
import {strings} from '../../../locale/index'
import SignupFooter from '../signupFooter'
import { ActionCreators } from '../../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { helperPop, goToCamera } from '../../common/commonHelper'
import { SELFIE_SUCCESS } from '../../../screens/navigationConstants'

class Selfie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: true
    }
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event){
    if (event.id === 'backPress') {
      console.log('backpress')
      helperPop(this.props, false, 'slide-horizontal')
      this.props.goToPrevious()
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <ScrollView style={styles.content}>
              <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('./images/selfie_example.png')}
                    style={styles.selfie}
                    resizeMode={Image.resizeMode.contain}
                  />

                  <Text style={styles.selfieText}>
                    {strings.takeSelfie}
                  </Text>

                  <TouchableWithoutFeedback
                    onPress={()=> {
                      goToCamera(this.props.navigator, {push: {screen: 'signup.SelfieSuccess', animationType: 'slide-horizontal'}}, this.props.setRegisterSelfie)
                    }}
                  >
                      <View style={styles.btnLogin}>
                          <Text style={styles.loginText}>{strings.selfieBtn.toUpperCase()}</Text>
                      </View>
                  </TouchableWithoutFeedback>
              </View>
          </ScrollView>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  content: {
    padding: 30,
    marginTop: 60,
  },
  selfie: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  selfieText: {
    fontFamily: 'Muli-Regular',
    color: '#2b2d30',
    textAlign: 'center',
    lineHeight: 23,
    fontSize: 14,
  },
  btnLogin: {
    backgroundColor: '#c7e00b',
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    width: Dimensions.get('window').width - 80,
  },
  loginText: {
    color: '#fff',
    fontFamily: 'Muli-ExtraBold',
    fontSize: 16,
  },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)
const MapStateToProps = (state) => {
  return {}
}
export default connect(MapStateToProps, MapDispatchToProps)(Selfie)