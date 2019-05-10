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
    Modal
} from 'react-native'
import {strings} from '../../../locale/index'
import EmptyState from './emptyState'
import Accordion from './collapsible/accordion'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {ActionCreators} from "../../../actions"

const SECTIONS = [
    {
        backgroundColor: '#0fa4ac',
        title: 'Manicure',
        content: 'Secado',
    },
    {
        backgroundColor: '#c7e00b',
        title: 'Pedicure',
        content: 'Lorem ipsum...',
    }
];

const food = [
    {
        key: 1,
        name: 'Secado',
        backgroundColor: '#0fa4ac',
    },
    // {
    //     key: 2,
    //     name: 'Secado',
    //     backgroundColor: '#0fa4ac',
    // },
    // {
    //     key: 3,
    //     name: "Secado",
    //     backgroundColor: '#0fa4ac',
    // },
    // {
    //     key: 4,
    //     name: 'Secado',
    //     backgroundColor: '#0fa4ac',
    // },
];

class Processed extends Component {
    constructor(props) {
        super(props)
        this._renderContent = this._renderContent.bind(this)
        this._renderItem = this._renderItem.bind(this)
        this.state = {
            isVisible: false,
            cancelService: false,
            confirmedRequests: this.props.confirmedRequests || []
        }
    }

    componentWillReceiveProps({ confirmedRequests }) {
        this.setState({confirmedRequests})
    }

    _renderHeader(section) {
        console.log(section)
        return (
            <View style={styles.card}>
                <View style={styles.left}>
                    <View style={styles.pictureCont}>
                        <Image
                            source={{uri: 'http://cinedesuperheroes.com/wp-content/uploads/2017/09/wonder-woman-gal-gadot-dc-comics-warner-bros.jpg'}}
                            style={styles.picture}
                            resizeMode={Image.resizeMode.cover}
                        />
                    </View>

                    <View style={styles.info}>
                        <View style={styles.row}>
                            <Text style={styles.nameText}>{section.provider.name}</Text>
                            <Text style={styles.inProcess}>{strings.inProcess}</Text>
                        </View>

                        <Text style={styles.serviceText}>{section.category.title}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={styles.infoRight}>
                        <Text style={styles.thereText}>{strings.there}</Text>
                        <Text style={styles.minuteText}>{strings.minutes}</Text>
                    </View>
                </View>
            </View>
        );
    }

    _renderContent(item, section) {
        console.log(this.state)
        return (
            <FlatList
                renderItem={({item})=> this._renderItem(item, section)}
                data={food}
            />

        );
    }

    _renderItem(item) {
        return (
            <TouchableWithoutFeedback onPress={()=> console.log('Hola')}>
                <View style={styles.cardExpanded}>
                <View style={[styles.pBottom, styles.row]}>
                    <Image
                        source={require('./images/icon_address_white.png')}
                        style={styles.icon}
                        resizeMode={Image.resizeMode.contain}
                    />
                    <Text style={styles.infoText}>Calle 00, Av 00, Edif. XXXX</Text>
                </View>
                <View style={[styles.pBottom, styles.row]}>
                    <Image
                        source={require('./images/icon_calendar_white.png')}
                        style={styles.icon}
                        resizeMode={Image.resizeMode.contain}
                    />
                    <Text style={styles.infoText}>Hoy - Martes 00/00/00</Text>
                </View>
                <View style={styles.row}>
                    <Image
                        source={require('./images/icon_clock_white.png')}
                        style={styles.icon}
                        resizeMode={Image.resizeMode.contain}
                    />
                    <Text style={styles.infoText}>Hace 10 MIN</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    this.setState({
                        cancelService: true
                    })
                }}>
                    <View style={styles.cancelBtn}>
                        <Image
                            source={require('../images/icon_remove_wrong_cancel.png')}
                            style={styles.iconBtn}
                            resizeMode={Image.resizeMode.contain}
                        />
                        <Text style={styles.textBtn}>{strings.cancel}</Text>
                    </View>
                </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Accordion
                        sections={this.state.confirmedRequests}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />

