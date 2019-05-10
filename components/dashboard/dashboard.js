/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {startTabs} from '../common/commonHelper'
import * as NavConstants from '../../screens/navigationConstants'
import {Navigation} from 'react-native-navigation'

const tabs = [
    {//label: ' etv',
        screen: NavConstants.REQUESTS,
        icon: require('./images/icon_flag.png'),
        size: 5,
        title: undefined,
        navigatorStyle: {
            navBarHidden: true,
        }
    },
    {
        //label: ' tupapa',
        screen: NavConstants.REQUESTWIZARD_1,
        icon: require('./images/icon_new_service.png'),
        title: 'Perfil',
        navigatorStyle: {
            navBarHidden: true,
        }
    },
    {
        //label: ' tupapa',
        screen: NavConstants.PROFILE,
        icon: require('./images/icon_profile.png'),
        title: 'Perfil',
        navigatorStyle: {
            navBarHidden: true,
        }
    }
];

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    // componentWillMount() {
    //     startTabs(tabs)
    // }

    componentWillMount() {
        Navigation.startTabBasedApp({
            tabs,
            tabsStyle: {
                tabBarBackgroundColor: '#ffffff',
                navBarButtonColor: '#12010e',
                tabBarButtonColor: '#ddd',
                navBarTextColor: '#12010e',
                tabBarSelectedButtonColor: '#0fa4ac',
                navigationBarColor: '#000',
                navBarBackgroundColor: '#ffffff',
                statusBarColor: '#12010e',
                tabFontFamily: 'BioRhyme-Bold',
            },
            appStyle: {
                tabBarBackgroundColor: '#ffffff',
                navBarButtonColor: '#12010e',
                tabBarButtonColor: '#ace1e4',
                navBarTextColor: '#12010e',
                tabBarSelectedButtonColor: '#0fa4ac',
                navigationBarColor: '#000',
                navBarBackgroundColor: '#ffffff',
                statusBarColor: '#12010e',
                tabFontFamily: 'BioRhyme-Bold',
            }
        })
    }

    render() {
        return (
            <View>

            </View>
        );
    }
}
