/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, TextInput, Picker, TouchableWithoutFeedback} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'
import Form from './form'


class EditProfile extends Component {


    render() {
        return (
            <View>
                <View style={styles.title}>
                    <Text style={styles.titleInfoText}>{strings.basicInfo}</Text>
                </View>

                <View style={styles.form}>
                    <View>
                        <TextInput
                            style={[styles.input]}
                            placeholder={'Nombre'}
                            underlineColorAndroid={'#d9d9d9'}
                            returnKeyType={'next'}
                        >
                        </TextInput>
                        <Image source={require('../images/icon_lock.png')}
                               style={styles.icon} resizeMode={'contain'}/>
                    </View>
                    <View>
                        <TextInput
                            style={[styles.input]}
                            placeholder={'Apellido'}
                            underlineColorAndroid={'#d9d9d9'}
                            returnKeyType={'next'}
                        >
                        </TextInput>
                        <Image source={require('../images/icon_lock.png')}
                               style={styles.icon} resizeMode={'contain'}/>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <View style={styles.picker}>
                                <Picker>
                                    <Picker.Item key={1} label="CI-V" value="CI-V"
                                                 color="#2b2d30"/>
                                    <Picker.Item key={2} label="CI-E" value="CI-E"
                                                 color="#2b2d30"/>
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.right}>
                            <TextInput
                                style={[styles.input]}
                                placeholder={'12345678'}
                                underlineColorAndroid={'#d9d9d9'}
                                returnKeyType={'next'}
                                editable={false}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            style={[styles.input]}
                            placeholder={'Direccion'}
                            underlineColorAndroid={'#d9d9d9'}
                            returnKeyType={'next'}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <View style={styles.picker}>
                                <Picker>
                                    <Picker.Item key={1} label="+58" value="+58"
                                                 color="#2b2d30"/>
                                    <Picker.Item key={2} label="CI-E" value="CI-E"
                                                 color="#2b2d30"/>
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.right}>
                            <TextInput
                                style={[styles.input]}
                                placeholder={'1234567890'}
                                underlineColorAndroid={'#d9d9d9'}
                                returnKeyType={'next'}
                                editable={false}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            style={[styles.input]}
                            placeholder={'Correo'}
                            underlineColorAndroid={'#d9d9d9'}
                            returnKeyType={'next'}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <TextInput
                            style={[styles.input]}
                            placeholder={'*********'}
                            underlineColorAndroid={'#d9d9d9'}
                            returnKeyType={'next'}
                            editable={false}
                        >
                        </TextInput>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>
                                Modificar
                            </Text>
                            <Image source={require('../images/icon_arrow_right_small.png')}
                                   style={styles.arrow} resizeMode={'contain'}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.title}>
                    <View style={styles.left2}>
                        <Text style={styles.titleInfoText}>{strings.method}</Text>
                    </View>
                    <TouchableOpacity style={styles.right2}>
                        <Text style={styles.btnText}>
                            Administrar
                        </Text>
                        <Image source={require('../images/icon_arrow_right_small.png')}
                               style={styles.arrow} resizeMode={'contain'}/>
                    </TouchableOpacity>
                </View>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonNext}>
                        <Text style={styles.btnNextText}>
                            {strings.saveChanges.toUpperCase()}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {},
    title: {
        paddingVertical: 16,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleInfoText: {
        fontFamily: 'Muli-Bold',
        color: '#2b2d30',
        fontSize: 16,
    },
    form: {
        marginHorizontal: 36,
        marginBottom: 20,
    },
    input: {
        height: 58.6,
        paddingTop: 5,
        fontSize: 16,
        color: '#9e9e9e',
        fontFamily: 'Muli-Regular',
    },
    icon: {
        height: 18,
        width: 14,
        position: 'absolute',
        right: 14,
        top: 14,
    },
    row: {
        flexDirection: 'row',
        // alignItems: 'center'
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 2,
    },
    picker: {
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 0,
        bottom: 25,
    },
    btnText: {
        fontSize: 14,
        color: '#0fa4ac',
        fontFamily: 'Muli-Bold',
    },
    arrow: {
        width: 11,
        height: 11,
        marginTop: 2,
        marginLeft: 5,
    },
    left2: {
        flex: 2,
    },
    right2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonNext: {
        backgroundColor: '#c7e00b',
        padding: 15,
        marginVertical: 40,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        minWidth: 290,
        height: 36,
    },
    btnNextText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
    },
});

export default EditProfile
