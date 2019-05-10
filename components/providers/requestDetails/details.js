/**
 * Created by Humbee on 31/8/2017.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    Platform,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native'
import {strings} from '../../../locale/index'
import {helperPop} from '../../common/commonHelper'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../../../actions'

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
    // {
    //     key: 4,
    //     name: "Tony Roma's",
    //     image: 'https://theseasonalgourmet.files.wordpress.com/2011/07/pasta.jpg'
    // },
];

class Details extends Component {
    _renderItem(item) {
        return (
            <View style={styles.center}>
                <View style={styles.services}>
                    <Image
                        source={{uri: 'http://flaticons.net/gd/makefg.php?i=icons/People/Hair%20Stylist.png&r=255&g=255&b=255'}}
                        style={styles.iconService}
                        resizeMode={Image.resizeMode.contain}
                    />
                </View>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>x1</Text>
                </View>
            </View>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.center}>
                        <FlatList
                            numColumns={3}
                            renderItem={({item}) => this._renderItem(item)}
                            data={food}
                        />
                    </View>

                    <View style={styles.info}>
                        <View style={styles.row}>
                            <Image
                                source={require('./images/icon_address.png')}
                                style={styles.iconInfo}
                                resizeMode={Image.resizeMode.contain}
                            />
                            <Text style={styles.infoText}>
                                Calle 00, Av 00, Edif. XXXX
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Image
                                source={require('./images/icon_calendar.png')}
                                style={styles.iconInfo}
                                resizeMode={Image.resizeMode.contain}
                            />
                            <Text style={styles.infoText}>
                                Hoy - Martes 00/00/00
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Image
                                source={require('./images/icon_clock.png')}
                                style={styles.iconInfo}
                                resizeMode={Image.resizeMode.contain}
                            />
                            <Text style={styles.infoText}>
                                Hace 10 MIN
                            </Text>
                        </View>
                    </View>

                    <View style={styles.descrip}>
                        <Text style={styles.serviceText}>
                            {strings.descriptionRequest}
                        </Text>

                        <TextInput
                            style={[styles.input]}
                            placeholder={strings.detailsAditionals}
                            underlineColorAndroid={'#d9d9d9'}
                            returnKeyType={'next'}
                            multiline={true}
                        >
                        </TextInput>
                    </View>
                </View>

                <TouchableWithoutFeedback>
                    <View style={styles.buttonCancel}>
                        <Text style={styles.btnCancelText}>
                            {strings.cancelRequest.toUpperCase()}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width - 100,
        padding: 20,
        marginBottom: 30,
        borderRadius: 3,
        elevation: 15,
        paddingBottom: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop: 5,
    },
    center: {
        alignItems: 'center',
    },
    services: {
        backgroundColor: '#5a4ea3',
        marginHorizontal: 6,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    iconService: {
        width: 30,
        height: 30,
    },
    badge: {
        backgroundColor: '#41d399',
        padding: 2,
        paddingHorizontal: 9,
        marginTop: -10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    badgeText: {
        fontFamily: 'Muli-ExtraBold',
        fontSize: 9,
        alignItems: 'center',
        color: '#fff',
    },
    info: {
        marginTop: 20,
        marginBottom: 10,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7,
    },
    iconInfo: {
        width: 20,
        height: 20,
        marginRight: 18,
    },
    infoText: {
        fontFamily: 'Muli-Regular',
        fontSize: 14,
        color: '#2b2d30',
        lineHeight: 20,
    },
    input: {
        height: 50,
        paddingTop: 5,
        fontSize: 14,
        color: '#2b2d30',
        fontFamily: 'Muli-Regular',
        marginBottom: 3,
    },
    descrip: {
        marginBottom: 20,
    },
    buttonCancel: {
        backgroundColor: 'transparent',
        padding: 10,
        marginTop: 0,
        marginBottom: 50,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        minWidth: 290,
        height: 36,
    },
    serviceText: {
        fontFamily: 'Muli-Bold',
        color: '#2b2d30',
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 16,
        margin: 5,
    },
    btnCancelText: {
        color: '#f76954',
        fontFamily: 'Muli-ExtraBold',
        fontSize: 16,
    },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register}) => {
    return {form: register.registerForm}
}

export default connect(MapStateToProps, MapDispatchToProps)(Details)