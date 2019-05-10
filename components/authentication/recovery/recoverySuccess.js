/**
 * Created by Humbee on 29/8/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {strings} from '../../../locale/index'
import Banner from './banner'
import {goToLogin } from '../../common/commonHelper'

class RecoverySuccess extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
      this.props.navigator.setOnNavigatorEvent((e)=> {
        if (e.id === 'willDisappear') {
          this.props.navigator.popToRoot({
            animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the popToRoot have different transition animation (optional)
          })
        }
       //console.log(JSON.stringify(e))
      })
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                <Banner/>
                <View style={styles.form}>
                    <Image
                        source={require('./images/illustration_email_sent.png')}
                        style={styles.icon}
                        resizeMode={Image.resizeMode.contain}
                    />

                    <Text style={styles.titleText}>
                        {strings.titleRecoverySuccess}
                    </Text>

                    <Text style={styles.messageText}>
                        {strings.emailSent}
                    </Text>
                </View>
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
    form: {
        backgroundColor: '#fff',
        margin: 40,
        padding: 15,
        paddingBottom: 20,
        marginTop: -50,
        elevation: 20,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 130,
        height: 130,
    },
    titleText: {
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#5a4ea3',
        margin: 5,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 22,
    },
    messageText: {
        fontFamily: 'AvenirLTStd-Book',
        color: '#2b2d30',
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 14,
    },
});

export default RecoverySuccess