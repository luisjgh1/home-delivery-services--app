/**
 * Created by Humbee on 25/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'

class Header extends Component {

    render() {
        return (
            <LinearGradient
                style={styles.banner}
                colors={['#0fa4ac', '#4f58a5']}
                start={{x: -1, y: 1.6}}
                end={{x: 0.4, y: -0.1}}>

                <View sttyle={styles.left}>
                    <Image
                        source={require('../images/logo_ubi_welcome.png')}
                        style={styles.logo}
                        resizeMode={Image.resizeMode.contain}
                    />
                </View>
                <View sttyle={styles.center}>
                    <Text style={styles.titleText}>{strings.requestService}</Text>
                </View>
                <View sttyle={styles.right}>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/icon_remove_wrong_cancel.png')}
                            style={styles.icon}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </TouchableOpacity>
                </View>
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
        width: 19,
        height: 19,
    },
});

export default Header