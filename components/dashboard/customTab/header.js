/**
 * Created by lgonzalez on 27/09/17.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ActivityIndicator, Alert} from 'react-native'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../../actions'
import {strings} from '../../../locale/index'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            goToLogin: false,
            order: {}
        };
    }

    componentWillMount() {
        console.log('Login props', this.props)

    }


    render() {
        return (

            <View style={styles.container}>
                <View style={styles.flex}>
                    <Image source={require('../images/logo_ubi_gradient.png')}
                           style={[styles.logo,]}
                           resizeMode={Image.resizeMode.contain}/>
                </View>
                <View style={styles.center}>
                    <Text style={styles.titleText}>{strings.myRequest}</Text>
                </View>
                <View style={styles.flex}>
                </View>
            </View>


        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((states) => {
    console.log('loading states', states)
    return {}
}, mapDispatchToProps)(Header)

const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    flex: {
        flex: 1,
    },
    center: {
        flex: 3,
    },
    logo: {
        width: 43,
        height: 24,
    },
    titleText: {
        fontSize: 20,
        color: '#2b2d30',
        fontFamily: 'Muli-Bold',
        textAlign: 'center',
    },
});