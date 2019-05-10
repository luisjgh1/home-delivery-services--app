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
        icon: require('./images/ic_badge_proveedor_servicio_5_estrellas.png'),
        name: 'Servicio 5 estrellas',
    },
    {
        key: 2,
        icon: require('./images/ic_badge_proveedor_todo_un_experto.png'),
        name: 'Todo un experto',
    },
    {
        key: 3,
        icon: require('./images/ic_badge_proveedor_pulcro_ordenado.png'),
        name: 'Pulcro y ordenado',
    },
    {
        key: 4,
        icon: require('./images/ic_badge_proveedor_amigable_cortes.png'),
        name: 'Amigable y cortés',
    },
    {
        key: 5,
        icon: require('./images/ic_badge_proveedor_enfocado_al_detalle.png'),
        name: 'Enfocado al detalle',
    },
    {
        key: 6,
        icon: require('./images/ic_badge_proveedor_siempre_puntual.png'),
        name: 'Siempre puntual',
    },
    {
        key: 7,
        icon: require('./images/ic_badge_proveedor_excelente_conversacion.png'),
        name: 'Excelente conversación',
    },
    {
        key: 8,
        icon: require('./images/ic_badge_proveedor_versatilidad_innata.png'),
        name: 'Versatilidad innata',
    },
];

class Achievements extends Component {
    _renderItem(item) {
        return (
            <TouchableOpacity style={[styles.items,{opacity:0.35}]}>
                <Image source={item.icon}
                       style={styles.badgeImage} resizeMode={'contain'}>
                </Image>
                <Text style={styles.achievementsText}>
                    {item.name}
                </Text>
            </TouchableOpacity>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.infoText}>
                        {strings.selectMedals}
                    </Text>
                    <View style={[styles.center, {flexDirection: 'row'}]}>
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
        paddingBottom: 30,
        paddingTop: 10,
    },
    items: {
        flex: 1,
        alignItems: 'center',
    },
    nameText: {
        fontFamily: 'Muli-Bold',
        color: '#5a4ea3',
        fontSize: 24,
        paddingHorizontal: 16,
        marginBottom: 27,
    },
    infoText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 10,
    },
    center: {
        alignItems: 'center',
    },
    badgeImage: {
        width: 40,
        height: 40,
        // marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 10,
    },
    achievementsText: {
        fontFamily: 'Muli-ExtraBold',
        fontSize: 9,
        textAlign: 'center',
        color: '#2b2d30',
        // width: 100,
        marginTop: 8,
    },
});

export default Achievements