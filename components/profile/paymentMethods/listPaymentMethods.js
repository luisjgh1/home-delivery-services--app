/**
 * Created by Humbee on 27/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList, TouchableWithoutFeedback} from 'react-native'
import {strings} from '../../../locale/index'

const list = [
    {
        key: 1,
    },
    {
        key: 2,
    },
];

class List extends Component {
    _renderItem(item) {
        return (
            <View style={styles.item}>
                <TouchableOpacity style={styles.left}>
                    <Image source={require('../images/radio_btn_off.png')}
                           style={styles.radio} resizeMode={'contain'}/>
                    <Text style={styles.itemText}>00000000000000000000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.right}>
                    <Image source={require('../images/icon_remove_wrong_cancel_black.png')}
                           style={styles.radio} resizeMode={'contain'}/>
                </TouchableOpacity>
            </View>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    renderItem={({item}) => this._renderItem(item)}
                    data={list}
                />
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        // padding: 12,
        paddingHorizontal: 12,
    },
    item: {
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#edeff2',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    itemText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        fontSize: 16,
    },
    radio: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    left: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flex: 1,
        alignItems: 'flex-end',
    },
});

export default List