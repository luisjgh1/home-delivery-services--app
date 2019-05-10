/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'
import Banner from './banner'
import InfoProvider from './infoProvider'
import Achievements from './achievements'
import Services from './services'
import ActionButton from './actionButton/ActionButton'

class ProfileProvider extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <ActionButton
                    buttonColor="#c7e00b"
                    verticalOrientation={'down'}
                    btnOutRange="#d9d9d9"
                    style={[styles.actionButton, styles.mainActionButton]}
                >
                    <ActionButton.Item
                        style={styles.actionButton}
                        buttonColor='#c7e00b'
                        // title={strings.confirm}
                        textContainerStyle={{backgroundColor: '#6b6d70'}}
                        textStyle={{color: '#fff', fontFamily: 'Muli-Regular', fontSize: 10,}}>
                        <Image source={require('../images/icon_check_white2.png')}
                               style={styles.iconBtn} resizeMode={'contain'}/>
                    </ActionButton.Item>
                    <ActionButton.Item
                        style={styles.actionButton}
                        buttonColor='#fff'
                        // title={strings.ignore}
                        textContainerStyle={{backgroundColor: '#6b6d70'}}
                        textStyle={{color: '#fff', fontFamily: 'Muli-Regular', fontSize: 10,}}>
                        <Image source={require('../images/icon_cancel_red.png')}
                               style={styles.iconBtn} resizeMode={'contain'}/>
                    </ActionButton.Item>
                </ActionButton>

                <Banner/>
                <InfoProvider/>
                <Achievements/>
                <Services/>
            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    iconBtn: {
        width: 18,
        height: 18,
    },
    actionButton: {
        zIndex: 1000,
    },
    mainActionButton: {
        position: 'absolute',
        top: 275,
        right: 0,
        // marginTop: Dimensions.get('window').height - 320,
    }
});

export default ProfileProvider