/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, ScrollView, Modal} from 'react-native'
import {strings} from '../../locale/index'
import Banner from './banner'
import Info from './infoCliente'
import Achievements from './achievements'
// import Services from './services'
import ActionButton from './actionButton/ActionButton'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            isVisible: false,
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ActionButton
                    onPress={() => {
                        this.setState({
                            isVisible: true
                        })
                    }}
                    buttonColor="#c7e00b"
                    verticalOrientation={'down'}
                    btnOutRange="#d9d9d9"
                    style={[styles.actionButton, styles.mainActionButton]}
                >
                </ActionButton>

                <Banner/>
                <Info/>
                <Achievements/>
                {/*<Services/>*/}

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
                                {strings.logout}
                            </Text>

                            <Text style={styles.contentText}>
                                {strings.confirmLogout}
                            </Text>

                            <View style={styles.footer}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        isVisible: false
                                    })
                                }}>
                                    <Text style={styles.no}>
                                        {strings.cancel.toUpperCase()}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={styles.si}>
                                        {strings.confirm.toUpperCase()}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    no: {
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#f76954',
        marginRight: 24,
    },
    si: {
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#41d299',
    },
});

export default Profile