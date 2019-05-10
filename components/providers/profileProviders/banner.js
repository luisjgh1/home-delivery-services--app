/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from "react";
import {Button, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {strings} from "../../../locale/index";
import Triangle from './triangle'


export default class Banner extends Component {

    render() {
        return (
            <Image source={{uri:'http://media.rumbacaracas.com/uploads/events/2017/06/28/Wonder-Woman-Movie-Sexism-Feminism.jpg'}}
                   style={styles.banner} resizeMode={'cover'}>
                <Triangle
                    width={Dimensions.get('window').width}
                    height={130}
                    color={'#fff'}
                    direction={'right'}
                    style={{position: 'absolute', bottom: -65}}
                />
            </Image>
        )
    }
}

let styles = StyleSheet.create({
    banner: {
        height: 340,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    logo: {
        height: 60,
        width: 60,
        marginBottom: 10,
    },
    uploadText: {
        color: '#fff',
        fontFamily: 'Muli-Regular',
        fontSize: 16,
    },
});