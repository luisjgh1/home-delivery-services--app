/**
 * Created by Humbee on 29/8/2017.
 */
import React, {Component} from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {strings} from "../../../locale/index";
import {goToCamera} from "../../common/commonHelper";
import Triangle from './triangle'

const Children = ({navigator, setPhoto}) => (
  <View>
    <TouchableOpacity
      style={{alignItems: 'center'}}
      onPress={async () => {
       // let cameraPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
        /*if (cameraPermission)
          goToCamera(navigator, {pop: {animated: true, animationType: 'fade'}}, setPhoto)*/
        //else {
        if (Platform.Version >= 23)
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              goToCamera(navigator, {pop: {animated: true, animationType: 'fade'}}, setPhoto)
            } else {
              console.log("Camera permission denied")
            }
          } catch (err) {
            console.warn(err)
          }
        else
          goToCamera(navigator, {pop: {animated: true, animationType: 'fade'}}, setPhoto)
        //}

      }}
    >
      <Image
        source={require('./images/icon_upload_picture.png')}
        style={styles.logo}
        resizeMode={Image.resizeMode.contain}
      />
      <Text style={styles.uploadText}>
        {strings.uploadPicture}
      </Text>
    </TouchableOpacity>
  </View>

)

export default class Banner extends Component {
  constructor(props){
    super(props)
  }
  render() {
    if (!this.props.uri) return (
      <LinearGradient
        style={styles.banner}
        colors={['#0fa4ac', '#5a4ea3']}
        start={{x: 1.5, y: 0.1}}
        end={{x: -0.1, y: 0.5}}>

        <Children navigator={this.props.navigator} setPhoto={this.props.setPhoto} />
        <Triangle
          width={Dimensions.get('window').width}
          height={130}
          color={'#fff'}
          direction={'right'}
          style={{position: 'absolute', bottom: -65}}
        />
      </LinearGradient>
    )
    else return (
      <Image source={{uri: this.props.uri}} style={styles.banner}>
        <Children navigator={this.props.navigator}/>
        <Triangle
          width={Dimensions.get('window').width}
          height={130}
          color={'#fff'}
          direction={'right'}
          style={{position: 'absolute', bottom: -65}}
        />
      </Image>
    )
  }
}

let styles = StyleSheet.create({
  banner: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 60,
    width: 60,
    marginBottom: 10,
  },
  uploadText: {
    color: '#fff',
    fontFamily: 'Muli-Regular',
    fontSize: 16,
  },
});