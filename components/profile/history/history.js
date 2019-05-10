/**
 * Created by Humbee on 27/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList, TouchableWithoutFeedback} from 'react-native'
import {strings} from '../../../locale/index'
import EmptyState from './emptyState'
import List from './listHistory'

class History extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<EmptyState/>*/}
                <List/>
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
});

export default History