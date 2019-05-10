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
            <View style={styles.card}>
                <View style={styles.left}>
                    <View style={styles.pictureCont}>
                        <Image
                            source={{uri: 'http://cinedesuperheroes.com/wp-content/uploads/2017/09/wonder-woman-gal-gadot-dc-comics-warner-bros.jpg'}}
                            style={styles.picture}
                            resizeMode={Image.resizeMode.cover}
                        />
                    </View>

                    <View style={styles.info}>
                        <View style={styles.row}>
                            <Text style={styles.nameText}>Linda Cooper</Text>
                        </View>

                        <Text style={styles.serviceText}>Estilismo</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={styles.infoRight}>
                        <Text style={styles.thereText}>20 May 2017 10:07 PM</Text>
                        <View style={styles.inProcess}>
                            <Text style={styles.inProcessText}>Bs. 00000.00</Text>
                        </View>
                    </View>
                </View>
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
        // paddingHorizontal: 12,
    },
    card: {
        flexDirection: 'row',
        minHeight: 80,
        alignItems: 'center',
        elevation: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2'
    },
    left: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flex: 1,
        alignItems: 'flex-end',
    },
    pictureCont: {
        width: 40,
        height: 40,
        borderRadius: 100,
        elevation: 10,
        backgroundColor: '#fff',
        marginRight: 12,
    },
    picture: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    info: {
        flexDirection: 'column',
    },
    infoRight: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    nameText: {
        color: '#2b2d30',
        fontSize: 16,
        fontFamily: 'Muli-Bold',
    },
    serviceText: {
        color: '#2b2d30',
        fontSize: 14,
        fontFamily: 'Muli-Regular',
    },
    thereText: {
        color: '#2b2d30',
        fontSize: 10,
        fontFamily: 'Muli-Regular',
    },
    pBottom: {
        paddingBottom: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inProcess: {
        padding: 1.5,
        paddingHorizontal: 9,
        backgroundColor: '#5a4ea3',
        marginLeft: 8,
        borderRadius: 3,
        marginTop: 3,
    },
    inProcessText: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'Muli-Bold',
        textAlign: 'center',
    },
});

export default List