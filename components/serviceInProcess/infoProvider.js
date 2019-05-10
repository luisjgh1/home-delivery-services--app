/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    TouchableWithoutFeedback
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../locale/index'
import EmptyState from './emptyState'
import Extras from './extras'

class InfoProvider extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nameText}>
                    Wonder Woman
                </Text>
                <Text style={styles.infoText}>Estilismo | Manicure | Maquillaje ...</Text>
                <View style={styles.row}>
                    <Text style={styles.titleInfoText}>{strings.additionalServices}</Text>
                </View>
                <View style={styles.info}>
                    {/*<EmptyState/>*/}
                    <Extras/>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        marginTop: -10,
        zIndex: -1
    },
    nameText: {
        fontFamily: 'Muli-Bold',
        color: '#5a4ea3',
        fontSize: 24,
        paddingHorizontal: 16,
        marginBottom: 5,
    },
    infoText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        fontSize: 16,
        paddingHorizontal: 16,
        marginBottom: 27,
    },
    info: {
        backgroundColor: '#fff',
        // elevation: 5,
        marginBottom: 20,
        paddingBottom: 16,
        alignItems: 'center',
    },
    row: {
        paddingVertical: 16,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2',
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
        alignItems: 'flex-end'
    },
    titleInfoText: {
        fontFamily: 'Muli-Bold',
        color: '#2b2d30',
        fontSize: 16,
    },

    empty: {
        width: 148,
        height: 105,
        marginTop: 40,
        marginBottom: 18,
    },
    emptyTextBold: {
        fontFamily: 'Muli-Bold',
        color: '#5a4ea3',
        fontSize: 16,
        paddingHorizontal: 16,
        marginBottom: 32,
        textAlign: 'center',
    },
    emptyText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        fontSize: 14,
        paddingHorizontal: 26,
        marginBottom: 5,
        textAlign: 'center',
    },
});

export default InfoProvider