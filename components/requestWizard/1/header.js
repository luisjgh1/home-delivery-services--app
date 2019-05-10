/**
 * Created by Humbee on 25/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Modal} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            isVisible: false,
        }
    }

    render() {
        return (
            <LinearGradient
                style={styles.banner}
                colors={['#0fa4ac', '#5a4ea3']}
                start={{x: 1.5, y: 0.1}}
                end={{x: -0.1, y: 0.5}}>
                <View sttyle={styles.left}>
                    <Image
                        source={require('../images/logo_ubi_welcome.png')}
                        style={styles.logo}
                        resizeMode={Image.resizeMode.contain}
                    />
                </View>
                <View sttyle={styles.center}>
                    <Text style={styles.titleText}>{strings.requestService}</Text>
                </View>
                <View sttyle={styles.right}>
                    <TouchableOpacity onPress={() => {
                        this.setState({
                            isVisible: true
                        })
                    }}>
                        <Image
                            source={require('../images/icon_remove_wrong_cancel.png')}
                            style={styles.icon}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </TouchableOpacity>
                </View>

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
                                {strings.cancelRequest}
                            </Text>

                            <Text style={styles.contentText}>
                                {strings.confirmCancel}
                            </Text>

                            <View style={styles.footer}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        isVisible: false
                                    })
                                }}>
                                    <Text style={styles.no}>
                                        NO
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={styles.si}>
                                        {strings.yes.toUpperCase()}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </LinearGradient>

        )
    }
}

let styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        paddingTop: 16,
    },
    left: {},
    center: {},
    right: {},
    logo: {
        width: 40,
        height: 25,
    },
    titleText: {
        fontFamily: 'Muli-Bold',
        fontSize: 20,
        color: '#fff',
    },
    icon: {
        width: 19,
        height: 19,
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
        marginRight: 45,
    },
    si: {
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#41d299',
    },
});

export default Header