/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableWithoutFeedback, TextInput, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'


class EditProfile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.input]}
                    placeholder={strings.current}
                    underlineColorAndroid={'#d9d9d9'}
                    returnKeyType={'next'}
                >
                </TextInput>
                <TextInput
                    style={[styles.input]}
                    placeholder={strings.newPass}
                    underlineColorAndroid={'#d9d9d9'}
                    returnKeyType={'next'}
                >
                </TextInput>
                <TextInput
                    style={[styles.input]}
                    placeholder={strings.verifyPass}
                    underlineColorAndroid={'#d9d9d9'}
                    returnKeyType={'next'}
                >
                </TextInput>

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
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 36,
    },
    input: {
        height: 53,
        paddingTop: 5,
        fontSize: 16,
        color: '#9e9e9e',
        fontFamily: 'Muli-Regular',
    },
    buttonNext: {
        backgroundColor: '#c7e00b',
        padding: 15,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        minWidth: 290,
        height: 36,
        position: 'absolute',
        bottom: 50,
        width: Dimensions.get('window').width - 60,
    },
    btnNextText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
    },
});

export default EditProfile