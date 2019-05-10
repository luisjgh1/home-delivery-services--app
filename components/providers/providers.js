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
} from 'react-native'
import {strings} from '../../locale/index'
// import EmptyState from './emptyState'
import Accordion from './collapsible/accordion'
import { goToPayment } from '../common/commonHelper'

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

class Providers extends Component {
    constructor() {
        super()
        this._renderContent = this._renderContent.bind(this)
        this._renderItem = this._renderItem.bind(this)
    }

    _renderHeader(section) {
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
                            <Text style={styles.nameText}>Linda Cooper</Text>
                        </View>

                        <Text style={styles.serviceText}>asds | sdfsd | fsdf</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={styles.infoRight}>
                        <Text style={styles.thereText}>0.5 KM</Text>
                        <View style={styles.inProcess}>
                            <Text style={styles.inProcessText}>{strings.new}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    _renderContent(item, section) {
        return (
            <FlatList
                renderItem={({item}) => this._renderItem(item, section)}
                data={food}
            />

        );
    }

    _renderItem(item) {
        return (
            <View style={styles.cardExpanded}>
                <TouchableOpacity style={styles.leftExp} onPress={()=> goToPayment(this.props.navigator)}>
                    <Image source={require('./images/icon_check_white.png')}
                           style={styles.icon} resizeMode={'contain'}/>
                    <Text style={styles.optionText}>{strings.confirm.toUpperCase()}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.centerExpand}>
                    <Image source={require('./images/icon_info_white.png')}
                           style={styles.icon} resizeMode={'contain'}/>
                    <Text style={styles.optionText}>{strings.viewProfile.toUpperCase()}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightExp}>
                    <Image source={require('./images/icon_remove_wrong_cancel.png')}
                           style={styles.icon} resizeMode={'contain'}/>
                    <Text style={styles.optionText}>{strings.ignore.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Accordion
                        sections={SECTIONS}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                    {/*EMPTY STATE*/}
                    {/*<EmptyState/>*/}
                </ScrollView>
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
    pBottom: {
        paddingBottom: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inProcess: {
        padding: 2,
        paddingHorizontal: 9,
        backgroundColor: '#5a4ea3',
        marginLeft: 8,
        borderRadius: 3,
        marginTop: 3,
    },
    inProcessText: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'Muli-Bold',
        textAlign: 'center',
    },

    cardExpanded: {
        backgroundColor: '#0fa4ac',
        borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
        justifyContent: 'center',
        padding: 17,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftExp: {
        flex: 1,
        alignItems: 'center',
    },
    centerExpand: {
        flex: 1,
        alignItems: 'center',
    },
    rightExp: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginBottom: 7,
    },
    optionText: {
        fontFamily: 'Muli-Bold',
        fontSize: 10,
        color: '#fff',
    },
});

export default Providers