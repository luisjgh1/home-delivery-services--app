/**
 * Created by Humbee on 25/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Image} from 'react-native'
import Header from './header'
import Banner from './banner'
import Address from './address'
import {strings} from '../../../locale/index'
import { goToRequestWizard4 } from '../../common/commonHelper'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ActionCreators} from "../../../actions";

class RequestWizard3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Banner/>
                <ScrollView>
                    <Address addressFields={this.props.addressFields} setAddressField={this.props.setAddressField}/>

                    <TouchableWithoutFeedback onPress={()=> goToRequestWizard4(this.props.navigator)}>
                        <View style={styles.buttonNext}>
                            <Text style={styles.btnText}>
                                {strings.continue}
                            </Text>
                            <Image
                                source={require('../images/icon_arrow_right.png')}
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
        marginTop: 30,
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

const MapStateToProps = ({request}) => {
  return {
      addressFields: request.addressFields
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(RequestWizard3)