/**
 * Created by Humbee on 28/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, ScrollView} from 'react-native'
import {strings} from '../../../locale/index'

class ReportProblem extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../images/icon_credit_card.png')}
                           style={styles.icon} resizeMode={'contain'} />
                    <Text style={styles.text}>
                        {strings.hadProblem}
                    </Text>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.left}>
                        <Image source={require('../images/icon_sad_face_color.png')}
                               style={styles.iconSad} resizeMode={'contain'} />
                        <Text style={styles.optionText}>
                            {strings.couldntPay}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.center}>
                        <Image source={require('../images/icon_sad_face_color.png')}
                               style={styles.iconSad} resizeMode={'contain'} />
                        <Text style={styles.optionText}>
                            Hubo un error en el cobro
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionSelected}>
                        <Image source={require('../images/icon_sad_face.png')}
                               style={styles.iconSad} resizeMode={'contain'} />
                        <Text style={styles.optionTextSelected}>
                            {strings.payWrongService}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <TextInput
                        style={[styles.input]}
                        placeholder={strings.allDetails}
                        underlineColorAndroid={'#d9d9d9'}
                        returnKeyType={'next'}
                        multiline={true}
                        numberOfLines={3}
                    >
                    </TextInput>

                    <View style={styles.section2}>
                        <View style={styles.problems}>
                            <Image source={require('../images/icon_profile.png')}
                               style={styles.iconProblem} resizeMode={'contain'} />
                            <Text style={styles.problemText}>
                                {strings.problemProvider}
                            </Text>
                        </View>
                        <View style={styles.problems}>
                            <Image source={require('../images/icon_smartphone.png')}
                               style={styles.iconProblem} resizeMode={'contain'} />
                            <Text style={styles.problemText}>
                                {strings.problemApp}
                            </Text>
                        </View>
                        <View style={styles.problems}>
                            <Image source={require('../images/icon_sad_face_color.png')}
                               style={styles.iconProblem} resizeMode={'contain'} />
                            <Text style={styles.problemText}>
                                {strings.anotherProblem}
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonNext}>
                        <Text style={styles.btnNextText}>
                            {strings.sendReport.toUpperCase()}
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
        paddingVertical: 36,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 36,
        marginBottom: 20,
    },
    icon: {
        width: 22,
        height: 16,
        marginRight: 15,
    },
    text: {
        fontFamily: 'Muli-Regular',
        fontSize: 16,
        color: '#2b2d30',
    },
    options: {
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2',
        borderTopWidth: 1,
        borderTopColor: '#edeff2',
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#edeff2',
    },
    center: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#edeff2',
    },
    right: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
    },
    iconSad: {
        width: 18,
        height: 18,
        marginBottom: 14,
    },
    optionText: {
        fontFamily: 'Muli-Bold',
        color: '#0fa4ac',
        fontSize: 12,
        textAlign: 'center',
    },
    optionSelected: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#0fa4ac',
    },
    optionTextSelected: {
        fontFamily: 'Muli-Bold',
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    section: {
        marginHorizontal: 36,
        marginTop: 23,
    },
    input: {
        paddingTop: 5,
        fontSize: 14,
        color: '#9e9e9e',
        fontFamily: 'Muli-Regular',
    },
    section2: {
        marginTop: 40,
    },
    problems: {
        borderTopWidth: 1,
        borderTopColor: '#edeff2',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconProblem: {
        width: 18,
        height: 18,
        marginRight: 10,
    },
    problemText: {
        fontFamily: 'Muli-Regular',
        fontSize: 16,
        color: '#2b2d30',
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
        marginTop: 40,
        // position: 'absolute',
        // bottom: 50,
        // width: Dimensions.get('window').width - 60,
    },
    btnNextText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
    },

});

export default ReportProblem