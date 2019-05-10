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
import {strings} from '../../locale/index'
import {helperPop} from '../common/commonHelper'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../../actions'

const food = [
  {
    key: 1,
  },
  {
    key: 2,
  },
];

class ExtrasList extends Component {
  _renderItem(item) {
    return (
      <View style={styles.row}>
          <View style={styles.left}>
              <Text style={styles.extraText}>
                  Pestañas
              </Text>
          </View>
          <View style={styles.right}>
              <Text style={styles.priceExtraText}>
                  Bs. 0000.00
              </Text>
          </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.titleText}>
            {strings.paymentExtras}
          </Text>
          <FlatList
            renderItem={({item}) => this._renderItem(item)}
            data={food}
          />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#edeff2',
    paddingBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titleText: {
    fontFamily: 'Muli-Bold',
    color: '#2b2d30',
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 16,
    margin: 5,
  },
  extraText: {
    fontFamily: 'Muli-Bold',
    color: '#2b2d30',
    lineHeight: 25,
    fontSize: 12,
    margin: 5,
  },
  priceExtraText: {
    fontFamily: 'Muli-Regular',
    color: '#2b2d30',
    lineHeight: 25,
    fontSize: 12,
    margin: 5,
  },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register}) => {
  return {form: register.registerForm}
}

export default connect(MapStateToProps, MapDispatchToProps)(ExtrasList)