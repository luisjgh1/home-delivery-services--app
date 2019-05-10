/**
 * Created by Humbee on 25/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../locale/index'

class Header extends Component {

    render() {
        return (
            <LinearGradient
                style={styles.banner}
                colors={['#0fa4ac', '#5a4ea3']}
                start={{x: -1.3, y: 1.5}}
                end={{x: 1, y: 0.5}}>

                <View sttyle={styles.left}>
                    <Image
                        source={require('./images/logo_ubi_welcome.png')}
                        style={styles.logo}
                        resizeMode={Image.resizeMode.contain}
                    />
                </View>
                <View sttyle={styles.center}>
                    <Text style={styles.titleText}>{strings.paymentService}</Text>
                </View>
                <TouchableOpacity sttyle={styles.right}>
                    {/*SOLO APARECE EN EL PAGO DE EXTRAS*/}
                    <Image
                        source={require('./images/icon_alert.png')}
                        style={styles.icon}
                        resizeMode={Image.resizeMode.contain}
                    />
                </TouchableOpacity>
            </LinearGradient>

        )
    }
}

let styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        paddingHorizontal: 20,
        paddingTop: 16,
        backgroundColor: '#0fa4ac'
    },
    gradientRight: {
        minHeight: 40,
        width: Dimensions.get('window').width / 2,
        position: 'absolute',
        right: 0,
    },
    left: {},
    center: {},
    right: {},
    logo: {
        width: 40,
        height: 25,
    },
    titleText: {
        fontFamily: 'Muli-Bold',
        fontSize: 20,
        color: '#fff',
    },
    icon: {
        width: 18,
        height: 18,
    },
});

export default Header