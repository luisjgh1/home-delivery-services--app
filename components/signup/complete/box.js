/**
 * Created by Humbee on 31/8/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Image, ScrollView, Platform, Dimensions} from 'react-native'
import {strings} from '../../../locale/index'
import { helperPop } from '../../common/commonHelper'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {ActionCreators} from '../../../actions'

class Box extends Component {
    constructor() {
        super();
        this.state = {
            mail: false,
            user: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.titleText}>
                        {strings.titleSignupSuccess}
                    </Text>

                    <Text style={styles.messageText}>
                        {strings.checkInbox}
                    </Text>
                </View>
                <View style={styles.pictureContainer}>
                    <Image
                        source={{uri: this.props.uri}}
                        style={styles.picture}
                        resizeMode={Image.resizeMode.cover}
                    />
                </View>
                <TouchableWithoutFeedback onPress={()=> {
                    helperPop(this.props, true)
                    this.props.resetSteps()
                }}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>{strings.finalize.toUpperCase()}</Text>
                        <Image
                            source={require('./images/icon_check.png')}
                            style={styles.btnIcon}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width - 100,
        marginTop: -50,
        padding: 20,
        marginBottom: 30,
        borderRadius: 3,
        elevation: 15,
        paddingTop: 60,
    },
    pictureContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: (Platform.OS === 'ios') ? 50 : 100,
        elevation: 16,
        position: 'absolute',
        top:-100,
    },
    picture: {
        width: 100,
        height: 100,
        borderRadius: (Platform.OS === 'ios') ? 50 : 100,
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'Muli-ExtraBold',
        color: '#5a4ea3',
        margin: 5,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 25,
    },
    messageText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 14,
        paddingBottom: 10,
    },
    btn: {
        backgroundColor: '#C7e00b',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: Dimensions.get('window').width - 100,
        borderRadius: 3,
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 22,
    },
    btnIcon: {
        width: 18,
        height: 18,
        marginLeft: 10
    },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register}) => {
  return {uri: register.photo.uri}
}

export default connect(MapStateToProps, MapDispatchToProps)(Box)