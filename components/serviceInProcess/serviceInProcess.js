/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, ScrollView, Modal} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../locale/index'
import Banner from './banner'
import InfoProvider from './infoProvider'
// import Achievements from './achievements'
// import Services from './services'
import ActionButton from './actionButton/ActionButton'

class ProfileProvider extends Component {
    constructor() {
        super()
        this.state = {
            isVisible: false,
            extrasModal: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ActionButton
                        buttonColor="#c7e00b"
                        verticalOrientation={'down'}
                        btnOutRange="#d9d9d9"
                        style={[styles.actionButton, styles.mainActionButton]}
                    >
                        <ActionButton.Item
                            onPress={() => {
                                this.setState({
                                    isVisible: true
                                })
                            }}
                            style={styles.actionButton}
                            buttonColor='#c7e00b'
                            // title={strings.confirm}
                            textContainerStyle={{backgroundColor: '#6b6d70'}}
                            textStyle={{color: '#fff', fontFamily: 'Muli-Regular', fontSize: 10,}}>
                            <Image source={require('./images/icon_check_white2.png')}
                                   style={styles.iconBtn} resizeMode={'contain'}/>
                        </ActionButton.Item>
                        <ActionButton.Item
                            style={styles.actionButton}
                            buttonColor='#fff'
                            // title={strings.ignore}
                            textContainerStyle={{backgroundColor: '#6b6d70'}}
                            textStyle={{color: '#fff', fontFamily: 'Muli-Regular', fontSize: 10,}}>
                            <Image source={require('./images/icon_report.png')}
                                   style={styles.iconBtn} resizeMode={'contain'}/>
                        </ActionButton.Item>
                    </ActionButton>

                    <Banner/>
                    <InfoProvider/>
                </ScrollView>

                <Modal
                    visible={this.state.extrasModal}
                    transparent={true}
                    animationType={'fade'}
                    onRequestClose={() => {
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.content}>
                            <Text style={styles.titleModalText}>
                                {strings.extrasApproved}
                            </Text>

                            <Text style={styles.contentText}>
                                {strings.extrasContent}
                            </Text>

                            <View style={styles.footer}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        extrasModal: false
                                    })
                                }}>
                                    <Text style={styles.si}>
                                        {strings.agree.toUpperCase()}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    visible={this.state.isVisible}
                    transparent={true}
                    animationType={'fade'}
                    onRequestClose={() => {
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.content}>
                            <Text style={styles.titleModalText}>
                                {strings.completedService}
                            </Text>

                            <Text style={styles.contentText}>
                                {strings.waitProvider}
                            </Text>

                            <View style={styles.footer}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        isVisible: false
                                    })
                                }}>
                                    <Text style={styles.notyet}>
                                        {strings.notYet}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={styles.si}>
                                        {strings.finish.toUpperCase()}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    },
    modal: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 2,
    },
    titleModalText: {
        fontFamily: 'Muli-Bold',
        fontSize: 20,
        color: '#2b2d30',
        marginBottom: 12,
    },
    contentText: {
        fontFamily: 'Muli-Regular',
        fontSize: 16,
        color: '#2b2d30',
        marginBottom: 36,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 16,
    },
    notyet: {
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#f76954',
        marginRight: 24,
    },
    no: {
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#f76954',
        marginRight: 45,
    },
    si: {
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#41d299',
    },
});

export default ProfileProvider