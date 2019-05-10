/**
 * Created by Humbee on 27/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList, TouchableWithoutFeedback} from 'react-native'
import {strings} from '../../../locale/index'
import EmptyState from './emptyState'
import List from './listPaymentMethods'

class PaymentMethods extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<EmptyState/>*/}
                <List/>
                <TouchableWithoutFeedback>
                    <View style={styles.buttonNext}>
                        <Text style={styles.btnNextText}>
                            {strings.addPaymentMethod.toUpperCase()}
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
    },
    buttonNext: {
        backgroundColor: '#0fa4ac',
        padding: 7,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        position: 'absolute',
        bottom: 50,
        width: Dimensions.get('window').width - 60,
    },
    btnNextText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default PaymentMethods