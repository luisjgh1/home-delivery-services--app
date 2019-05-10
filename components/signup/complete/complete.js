/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import Banner from './banner'
import Box from './box'

class Complete extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Banner/>
                <Box navigator={this.props.navigator}/>
            </ScrollView>
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

export default Complete