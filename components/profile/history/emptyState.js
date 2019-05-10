/**
 * Created by Humbee on 27/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList, TouchableWithoutFeedback} from 'react-native'
import {strings} from '../../../locale/index'

class EmptyState extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/illustration_empy_history.png')}
                       style={styles.icon} resizeMode={'contain'} />
                <Text style={styles.emptyText}>
                    {strings.historyEmpty}
                </Text>

                <Text style={styles.text}>
                    {strings.viewDetailsHere}
                </Text>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonNext}>
                        <Text style={styles.btnNextText}>
                            {strings.firstRequest.toUpperCase()}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 65,
    },
    icon: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    emptyText: {
        fontSize: 16,
        color: '#5a4ea3',
        fontFamily: 'Muli-ExtraBold',
        textAlign: 'center',
        marginHorizontal: 80,
    },
    text: {
        marginHorizontal: 60,
        textAlign: 'center',
        marginTop: 30,
        color: '#2b2d30',
        fontFamily: 'Muli-Regular',
        fontSize: 14,
        marginBottom: 20,
    },
    buttonNext: {
        backgroundColor: '#c7e00b',
        padding: 7,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
    },
    btnNextText: {
        color: '#fff',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default EmptyState