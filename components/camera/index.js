/**
 * Created by lgonzalez on 22/09/17.
 */
'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    Platform
} from 'react-native';
import {CameraKitCamera} from 'react-native-camera-kit';
import {goToSelfieSuccess, helperPop} from '../common/commonHelper'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../../actions'
import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Select Profile Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


class CameraScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            userUid: ''
        }
    }

    takePicture = async () => {
        let { uri } = await this.camera.capture(false)
        await this.props.setter({uri})
        const type = Object.keys(this.props.navigationObject)[0]
        this.props.navigator[type]({...this.props.navigationObject[type]})
    }

    changeCamera = () => {
        this.camera.changeCamera()
    }

    render() {
        return (
            <View style={styles.container}>
                <CameraKitCamera
                    ref={cam => this.camera = cam}
                    style={{
                        flex: 1,
                        backgroundColor: 'white'
                    }}
                    cameraOptions={{
                        flashMode: 'auto',
                        focusMode: 'on',
                        zoomMode: 'on',
                        ratioOverlay: '1:1',
                        ratioOverlayColor: '#00000077'
                    }}
                >
                </CameraKitCamera>

                <TouchableWithoutFeedback style={styles.cancel}>
                    <Image source={require('./images/icon_close.png')}
                           style={styles.iconClose} resizeMode={'contain'}/>
                </TouchableWithoutFeedback>

                <View style={styles.camera}>
                    <TouchableOpacity
                      onPress={()=> {
                        let options = {
                          title: 'Select Avatar',
                          customButtons: [
                            {name: 'fb', title: 'Choose Photo from Facebook'},
                          ],
                          storageOptions: {
                            skipBackup: true,
                            path: 'images'
                          }
                        };

                        /**
                         * The first arg is the options object for customization (it can also be null or omitted for default options),
                         * The second arg is the callback which sends object: response (more info below in README)
                         */
                        ImagePicker.launchImageLibrary(options, (response) => {
                          console.log('Response = ', response);

                          if (response.didCancel) {
                            console.log('User cancelled image picker');
                          }
                          else if (response.error) {
                            console.log('ImagePicker Error: ', response.error);
                          }
                          else if (response.customButton) {
                            console.log('User tapped custom button: ', response.customButton);
                          }
                          else {
                            let source = { uri: response.uri };

                            // You can also display the image using data:
                            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                            this.props.setPhoto(source)
                            helperPop(this.props)
                          }
                        });
                        }
                      }
                      style={styles.flex}>
                        <Image source={require('./images/icon_library.png')}
                           style={styles.icon} resizeMode={'contain'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flex} onPress={()=> this.takePicture()}>
                        <Image source={require('./images/camera_btn.png')}
                           style={styles.cam} resizeMode={'contain'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flex} onPress={()=> this.changeCamera()}>
                        <Image source={require('./images/icon_flip_camera.png')}
                           style={styles.icon} resizeMode={'contain'}/>
                    </TouchableOpacity>
                </View>

                {/*<TouchableHighlight onPress={async () => {*/}
                    {/*await this.camera.changeCamera()*/}
                {/*}} style={styles.button}>*/}
                    {/*<Text> Shot</Text>*/}
                {/*</TouchableHighlight>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    button: {
        position: 'absolute',
        marginBottom: 0
    },

    iconClose: {
        width: 16,
        height: 16,
        position: 'absolute',
        top: 20,
        left: 20,
    },
    camera: {
        backgroundColor: '#fff',
        padding: 13,
        flexDirection: 'row',
        alignItems: 'center',
    },
    flex: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    cam: {
        width: 53,
        height: 53,
    },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register}) => {
    return {}
}

export default connect(MapStateToProps, MapDispatchToProps)(CameraScreen)