                    {/*EMPTY STATE*/}
                    {/*<EmptyState/>*/}
                </ScrollView>

                <Modal
                    visible={this.state.isVisible}
                    transparent={true}
                    animationType={'fade'}
                    onRequestClose={() => {
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.content}>
                            <Text style={styles.titleModalText}>
                                {strings.startService}
                            </Text>

                            <Text style={styles.contentText}>
                                {strings.serviceStarted}
                            </Text>

                            <View style={styles.footer}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        isVisible: false
                                    })
                                }}>
                                    <Text style={styles.notyet}>
                                        {strings.notYet}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={styles.si}>
                                        {strings.agree.toUpperCase()}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    visible={this.state.cancelService}
                    transparent={true}
                    animationType={'fade'}
                    onRequestClose={() => {
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.content}>
                            <Text style={styles.titleModalText}>
                                {strings.cancelService}
                            </Text>

                            <Text style={styles.contentText}>
                                {strings.confirmCancelService}
                            </Text>

                            <View style={styles.footer}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        cancelService: false
                                    })
                                }}>
                                    <Text style={styles.no}>
                                        NO
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={styles.si}>
                                        {strings.yes.toUpperCase()}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    card: {
        flexDirection: 'row',
        minHeight: 80,
        alignItems: 'center',
        elevation: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#edeff2'
    },
    cardExpanded: {
        minHeight: 130,
        backgroundColor: '#5a4ea3',
        paddingHorizontal: 29,
        borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
        justifyContent: 'center',
    },
    left: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flex: 1,
        alignItems: 'flex-end',
    },
    pictureCont: {
        width: 40,
        height: 40,
        borderRadius: 100,
        elevation: 10,
        backgroundColor: '#fff',
        marginRight: 12,
    },
    picture: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    info: {
        flexDirection: 'column',
    },
    infoRight: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    nameText: {
        color: '#2b2d30',
        fontSize: 16,
        fontFamily: 'Muli-Bold',
    },
    serviceText: {
        color: '#2b2d30',
        fontSize: 14,
        fontFamily: 'Muli-Regular',
    },
    thereText: {
        color: '#2b2d30',
        fontSize: 12,
        fontFamily: 'Muli-Regular',
    },
    minuteText: {
        color: '#2b2d30',
        fontSize: 12,
        fontFamily: 'Muli-Bold',
    },
    pBottom: {
        paddingBottom: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 18,
    },
    infoText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Muli-Regular',
    },
    cancelBtn: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        right: 24,
        backgroundColor: '#f76954',
        paddingHorizontal: 8,
        padding: 4,
        borderRadius: 3,
        alignItems: 'center',
    },
    iconBtn: {
        width: 14,
        height: 14,
        marginRight: 8,
    },
    textBtn: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Muli-Bold',
    },
    inProcess: {
        padding: 2,
        paddingHorizontal: 9,
        color: '#fff',
        backgroundColor: '#5a4ea3',
        fontSize: 8,
        fontFamily: 'Muli-Bold',
        marginLeft: 8,
        borderRadius: 3,
    },

    modal: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 2,
    },
    titleModalText: {
        fontFamily: 'Muli-Bold',
        fontSize: 20,
        color: '#2b2d30',
        marginBottom: 12,
    },
    contentText: {
        fontFamily: 'Muli-Regular',
        fontSize: 16,
        color: '#2b2d30',
        marginBottom: 36,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 16,
    },
    notyet: {
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#f76954',
        marginRight: 24,
    },
    no: {
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#f76954',
        marginRight: 45,
    },
    si: {
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#41d299',
    },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({ dashboard }) => {
  return {
    confirmedRequests: dashboard.confirmedRequests
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Processed)