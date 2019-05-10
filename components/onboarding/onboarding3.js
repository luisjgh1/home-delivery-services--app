/**
 * Created by Humbee on 31/8/2017.
 */
import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet, Image, Platform, TouchableWithoutFeedback, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../locale/index'
import {goToWelcome, goToDashboard} from '../common/commonHelper'


class Onboarding3 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <LinearGradient
                colors={['#9fd448', '#41d399']}
                start={{x: 1.5, y: 0.1}}
                end={{x: -0.25, y: 0.5}}
                style={styles.linearGradient}>
                <View style={styles.border1}>
                    <View style={styles.border2}>
                        <Image
                            source={require('./images/gif-pasos-ubi-3.gif')}
                            style={styles.logo}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                </View>

                <Text style={styles.title}>{strings.enjoy.toUpperCase()}</Text>

                <Text style={styles.messageText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>

                <TouchableWithoutFeedback onPress={() => {
                    goToDashboard(this.props)
                }}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>{strings.ok.toUpperCase()}</Text>
                        <Image
                            source={require('./images/icon_arrow_right.png')}
                            style={styles.nextIcon}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </LinearGradient>
        )
    }
}

let styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'column',
    },
    border1: {
        borderRadius: (Platform.OS === 'ios') ? 50 : 120,
        borderWidth: 15,
        borderColor: '#97de90',
        marginBottom: 20,
    },
    border2: {
        borderRadius: (Platform.OS === 'ios') ? 50 : 110,
        borderWidth: 10,
        borderColor: '#b0e6ac',
        // backgroundColor: '#89d8c9',
        backgroundColor: '#92e6d6',
    },
    logo: {
        height: 180,
        width: 180,
    },
    title: {
        color: '#5a4ea3',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 28,
        textAlign: 'center',
    },
    messageText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        margin: 28,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#5a4ea3',
        padding: 10,
        marginVertical: 20,
        // marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        width: Dimensions.get('window').width - 80,
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
    },
    nextIcon: {
        width: 15,
        height: 15,
        marginLeft: 5,
    },
});

export default Onboarding3