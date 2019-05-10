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
        name: 'DAVINCI',
        image: 'http://www.student-rag.co.uk/wp-content/uploads/2016/02/bolognese.jpg'
    },
    {
        key: 2,
        name: 'Cuore',
        image: 'http://d2p4qauh5fa1j0.cloudfront.net/fotos/recetas/ampliacion/Z6BRucIGa4fRKIMETODOS2WoqKu8KfLS7ob.jpg'
    },
    {
        key: 3,
        name: "Tony Roma's",
        image: 'https://theseasonalgourmet.files.wordpress.com/2011/07/pasta.jpg'
    },
    {
        key: 4,
        name: "Tony Roma's",
        image: 'https://theseasonalgourmet.files.wordpress.com/2011/07/pasta.jpg'
    }, {
        key: 5,
        name: 'DAVINCI',
        image: 'http://www.student-rag.co.uk/wp-content/uploads/2016/02/bolognese.jpg'
    },
    {
        key: 6,
        name: 'Cuore',
        image: 'http://d2p4qauh5fa1j0.cloudfront.net/fotos/recetas/ampliacion/Z6BRucIGa4fRKIMETODOS2WoqKu8KfLS7ob.jpg'
    },
    {
        key: 7,
        name: "Tony Roma's",
        image: 'https://theseasonalgourmet.files.wordpress.com/2011/07/pasta.jpg'
    },
    {
        key: 8,
        name: "Tony Roma's",
        image: 'https://theseasonalgourmet.files.wordpress.com/2011/07/pasta.jpg'
    },
];

class Services extends Component {
    _renderItem(item) {
        return (
            <View>
                <View style={styles.cardService}>

                </View>
                <View style={styles.name}>
                    <Text style={styles.categoryText}>
                        Servicio
                    </Text>
                    <Text style={styles.nameText}>
                        Servicio
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
                            <Text style={styles.titleInfoText}>{strings.servicesOffered}</Text>
                        </View>
                    </View>
                    <View >
                        <FlatList
                            renderItem={({item}) => this._renderItem(item)}
                            data={food}
                            horizontal={true}
                            style={{paddingHorizontal: 16}}
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
    cardService: {
        backgroundColor: '#a49ae5',
        minWidth: 104,
        minHeight: 107,
        marginRight: 10,
        marginTop: 30,
        borderRadius: 3,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    name: {
        minWidth: 104,
        marginRight: 10,
        backgroundColor: '#7d70c4',
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        marginTop: -2,
    },
    nameText: {
        color: '#fff',
        fontSize: 13,
        fontFamily: 'Muli-Bold'
    },
    categoryText: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'Muli-SemiBold'
    },
});

export default Services