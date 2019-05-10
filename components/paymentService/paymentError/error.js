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
import {strings} from '../../../locale/index'
import {helperPop} from '../../common/commonHelper'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../../../actions'

class PaymentMethod extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image source={require('../images/illustration_payment_error.png')}
                           style={styles.icon} resizeMode={'contain'}/>
                    <Text style={styles.payText}>
                        {strings.errorPay}
                    </Text>
                </View>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonNext}>
                        <Text style={styles.btnText}>
                            {strings.tryAgain.toUpperCase()}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>


                <TouchableOpacity style={styles.buttonCancel}>
                    <Text style={styles.btnCancelText}>
                        {strings.changeMethod.toUpperCase()}
                    </Text>
                </TouchableOpacity>

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
        paddingBottom: 30,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop: 5,
        alignItems: 'center',
    },
    icon: {
        width: 145,
        height: 116,
        marginTop: 20,
        marginBottom: 16,
    },
    payText: {
        color: '#f76954',
        fontFamily: 'Muli-Bold',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
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
        color: '#0fa4ac',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 14,
    },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register}) => {
    return {form: register.registerForm}
}

export default connect(MapStateToProps, MapDispatchToProps)(PaymentMethod)