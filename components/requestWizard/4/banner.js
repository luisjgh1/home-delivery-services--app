/**
 * Created by Humbee on 25/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'

class Banner extends Component {

    render() {
        return (

            <LinearGradient
                style={styles.banner}
                colors={['#0fa4ac', '#4f58a5']}
                start={{x: 0, y: 1.7}}
                end={{x: 0.5, y: 0.15}}>

                <View style={styles.line}>
                </View>

                <View style={styles.circle1}>
                    <View style={styles.circle2}>
                        <View style={styles.circle3}>
                            <Text style={styles.stepText}>4</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.serviceType}>
                    <TouchableWithoutFeedback>
                        <Image
                            source={require('../images/icon_prev.png')}
                            style={styles.icon}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </TouchableWithoutFeedback>
                    <Text style={styles.typeText}>
                        {strings.confirm}
                    </Text>
                </View>

                <View style={styles.littleLine}>
                </View>
            </LinearGradient>

        )
    }
}

let styles = StyleSheet.create({
    banner: {
        minHeight: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0fa4ac',
        zIndex: -1,
    },
    gradientRight: {
        minHeight: 200,
        width: Dimensions.get('window').width /2,
        position: 'absolute',
        right: 0,
    },
    circle1: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 56,
        height: 56,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    circle2: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 46,
        height: 46,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    circle3: {
        backgroundColor: '#fff',
        width: 36,
        height: 36,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    stepText: {
        fontSize: 22,
        color: '#5a4ea3',
        fontFamily: 'Muli-ExtraBold',
    },
    line: {
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.5)',
        position: 'absolute',
        width: Dimensions.get('window').width / 2,
        left: 0,
    },
    serviceType: {
        paddingTop: 120,
        width: Dimensions.get('window').width,
    },
    typeText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Muli-Regular',
        textAlign: 'center',
    },
    littleLine: {
        height: 2,
        backgroundColor: '#fff',
        width: 50,
        marginTop: 8,
        borderRadius: 3,
    },
    icon: {
        width: 16,
        height: 16,
        position: 'absolute',
        left: 16,
        bottom: 3,
    },
});

export default Banner