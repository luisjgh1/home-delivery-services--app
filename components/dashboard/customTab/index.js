/**
 * Created by lgonzalez on 27/09/17.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ActivityIndicator, Alert, Animated, ScrollView} from 'react-native'
import Header from  './header'
import Button from './button';

class DefaultTabBar extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.renderTab = this.renderTab.bind(this);
  }

  renderTabOption(name, page) {

  }

  renderTab(name, page, isTabActive, onPressHandler) {

    const activeTextColor = this.props.activeTextColor;
    const inactiveTextColor = this.props.inactiveTextColor;
    const textStyle = this.props.textStyle;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;

    const fontWeight = isTabActive ? 'bold' : 'normal';

    return (
      <Button
        style={{flex: 1,}}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits='button'
        onPress={() => onPressHandler(page)}
      >
        <View style={[styles.tab, this.props.tabStyle,]}>
          <Text style={[{color: textColor, fontWeight,}, textStyle,]}>
            {name}
          </Text>
        </View>
      </Button>
    );
  }

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      // width: 105,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
      // left: 28,
    };

    const left = {
      transform: [
        {
          translateX: this.props.scrollValue.interpolate({
            inputRange: [0, 1,],
            outputRange: [0, containerWidth / numberOfTabs,],
          })
        }
      ]
    }
    return (
      <View>
        <Header/>
        <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor,}, this.props.style,]}>
          {this.props.tabs.map((name, page) => {
            const isTabActive = this.props.activeTab === page;
            const renderTab = this.props.renderTab || this.renderTab;
            return renderTab(name, page, isTabActive, this.props.goToPage);
          })}
          <Animated.View style={[tabUnderlineStyle, left, this.props.underlineStyle,]}/>
        </View>
      </View>

    );
  }
}
DefaultTabBar.propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
  backgroundColor: React.PropTypes.string,
  activeTextColor: React.PropTypes.string,
  inactiveTextColor: React.PropTypes.string,
  textStyle: Text.propTypes.style,
  tabStyle: View.propTypes.style,
  renderTab: React.PropTypes.func,
  underlineStyle: View.propTypes.style,
};

DefaultTabBar.defaultProps = {
  activeTextColor: 'navy',
  inactiveTextColor: 'black',
  backgroundColor: null,
};

export default DefaultTabBar;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
    // marginTop:130,
  },
});