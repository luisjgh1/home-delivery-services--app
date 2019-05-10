import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList} from 'react-native'
import {strings} from '../../locale/index'

const list = [
    {
        key: 1,
        name: strings.language,
    },
    {
        key: 2,
        name: strings.notifications,
    },
    {
        key: 3,
        name: 'FAQ',
    },
    {
        key: 4,
        name: strings.terms,
    },
    {
        key: 5,
        name: strings.policy,
    },
    {
        key: 6,
        name: strings.contactUs,
    },
];

class Settings extends Component {
    _renderItem(item) {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>
                    {item.name}
                </Text>
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
        paddingHorizontal: 36,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    item: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2',
    },
    itemText: {
        marginHorizontal: 10,
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        fontSize: 16,
    },
});

export default Settings