/**
 * Created by Humbee on 31/8/2017.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    Platform,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native'
import {strings} from '../../locale/index'
import {goToDashboard} from '../common/commonHelper'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../../actions'
import ExtrasList from './extrasList'
import PaymentComponent from './paymentComponent'
import Achievements from './achievements'

const food = [
    {
        key: 1,
    },
    {
        key: 2,
    },
];

class PaymentMethod extends Component {
    _renderItem(item) {
        return (
            <View style={styles.row}>
                <TouchableOpacity style={styles.left}>
                    <Image source={require('./images/radio_btn_off.png')}
                           style={styles.radio} resizeMode={'contain'}/>
                    <Text style={styles.cardText}>0000000000</Text>
                </TouchableOpacity>
                <View style={styles.right}>
                    <TextInput
                        style={[styles.input]}
                        placeholder={'CVV *'}
                        underlineColorAndroid={'#d9d9d9'}
                        returnKeyType={'next'}
                        keyboardType={'numeric'}
                    >
                    </TextInput>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    {/*<ExtrasList/>*/}
                    {/*<PaymentComponent/>*/}
                    <PaymentComponent/>
                </View>

                <TouchableWithoutFeedback onPress={async ()=> {
                      await this.props.confirmRequest(this.props.request.id)
                      goToDashboard(this.props)
                    }}>
                    <View style={styles.buttonNext}>
                        <Text style={styles.btnText}>
                            {strings.confirmPayment.toUpperCase()}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonCancel}>
                        <Text style={styles.btnCancelText}>
                            {strings.cancelRequest.toUpperCase()}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                {/*----- SOLO APARECE EN EL PAGO DE EXTRAS Y SE QUITA EL DE ARRIBA -----*/}

                {/*<TouchableWithoutFeedback>*/}
                    {/*<View style={styles.buttonCancel}>*/}
                        {/*<Text style={styles.btnCancelText}>*/}
                            {/*{strings.reportProblem.toUpperCase()}*/}
                        {/*</Text>*/}
                    {/*</View>*/}
                {/*</TouchableWithoutFeedback>*/}
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
        padding: 20,
        marginBottom: 30,
        borderRadius: 3,
        elevation: 15,
        paddingBottom: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop: 5,
    },
    center: {
        alignItems: 'center',
    },
    price: {
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2',
    },
    messageText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 16,
        margin: 5,
    },
    priceText: {
        fontFamily: 'Muli-SemiBold',
        color: '#2b2d30',
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 32,
        margin: 5,
    },
    method: {
        paddingVertical: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flex: 1,
    },
    input: {
        height: 50,
        paddingTop: 5,
        fontSize: 14,
        color: '#9e9e9e',
        fontFamily: 'Muli-Regular',
    },
    radio: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    cardText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        textAlign: 'center',
        fontSize: 16,
    },
    addMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 40,
    },
    icon: {
        width: 14,
        height: 14,
        marginRight: 16,
    },
    addText: {
        fontFamily: 'Muli-Bold',
        color: '#0fa4ac',
        fontSize: 14,
    },
    buttonNext: {
        backgroundColor: '#c7e00b',
        padding: 10,
        marginTop: 10,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        minWidth: 290,
        height: 36,
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
    },
    nextIcon: {
        width: 15,
        height: 15,
        marginLeft: 5,
    },
    buttonCancel: {
        backgroundColor: 'transparent',
        padding: 10,
        marginTop: 16,
        marginBottom: 50,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        minWidth: 290,
        height: 36,
    },
    btnCancelText: {
        color: '#f76954',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
    },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register, dashboard}) => {
    return {
        form: register.registerForm,
        request: dashboard.request
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(PaymentMethod)