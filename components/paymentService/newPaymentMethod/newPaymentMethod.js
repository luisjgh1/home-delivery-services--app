/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, ScrollView,TouchableWithoutFeedback} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'


class NewPaymentMethod extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <TextInput
                    style={[styles.input]}
                    placeholder={'0000 0000 0000 0000'}
                    underlineColorAndroid={'#d9d9d9'}
                    returnKeyType={'next'}
                >
                </TextInput>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonScan}>
                        <Text style={styles.btnScanText}>
                            {strings.scanCard.toUpperCase()}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.row}>
                    <View style={styles.flex}>
                        <TextInput
                            style={[styles.input]}
                            placeholder={'MM/AA *'}
                            underlineColorAndroid={'#d9d9d9'}
                            returnKeyType={'next'}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.flex}>
                        <TextInput
                            style={[styles.input]}
                            placeholder={'CVV *'}
                            underlineColorAndroid={'#d9d9d9'}
                            returnKeyType={'next'}
                        >
                        </TextInput>
                        <Image source={require('../images/icon_tdc_back.png')}
                               style={styles.tdc} resizeMode={'contain'}/>
                    </View>
                </View>

                <TextInput
                    style={[styles.input]}
                    placeholder={'Nombre y apellido *'}
                    underlineColorAndroid={'#d9d9d9'}
                    returnKeyType={'next'}
                >
                </TextInput>

                <View style={styles.row}>
                    <View style={styles.left}>

                    </View>
                    <View style={styles.right}>
                        <TextInput
                            style={[styles.input]}
                            placeholder={'No. de identificación *'}
                            underlineColorAndroid={'#d9d9d9'}
                            returnKeyType={'next'}
                        >
                        </TextInput>
                    </View>
                </View>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonNext}>
                        <Text style={styles.btnText}>
                            {strings.addMethod.toUpperCase()}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 35,
    },
    input: {
        height: 50,
        paddingTop: 5,
        fontSize: 16,
        color: '#2b2d30',
        fontFamily: 'Muli-Regular',
        marginBottom: 3,
    },
    buttonScan: {
        backgroundColor: '#0fa4ac',
        padding: 7,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
    },
    btnScanText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
    },
    buttonNext: {
        backgroundColor: '#c7e00b',
        padding: 7,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flex: {
        flex: 1,
    },
    tdc: {
        width: 25,
        height: 16,
        position: 'absolute',
        right: 0,
        top: 15,
    },
    left: {
        flex: 1
    },
    right: {
        flex: 3,
    },
});

export default NewPaymentMethod