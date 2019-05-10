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
import {strings} from '../../../locale/index'

const food = [
    {
        key: 1,
        icon: require('../images/ic_badge_proveedor_servicio_5_estrellas.png'),
        name: 'Servicio 5 estrellas',
    },
    {
        key: 2,
        icon: require('../images/ic_badge_proveedor_todo_un_experto.png'),
        name: 'Todo un experto',
    },
    {
        key: 3,
        icon: require('../images/ic_badge_proveedor_pulcro_ordenado.png'),
        name: 'Pulcro y ordenado',
    },
    {
        key: 4,
        icon: require('../images/ic_badge_proveedor_amigable_cortes.png'),
        name: 'Amigable y cortés',
    }, {
        key: 5,
        icon: require('../images/ic_badge_proveedor_enfocado_al_detalle.png'),
        name: 'Enfocado al detalle',
    },
    {
        key: 6,
        icon: require('../images/ic_badge_proveedor_siempre_puntual.png'),
        name: 'Siempre puntual',
    },
    {
        key: 7,
        icon: require('../images/ic_badge_proveedor_excelente_conversacion.png'),
        name: 'Excelente conversación',
    },
    {
        key: 8,
        icon: require('../images/ic_badge_proveedor_versatilidad_innata.png'),
        name: 'Versatilidad innata',
    },
];

class Achievements extends Component {
    _renderItem(item) {
        return (
            <TouchableOpacity style={{flex:1}}>
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
            </TouchableOpacity>

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
                        <View style={styles.right}>
                            <Text style={styles.infoText}>120 {strings.services}</Text>
                        </View>
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
});

export default Achievements