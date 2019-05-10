/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Keyboard} from 'react-native'
import BasicForm from './basicForm'
import SignupFooter from '../signupFooter'
import { helperPop } from '../../common/commonHelper'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionCreators} from '../../../actions'

class Basic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: true
        }
        props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
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
                <ScrollView>
                    <BasicForm
                      basicForm={this.props.basicForm}
                      basicErrors={this.props.basicErrors}
                      setBasicField={this.props.setBasicField}
                    />
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
    return {
        basicForm: register.basicForm,
        basicErrors: register.basicErrors
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Basic)