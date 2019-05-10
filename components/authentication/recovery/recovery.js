/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Banner from './banner'
import  RecoveryForm from './recoveryForm'
import { ActionCreators } from '../../../actions'
import {goToRecoverySuccess} from '../../common/commonHelper'
import firebase from '../../../lib/firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Recovery extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <ScrollView style={styles.container} keyboardShouldPersistTaps='always'>

                <Banner/>
                <RecoveryForm error={this.props.error} recovery={this.props.recovery} activity={this.props.activity} navigator={this.props.navigator}/>

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

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)
const MapStateToProps = ({recovery}) => {
  return {
      error: recovery.err,
      activity: recovery.activity
  }
}
export default connect(MapStateToProps, MapDispatchToProps)(Recovery)