/**
 * Created by Humbee on 1/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback, Dimensions} from 'react-native'
import {strings} from '../../../locale/index'
import SignupFooter from '../signupFooter'
import { ActionCreators } from '../../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { helperPop } from '../../common/commonHelper'

class SelfieSuccess extends Component {
    constructor(props) {
        super()
        this.state = {}
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
                            source={require('./images/selfie_success.png')}
                            style={styles.selfie}
                            resizeMode={Image.resizeMode.contain}
                        >
                            <Image
                                source={require('./images/big_check.png')}
                                style={styles.check}
                                resizeMode={Image.resizeMode.contain}
                            />
                        </Image>

                        <Text style={styles.selfieText}>
                            {strings.selfieSuccess}
                        </Text>
                        <Text style={styles.selfieText}>
                            {strings.lookGood}
                        </Text>
                    </View>
                </ScrollView>

                <SignupFooter navigator={this.props.navigator}/>
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
        marginBottom: 40,
    },
    selfieText: {
        fontFamily: 'Muli-ExtraBold',
        color: '#41d399',
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 22,
    },
    check: {
        position: 'absolute',
        width: 70,
        height: 70,
        right: -35
    },

});

export default SelfieSuccess