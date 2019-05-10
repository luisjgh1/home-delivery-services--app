/**
 * Created by Humbee on 25/9/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from './header'
import Banner from './banner'
import Services from './services'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ActionCreators} from "../../../actions";

class RequestWizard2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Banner/>
                <ScrollView>
                    <Services navigator={this.props.navigator} setServices={this.props.setServices}/>
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
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = () => {
  return {}
}

export default connect(MapStateToProps, MapDispatchToProps)(RequestWizard2)