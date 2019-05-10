/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from "react";
import {Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {strings} from "../../locale/index";
import {
  goToRegisterBasicInfo,
  goToRegisterSuccessful,
  goToSelfie,
  goToWelcome,
  helperPop
} from "../common/commonHelper";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ActionCreators} from "../../actions";
import firebase from "../../lib/firebase";

class SignupFooter extends Component {
  constructor(props) {
    super()
    this.state = {
      step: 1
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => {
            const {step} = this.props
            if (step === 1) {
              goToWelcome(this.props)
            } else {
              helperPop(this.props, false, 'slide-horizontal')
              this.props.goToPrevious()
            }
          }}>
              <View style={styles.flex}>
                  <Image
                    source={require('./register/images/icon_prev.png')}
                    style={styles.prevIcon}
                    resizeMode={Image.resizeMode.contain}
                  />
                  <Text style={styles.nextText}>{strings.previous}</Text>
              </View>
          </TouchableWithoutFeedback>
          <View style={styles.flex}>
              <View style={styles.bar}>
                  <View style={styles.progressBar1}>
                  </View>
                  <View style={[styles.progressBar2, (this.props.step >= 2) ? {backgroundColor: '#41d399'}:{backgroundColor: '#fff'}]}>
                  </View>
                  <View style={[styles.progressBar3, (this.props.step >= 3) ? {backgroundColor: '#41d399'}:{backgroundColor: '#fff'}]}>
                  </View>
              </View>
          </View>
          <TouchableWithoutFeedback onPress={() => {
            const {step, validation} = this.props
            const registerErrors = Object.values(this.props.registerErrors).filter((e)=> Boolean(e.length))
            const basicErrors = Object.values(this.props.basicErrors).filter((e)=> Boolean(e.length))
            if (step === 1) {
              if (!registerErrors.length && validation) {
                goToRegisterBasicInfo(this.props)
                this.props.goToNextStep()
              }
            } else if (step === 2) {
              if (!basicErrors.length && this.props.basicForm.acceptTerms) {
                goToSelfie(this.props)
                this.props.goToNextStep()
              }
            } else if (step === 3) {
              const request = async ()=> {
                let db = firebase.database()
                let storage = firebase.storage().ref()
                try {
                  let registerUser = await firebase.auth().createUserWithEmailAndPassword(this.props.registerForm.email, this.props.registerForm.password)
                  const uid = registerUser.uid
                  let imageRef = storage.child(`${uid}/profileImage.jpg`)
                  let selfieRef = storage.child(`${uid}/registerSelfie.jpg`)
                  let createImage = await imageRef.put(this.props.photo.uri)
                  let createSelfie = await selfieRef.put(this.props.selfie.uri)
                  let user = {
                    "achievements" : {
                      "uidACHIEVE1" : 0,
                      "uidACHIEVE2" : 2,
                      "uidACHIEVE3" : 0,
                      "uidACHIEVE4" : 0
                    },
                    "address" : this.props.basicForm.address,
                    "cards" : {
                      "uidCARD" : {
                        "id" : "uidCARD",
                        "last_digits" : 2165,
                        "token" : "SH3824AJEIFH",
                        "type" : "Mastercard"
                      }
                    },
                    "country" : "Venezuela",
                    "doc_id" : {
                      "number" : this.props.basicForm.id,
                      "type" : this.props.basicForm.typeid
                    },
                    "email" : this.props.registerForm.email,
                    "gender" : this.props.basicForm.gender,
                    "id" : uid,
                    "lastname" : this.props.basicForm.lastName,
                    "name" : this.props.basicForm.name,
                    "pass" : this.props.registerForm.password,
                    "phone" : {
                      "code" : "+58",
                      "number" : this.props.basicForm.phoneNumber
                    },
                    "profile_picture" : createImage.downloadUrl,
                    "selfie" : createSelfie.downloadUrl,
                    "user_type" : {
                      "id" : "user-001",
                      "name" : "client"
                    },
                    "verified" : false
                  }
                  let ref = db.ref('user')
                  let setUser = await ref.child(uid).set(user)
                  goToRegisterSuccessful(this.props)
                  this.props.goToNextStep()
                } catch(err) {
                  console.log(err)
                }
              }

              request()
            }
          }}>
              <View style={styles.flex}>
                  <Text style={styles.nextText}>{strings.next}</Text>
                  <Image
                    source={require('./register/images/icon_arrow_right.png')}
                    style={styles.nextIcon}
                    resizeMode={Image.resizeMode.contain}
                  />
              </View>
          </TouchableWithoutFeedback>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#5a4ea3',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // position: 'absolute',
    // bottom: 0,
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    color: '#fff',
    fontFamily: 'Muli-Bold',
    fontSize: 13,
  },
  nextIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  prevIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  bar: {
    backgroundColor: '#fff',
    height: 5,
    width: Dimensions.get('window').width / 4,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  progressBar1: {
    backgroundColor: '#41d399',
    height: 5,
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    flex: 1,
  },
  progressBar2: {
    backgroundColor: '#fff',
    height: 5,
    flex: 1,
  },
  progressBar3: {
    height: 5,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    flex: 1,
  },
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({register}) => {
  return {
    step: register.step,
    registerErrors: register.registerErrors,
    basicErrors: register.basicErrors,
    basicForm: register.basicForm,
    registerForm: register.registerForm,
    selfie: register.selfie,
    photo: register.photo,
    validation: register.validation
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(SignupFooter)
