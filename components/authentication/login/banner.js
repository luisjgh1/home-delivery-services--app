/**
 * Created by Humbee on 28/8/2017.
 */
import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


export default class Banner extends Component {

  render() {
    return (
      <LinearGradient
        style={styles.banner}
        colors={['#0fa4ac', '#5a4ea3']}
        start={{x: 1.5, y: 0.1}}
        end={{x: -0.1, y: 0.5}}>
          <Image
            source={require('./images/logo_ubi_welcome.png')}
            style={styles.logo}
            resizeMode={Image.resizeMode.contain}
          />
      </LinearGradient>

    )
  }
}

let styles = StyleSheet.create({
  banner: {
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 80,
    width: 80,
  },
});
