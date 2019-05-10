/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, Image} from 'react-native'
import {strings} from '../../../locale/index'
import revelio from '../../../lib/validator'

const password_constraints = {
    password: {
        presence: {
            message: 'This field is required'
        },
        length: {
            minimum: 6,
            tooShort: 'It\'s too short. Min: 6',
            maximum: 12,
            tooLong: 'It\'s too long. Maximum: 12'
        }
    }
}

const email_constraints = {
    email: {
        presence: {
            message: 'This field is required'
        },
        email: {
            message: 'Invalid email format'
        }
    }
}

class RegisterForm extends Component {
    constructor(props) {
        super()
        this.state = {
            errors: {
              email: [],
              password: []
            },
            email: props.form.email,
            password: props.form.password,
            visibility: false,
            passwordActive: false,
            mailActive: false,
            numberVal: false,
            digitVal: false,
            upperCaseVal: false
        }
    }

    _renderTextError(errors) {
        if (errors.length > 0) {
            return <Text style={styles.error}>{errors[0]}</Text>
        }
    }

    _renderVal = (bool) => {
      if (bool)
        return (
          <Image
            source={require('./images/icon_correct_green.png')}
            style={[styles.icon]}
            resizeMode={Image.resizeMode.contain}/>
        )
      else
        return (
          <Image
            source={require('./images/icon_wrong_red.png')}
            style={[styles.icon]}
            resizeMode={Image.resizeMode.contain}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                  placeholder={strings.email}
                  style={
                      [styles.input,
                        (this.state.mailActive) ? {color: '#0fa4ac'} :
                          (this.state.errors.email.length) ? {color: '#f76954'} : {color: '#2d2d30'}]
                    }
                    onFocus={() => {
                      this.setState({mailActive:true})
                    }}
                    underlineColorAndroid={
                        (this.state.mailActive) ? '#0fa4ac' :
                          (this.state.errors.email.length) ? '#f76954' :  '#d9d9d9'
                    }
                    onChangeText={(value) =>{
                      const errors = revelio({email: value}, email_constraints)
                      this.setState({
                          email: value,
                          errors: {
                            ...this.state.errors,
                            email: errors
                          }
                        }, ()=> this.props.setRegisterField({email: value, errors})
                      )
                    }}
                    onBlur={() => {
                        this.setState({
                            mailActive: false
                        })
                    }}
                    autoCorrect={true}
                    autoFocus={false}
                    returnKeyType={'next'}
                    value={this.state.email}
                >
                </TextInput>
                {this._renderTextError(this.state.errors.email)}

                <View>
                    <TouchableWithoutFeedback onPress={()=>{
                      this.setState({
                        visibility: !this.state.visibility
                      })
                    }}>
                        <Image
                            source={(this.state.visibility) ? require('./images/icon_visibility_on.png') : require('./images/icon_visibility_off.png')}
                            style={[styles.iconView]}
                            resizeMode={Image.resizeMode.contain}/>
                    </TouchableWithoutFeedback>
                    <TextInput
                        onFocus={() => {
                            this.setState({passwordActive: true})
                        }}
                        style={
                          [styles.input,
                            (this.state.passwordActive) ? {color: '#0fa4ac'} :
                              (this.state.errors.password.length) ? {color: '#f76954'} : {color: '#2d2d30'}]
                        }
                        placeholder={strings.password}
                        underlineColorAndroid={
                          (this.state.passwordActive) ? '#0fa4ac' :
                            (this.state.errors.password.length) ? '#f76954' :  '#d9d9d9'
                        }
                        onChangeText={(value) => {
                          let upperExp = /(.*[A-Z].*)/g
                          let numberExp =  /(.*[0-9].*)/g
                          const errors = revelio({password: value} , password_constraints)
                          this.setState({
                            password: value,
                            errors: {
                              ...this.state.errors,
                              password: errors,
                            },
                            upperCaseVal: upperExp.test(value),
                            numberVal: numberExp.test(value),
                            lengthVal: (value.length >= 6 && value.length <= 12)
                          },
                          ()=> {
                            this.props.setRegisterField({password: value, errors})
                            this.props.setRegisterValidation( (this.state.upperCaseVal && this.state.numberVal && this.state.lengthVal) )
                          }
                        )}}
                        onBlur={() => {
                            this.setState({
                              passwordActive: false
                            })
                        }}
                        autoCorrect={true}
                        autoFocus={false}
                        returnKeyType={'next'}
                        value={this.state.password}
                        secureTextEntry={!this.state.visibility}
                    >
                    </TextInput>
                    {this._renderTextError(this.state.errors.password)}
                </View>

                <View style={styles.checkContainer}>
                    <View style={styles.step}>
                        {this._renderVal(this.state.numberVal)}
                        <Text style={styles.stepText}>
                            {strings.step1}
                        </Text>
                    </View>
                    <View style={styles.step}>
                        {this._renderVal(this.state.upperCaseVal)}
                        <Text style={styles.stepText}>
                            {strings.step2}
                        </Text>
                    </View>
                    <View style={styles.step}>
                        {this._renderVal(this.state.lengthVal)}
                        <Text style={styles.stepText}>
                            {strings.step3}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        // marginTop: 50,
        marginHorizontal: 36,
    },
    input: {
        height: 50,
        paddingTop: 5,
        fontSize: 16,
        color: '#9e9e9e',
        fontFamily: 'Muli-Regular',
    },
    iconView: {
        position: 'absolute',
        right: 12,
        top: 12,
        width: 30,
        height: 20,
        zIndex: 1000,
    },
    checkContainer: {
        margin: 20,
    },
    step: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    stepText: {
        fontFamily: 'Muli-Italic',
        fontSize: 12,
        color: '#2b2d30',
    },
    icon: {
        width: 12,
        height: 12,
        marginRight: 10,
    },
    error: {
        color: '#f76954',
        fontSize: 11
    }
})

export default RegisterForm