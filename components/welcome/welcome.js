/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native'
import {strings} from '../../locale/index'
import {goToLogin, goToRegister, goToOnboarding1} from '../common/commonHelper'
import LinearGradient from 'react-native-linear-gradient';


class Welcome extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <LinearGradient
                colors={['#0fa4ac', '#5a4ea3']}
                start={{x: 1.5, y: 0.1}}
                end={{x: -0.25, y: 0.5}}
                style={styles.linearGradient}>
                <Text style={styles.welcomeText}>
                    {strings.welcome}
                </Text>
                <Image
                    source={require('./images/logo_ubi_welcome.png')}
                    style={styles.logo}
                    resizeMode={Image.resizeMode.contain}
                />

                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.btnLogin} title={strings.login} onPress={() => {
                        goToLogin(this.props)
                    }}>
                        <Text style={styles.loginText}>{strings.login}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSignUp} title={strings.register} onPress={() => {
                        goToRegister(this.props)
                    }}>
                        <Text style={styles.signUpText}>{strings.register}</Text>
                    </TouchableOpacity>
                </View>
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
    welcomeText: {
        color: '#fff',
        fontFamily: 'Muli-Regular',
        fontSize: 22,
    },
    logo: {
        height: 150,
        width: 150,
    },
    actionContainer: {
        marginTop: 50,
    },
    btnLogin: {
        borderBottomWidth: 0.8,
        borderBottomColor: '#fff',
        width: Dimensions.get('window').width - 80,
        marginBottom: 20,
    },
    loginText: {
        color: '#c7e00b',
        fontFamily: 'Muli-Bold',
        fontSize: 22,
        textAlign: 'center',
        paddingBottom: 20,
    },
    btnSignUp: {

    },
    signUpText: {
        color: '#fff',
        fontFamily: 'Muli-Regular',
        fontSize: 22,
        textAlign: 'center',
    },
});

export default Welcome