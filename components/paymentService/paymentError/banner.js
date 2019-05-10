/**
 * Created by Humbee on 28/8/2017.
 */
import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


export default class Banner extends Component {

    render() {
        return (
            <LinearGradient
                style={styles.banner}
                colors={['#0fa4ac', '#5a4ea3']}
                start={{x: -0.1, y: 1.5}}
                end={{x: 1, y: 0.1}}>
            </LinearGradient>

        )
    }
}

let styles = StyleSheet.create({
    banner: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 80,
        width: 80,
    },
});
