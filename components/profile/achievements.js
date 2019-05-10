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
    TouchableWithoutFeedback,
    FlatList
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../locale/index'

const food = [
    {
        key: 1,
        icon: require('./images/ic_badge_cliente_anfitrion_5_estrellas.png'),
        name: 'Anfitrión 5 estrellas',
    },
    {
        key: 2,
        icon: require('./images/ic_badge_cliente_generosidad_garantizada.png'),
        name: 'Generosidad garantizada',
    },
    {
        key: 3,
        icon: require('./images/ic_badge_cliente_excelente_conversacion.png'),
        name: 'Excelente conversación',
    },
    {
        key: 4,
        icon: require('./images/ic_badge_proveedor_amigable_cortes.png'),
        name: 'Amigable y cortés',
    },
];

class Achievements extends Component {
    _renderItem(item) {
        return (
            <View style={{flex:1,marginHorizontal:3}}>
                <View style={styles.center}>
                    <Image source={item.icon}
                           style={styles.badgeImage} resizeMode={'contain'}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>
                                0
                            </Text>
                        </View>
                    </Image>
                    <Text style={styles.achievementsText}>
                        {item.name}
                    </Text>
                </View>
            </View>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.titleInfoText}>{strings.obtained}</Text>
                        </View>
                        <TouchableOpacity style={styles.right}>
                            <Text style={styles.infoText}>{strings.viewHistory}</Text>
                            <Image source={require('./images/icon_arrow_right_small.png')}
                                   resizeMode={'contain'} style={styles.arrow}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.center,{flexDirection: 'row',marginHorizontal: 16}]}>
                        <FlatList
                            numColumns={4}
                            renderItem={({item}) => this._renderItem(item)}
                            data={food}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        // marginHorizontal: 15
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
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleInfoText: {
        fontFamily: 'Muli-Bold',
        color: '#2b2d30',
        fontSize: 16,
    },
    infoText: {
        fontFamily: 'Muli-Bold',
        color: '#0fa4ac',
        fontSize: 14,
    },
    center: {
        alignItems: 'center',
    },
    badgeImage: {
        width: 50,
        height: 50,
        // marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 10,
    },
    badge: {
        backgroundColor: '#5a4ea3',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 100,
        right: 0,
        position: 'absolute',
    },
    badgeText: {
        fontFamily: 'Muli-ExtraBold',
        fontSize: 8,
        textAlign: 'center',
        color: '#fff',
    },
    achievementsText: {
        fontFamily: 'Muli-ExtraBold',
        fontSize: 10,
        textAlign: 'center',
        color: '#2b2d30',
        // width: 100,
        marginTop: 8,
    },
    arrow: {
        width: 11,
        height: 11,
        marginLeft: 5,
    },
});

export default Achievements