/**
 * Created by Humbee on 28/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback} from 'react-native'
import {strings} from '../../../locale/index'

class SendComments extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../images/icon_idea.png')}
                           style={styles.icon} resizeMode={'contain'} />
                    <Text style={styles.ideaText}>
                        {strings.haveIdea}
                    </Text>
                </View>

                <View>
                    <TextInput
                        style={[styles.input]}
                        placeholder={strings.allEyes}
                        underlineColorAndroid={'#d9d9d9'}
                        returnKeyType={'next'}
                        multiline={true}
                        numberOfLines={3}
                    >
                    </TextInput>
                </View>

                <TouchableOpacity style={styles.photo}>
                    <Image source={require('../images/ic_upload_gray.png')}
                           style={styles.iconPhoto} resizeMode={'contain'} />
                    <Text style={styles.photoText}>
                        {strings.uploadPhoto}
                    </Text>
                </TouchableOpacity>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonNext}>
                        <Text style={styles.btnNextText}>
                            {strings.sendComment.toUpperCase()}
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 26,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    ideaText: {
        fontFamily: 'Muli-Regular',
        fontSize: 16,
        color: '#2b2d30',
    },
    input: {
        paddingTop: 5,
        fontSize: 14,
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
    photo: {
        padding: 16,
        borderWidth: 3,
        borderStyle: 'dashed',
        borderColor: '#e3e3e3',
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconPhoto: {
        width: 35,
        height: 32,
    },
    photoText: {
        paddingTop: 12,
        fontSize: 12,
        color: '#9e9e9e',
        fontFamily: 'Muli-Regular',
        textAlign: 'center',
        marginHorizontal: 40,
    },
});

export default SendComments