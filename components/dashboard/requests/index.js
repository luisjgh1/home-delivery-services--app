/**
 * Created by lgonzalez on 26/09/17.
 */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Pending from '../pending'
import Processed from '../processed'
import {startTabs} from '../../common/commonHelper'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import CustomTabBar from '../customTab'
import Header from '../header'

export default class Requests extends Component {
    constructor() {
        super()
        this.state = {}
    }

  render() {
    return (
      <ScrollableTabView renderTabBar={() => <CustomTabBar someProp={'here'} />}
                         tabBarActiveTextColor='#0fa4ac'
                         tabBarInactiveTextColor='#aaa'
                         tabBarUnderlineStyle={{backgroundColor: '#0fa4ac'}}
                         tabBarTextStyle={{fontSize: 15, fontFamily: 'Muli-ExtraBold'}}
                         keyboardShouldPersistTabs={"handled"}
      >
        <Pending navigator={this.props.navigator} tabLabel="PENDIENTES" />
        <Processed tabLabel="PROCESADAS" />
      </ScrollableTabView>
    );
  }
}

