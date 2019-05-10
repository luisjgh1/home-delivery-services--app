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
    FlatList
} from 'react-native'
import {strings} from '../../locale/index'
import {helperPop} from '../common/commonHelper'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../../actions'

class Info extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.serviceText}>
                        Estilismo
                    </Text>
                    <Text style={styles.titleText}>
                        Linda Cooper
                    </Text>

                    <View style={styles.center}>
                        <View style={styles.littleLine}>
                        </View>
                    </View>
                </View>
                <View style={styles.pictureContainer}>
                    <Image
                        source={{uri: 'http://expatshaarlem.nl/wp-content/uploads/2017/01/trump-lead2.jpg'}}
                        style={styles.picture}
                        resizeMode={Image.resizeMode.cover}
                    />
                </View>
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
        marginTop: -150,
        padding: 20,
        borderRadius: 3,
        paddingTop: 60,
        paddingBottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    pictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: (Platform.OS === 'ios') ? 50 : 100,
        elevation: 16,
        position: 'absolute',
        top: -200,
    },
    picture: {
        width: 100,
        height: 100,
        borderRadius: (Platform.OS === 'ios') ? 50 : 100,
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'Muli-Bold',
        color: '#5a4ea3',
        margin: 5,
        textAlign: 'center',
        fontSize: 24,
    },
    serviceText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 16,
        margin: 5,
    },
    messageText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 14,
    },
    littleLine: {
        height: 2,
        backgroundColor: '#9e9e9e',
        width: 50,
        marginTop: 8,
        borderRadius: 3,
    },
    center: {
        alignItems: 'center',
    },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register}) => {
    return {form: register.registerForm}
}

export default connect(MapStateToProps, MapDispatchToProps)(Info)