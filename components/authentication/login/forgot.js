/**
 * Created by Humbee on 29/8/2017.
 */
import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {strings} from '../../../locale/index'
import {goToRecovery} from '../../common/commonHelper'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../../actions/index'


class Forgot extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity title={strings.forgot} onPress={() => {
            goToRecovery(this.props)
          }}>
              <Text style={styles.forgotText}>
                {strings.forgot}
              </Text>
          </TouchableOpacity>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  forgotText: {
    color: '#0fa4ac',
    fontFamily: 'Muli-Regular',
    fontSize: 15,
  },
});

const MapReduxFunctions = (dispatch) => bindActionCreators(ActionCreators, dispatch);

const MapStateToProps = (states) => {
  return {}
};

export default connect(MapStateToProps, MapReduxFunctions)(Forgot)