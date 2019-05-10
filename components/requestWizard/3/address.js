/**
 * Created by Humbee on 8/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'

class Address extends Component {
    constructor(props){
        super(props)
        this.state = {
            address: props.addressFields.address, 
            refPoint: props.addressFields.refPoint
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.input]}
                    placeholder={'Ingresa tu dirrecion...'}
                    underlineColorAndroid={'#d9d9d9'}
                    returnKeyType={'next'}
                    value={this.state.address}
                    onChangeText={(value) =>{
                      this.setState({
                          address: value,
                        }, ()=> this.props.setAddressField({address: value})
                      )
                    }}
                >
                </TextInput>
                <TextInput
                    style={[styles.input]}
                    placeholder={'Punto de referencia...'}
                    underlineColorAndroid={'#d9d9d9'}
                    returnKeyType={'next'}
                    value={this.state.refPoint}
                    onChangeText={(value) =>{
                      this.setState({
                          refPoint: value,
                        }, ()=> this.props.setAddressField({refPoint: value})
                      )
                    }}
                >
                </TextInput>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        paddingHorizontal: 35,
        paddingVertical: 20,
        backgroundColor: '#fff',
        elevation: 10,
        marginBottom: 30,
        // borderWidth: 1
    },
    input: {
        height: 50,
        paddingTop: 5,
        fontSize: 16,
        color: '#9e9e9e',
        fontFamily: 'Muli-Regular',
        marginBottom: 3,
    },
});

export default Address