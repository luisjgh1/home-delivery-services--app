/**
 * Created by Humbee on 25/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

class Banner2 extends Component {

    render() {
        return (
            <LinearGradient
                style={styles.banner}
                colors={['#0fa4ac', '#4f58a5']}
                start={{x: 0, y: 1.5}}
                end={{x: 0.8, y: -1}}>
            </LinearGradient>

        )
    }
}

let styles = StyleSheet.create({
    banner: {
        minHeight: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0fa4ac',
        zIndex: -1,
    },
});

export default Banner2