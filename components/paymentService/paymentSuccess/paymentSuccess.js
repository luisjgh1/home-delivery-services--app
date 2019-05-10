/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'
import Banner from './banner'
import Header from './header'
import Info from './info'
import Success from './success'

class PaymentSuccess extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Banner/>
                <Info/>
                <ScrollView>
                    <Success/>
                </ScrollView>
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
});

export default PaymentSuccess