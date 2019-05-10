/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, TouchableWithoutFeedback} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../locale/index'

class Info extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nameText}>
                    Wonder Woman
                </Text>
                <Text style={styles.dataText}>
                    Estos datos sólo son visibles para ti
                </Text>

                <View style={styles.info}>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.infoText}>{strings.mail}</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.titleInfoText}>correo electronico aqui</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.infoText}>{strings.password}</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.titleInfoText}>contraseña aqui ***</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.infoText}>{strings.numberPhone}</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.titleInfoText}>telefono aqui</Text>
                        </View>
                    </View>
                    <View style={[styles.row,styles.noBorder]}>
                        <View style={styles.left}>
                            <Text style={styles.infoText}>{strings.addressProfile}</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.titleInfoText}>direccion aqui</Text>
                        </View>
                    </View>
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
    info: {
        backgroundColor: '#fff',
        elevation: 5,
        marginBottom: 20,
        paddingBottom: 16,
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
        flex: 2,
        alignItems: 'flex-end'
    },
    titleInfoText: {
        fontFamily: 'Muli-Bold',
        color: '#2b2d30',
        fontSize: 16,
    },
    infoText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        fontSize: 16,
    },
    dataText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        fontSize: 12,
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    noBorder: {
        borderBottomWidth: 0,
    },
});

export default Info