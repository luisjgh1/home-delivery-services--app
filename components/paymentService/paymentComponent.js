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
import {helperPop} from '../common/commonHelper'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../../actions'
import ExtrasList from './extrasList'

const food = [
    {
        key: 1,
    },
    {
        key: 2,
    },
];

class PaymentComponent extends Component {
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
                <View style={styles.price}>
                    <Text style={styles.messageText}>
                        {strings.serviceAmount}
                    </Text>
                    <Text style={styles.priceText}>
                        Bs. 00000.00
                    </Text>
                </View>

                <View style={styles.method}>
                    <FlatList
                        renderItem={({item}) => this._renderItem(item)}
                        data={food}
                    />
                </View>

                <TouchableOpacity style={styles.addMethod}>
                    <Image source={require('./images/icon_add.png')}
                           style={styles.icon} resizeMode={'contain'}/>
                    <Text style={styles.addText}>{strings.addPaymentMethod}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
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
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register}) => {
    return {form: register.registerForm}
}

export default connect(MapStateToProps, MapDispatchToProps)(PaymentComponent)