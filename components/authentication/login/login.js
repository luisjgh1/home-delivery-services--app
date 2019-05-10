/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, Image, ScrollView} from 'react-native'
import Banner from './banner'
import Form from './form'
import Forgot from './forgot'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../../actions/index'

class Login extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps='handled' style={styles.container}>
                <Banner/>
                <Form error={this.props.error} login={this.props.login} navigator={this.props.navigator}/>
                <Forgot navigator={this.props.navigator}/>
            </ScrollView>
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


const MapReduxFunctions = (dispatch) => bindActionCreators(ActionCreators, dispatch);

const MapStateToProps = ({login}) => {
    return {
        error: login.err
    }
}

export default connect(MapStateToProps, MapReduxFunctions)(Login)


