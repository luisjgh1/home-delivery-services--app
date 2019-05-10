/**
 * Created by Humbee on 25/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Image} from 'react-native'
import Header from './header'
import Banner from './banner'
import Banner2 from './banner2'
import Confirm from './confirm'
import {strings} from '../../../locale/index'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ActionCreators} from "../../../actions";
class RequestWizard4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Banner/>
        <ScrollView>
          <Banner2/>
          <Confirm description={this.props.request.description}/>
          <TouchableWithoutFeedback
            onPress={()=>{
              console.log(this.props.user.id)
              this.props.pushRequest(
                {
                  date : "2017-09-09",
                  id : "uidREQUEST",
                  category: {
                   title: 'Title'
                  },
                  status: 'pending',
                  userId: this.props.user.id
                }
              )}}>
            <View style={styles.buttonNext}>
              <Text style={styles.btnText}>
                {strings.finalize.toUpperCase()}
              </Text>
              <Image
                source={require('../images/icon_check.png')}
                style={styles.nextIcon}
                resizeMode={Image.resizeMode.contain}
              />
            </View>
          </TouchableWithoutFeedback>
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
  buttonNext: {
    backgroundColor: '#c7e00b',
    padding: 10,
    marginTop: 10,
    marginBottom: 50,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 3,
    minWidth: 290,
    height: 36,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Muli-ExtraBold',
    fontSize: 16,
  },
  nextIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
});


const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({request, login}) => {
  return {
    request,
    user: login.userData
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(RequestWizard4)