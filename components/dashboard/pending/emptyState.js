/**
 * Created by lgonzalez on 25/09/17.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
} from 'react-native'
import {strings} from '../../../locale/index'


class EmptyState extends Component {
    render() {
        return (
            <View style={styles.emptyContainer}>
                <Image source={require('../images/illustration_no_services.png')}
                       style={[styles.emptyIcon,]}
                       resizeMode={Image.resizeMode.contain}/>
                <Text style={styles.noRequestText}>{strings.noRequest}</Text>
                <Text style={styles.manageRequestText}>{strings.manageRequest}</Text>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonNext}>
                        <Text style={styles.btnText}>
                            {strings.newService}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        )
    }
}

let styles = StyleSheet.create({
    emptyContainer: {
        marginTop: 70,
        alignItems: 'center'
    },
    emptyIcon: {
        width: 152,
        height: 102,
    },
    noRequestText: {
        paddingTop: 25,
        paddingHorizontal: 60,
        textAlign: 'center',
        color: '#5a4ea3',
        fontSize: 16,
        fontFamily: 'Muli-Bold',
        lineHeight: 20,
    },
    manageRequestText: {
        paddingTop: 32,
        paddingHorizontal: 44,
        textAlign: 'center',
        color: '#2b2d30',
        fontSize: 14,
        fontFamily: 'Muli-Regular',
        lineHeight: 20,
    },
    buttonNext: {
        backgroundColor: '#c7e00b',
        padding: 10,
        marginTop: 16,
        marginBottom: 50,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        minWidth: 290,
        height: 36,
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Muli-Bold',
        fontSize: 16,
    },
});

export default EmptyState