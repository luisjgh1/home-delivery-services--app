/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, TouchableWithoutFeedback} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../../locale/index'

class Example extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nameText}>
                    Wonder Woman
                </Text>

                <View style={styles.info}>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.titleInfoText}>{strings.currentDistance}</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.infoText}>0 KM</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.titleInfoText}>{strings.schedule}</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.infoText}>Lun-Vie 8AM a 5PM</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.titleInfoText}>{strings.experienceYears}</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.infoText}>10 años</Text>
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
        marginBottom: 27,
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
        flex: 1,
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

});

export default Example