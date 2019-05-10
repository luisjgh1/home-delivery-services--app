/**
 * Created by Humbee on 28/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import {strings} from '../../../locale/index'

const list = [
    {
        key: 1,
        name: strings.callus,
        icon: require('../images/icon_call.png')
    },
    {
        key: 2,
        name: strings.sendComment,
        icon: require('../images/icon_feedback.png')
    },
    {
        key: 3,
        name: strings.reportProblem,
        icon: require('../images/icon_issue.png')
    },
];

const question = [
    {
        key: 1,
        name: 'Lorem ipsum dolor sit amet',
    },
    {
        key: 2,
        name: 'Lorem ipsum dolor sit amet',
    },
    {
        key: 3,
        name: 'Lorem ipsum dolor sit amet',
    },
];

class Support extends Component {
    _renderItem(item) {
        return (
            <View style={styles.item}>
                <Image source={item.icon} style={styles.icon} resizeMode={'contain'} />
                <Text style={styles.itemText}>
                    {item.name}
                </Text>
            </View>

        )
    }

    _renderQuestions(item) {
        return (
            <View style={styles.itemQuestion}>
                <TouchableOpacity>
                    <Text style={styles.itemQuestionText}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.cont}>
                    <FlatList
                        renderItem={({item}) => this._renderItem(item)}
                        data={list}
                    />
                </View>

                <View style={styles.questions}>
                    <Text style={styles.questionsText}>
                        {strings.questions}
                    </Text>
                </View>

                <FlatList
                    renderItem={({item}) => this._renderQuestions(item)}
                    data={question}
                />
            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    cont: {
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2',
        marginBottom: 5,
        paddingHorizontal: 36,
    },
    item: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#edeff2',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    itemText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        fontSize: 16,
    },
    icon: {
        width: 15,
        height:15,
        marginRight: 13,
    },
    questions: {
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2',
        marginHorizontal: 13,
        padding: 16,
    },
    questionsText: {
        fontFamily: 'Muli-Bold',
        color: '#2b2d30',
        fontSize: 16,
    },
    itemQuestion: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginHorizontal: 36,
    },
    itemQuestionText: {
        fontFamily: 'Muli-Bold',
        color: '#0fa4ac',
        fontSize: 14,
    },
});

export default Support