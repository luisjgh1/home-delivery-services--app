/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet, Keyboard} from 'react-native'
import Banner from './banner'
import RegisterForm from './registerForm'
import SignupFooter from '../signupFooter'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {ActionCreators} from '../../../actions'

class Register extends Component {
    constructor(props) {
        super();
        this.state = {
          visibility: true
        }
    }

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    _keyboardDidShow = ()=> {
        this.setState({
          visibility: false
        })
    }

    _keyboardDidHide = ()=> {
        this.setState({
          visibility: true
        })
    }

    _renderFooter(navigator) {
        if (this.state.visibility) return <SignupFooter navigator={navigator}/>
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='never'>
                    <Banner
                      navigator={this.props.navigator}
                      uri={this.props.photo.uri}
                      setPhoto={this.props.setPhoto}/>
                    <RegisterForm
                      form={this.props.form}
                      registerErrors={this.props.registerErrors}
                      setRegisterField={this.props.setRegisterField}
                      setRegisterValidation={this.props.setRegisterValidation}/>
                </ScrollView>

                {this._renderFooter(this.props.navigator)}
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
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register}) => {
  return {form: register.registerForm, registerErrors: register.registerErrors, photo: register.photo}
}

export default connect(MapStateToProps, MapDispatchToProps)(Register)