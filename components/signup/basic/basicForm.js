/**
 * Created by Humbee on 30/8/2017.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'
import revelio from '../../../lib/validator'
import {strings} from '../../../locale/index'
import Select from '../../common/select/select'
import CheckBox from '../../common/checkbox/checkBox'

const name_constraints = {
  name: {
    format: {
      pattern: "[ a-z]+",
      flags: "i",
      message: "Can only contain letters"
    },
    presence: {
      message: 'This field is required'
    },
    length: {
      minimum: 2,
      tooShort: 'It\'s too short. Min: 2',
      maximum: 32,
      tooLong: 'It\'s too long. Maximum: 32'
    }
  }
}

const lastname_constraints = {
  last: {
    format: {
      pattern: "[ a-z]+",
      flags: "i",
      message: "Can only contain letters"
    },
    presence: {
      message: 'This field is required'
    },
    length: {
      minimum: 2,
      tooShort: 'It\'s too short. Min: 2',
      maximum: 32,
      tooLong: 'It\'s too long. Maximum: 32'
    }
  }
}

const idVe_constraints = {
  id: {
    format:{
      pattern: "[0-9]+",
      flags: "i",
      message: "Can only contain numbers"
    },
    presence: {
      message: 'This field is required'
    },
    length: {
      minimum: 7,
      tooShort: 'It\'s too short. Min: 7',
      maximum: 8,
      tooLong: 'It\'s too long. Maximum: 8'
    }
  }
}

const address_constraints = {
  address: {
    format:{
      pattern: "[ 0-9a-z]+",
      flags: "i",
      message: "Can only contain letters and numbers"
    },
    presence: {
      message: 'This field is required'
    },
    length: {
      minimum: 16,
      tooShort: 'It\'s too short. Min: 16',
      maximum: 48,
      tooLong: 'It\'s too long. Maximum: 48'
    }
  }
}

const number_constraints = {
  phone: {
    format:{
      pattern: "[0-9]+",
      flags: "i",
      message: "Can only contain numbers"
    },
    presence: {
      message: 'This field is required'
    },
    length: {
      is: 10,
      message: 'Invalid number'
    }
  }
}

class BasicForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameActive: false,
      idActive: false,
      lastNameActive: false,
      addressActive: false,
      phoneActive: false,
      name: props.basicForm.name,
      lastName: props.basicForm.lastName,
      id: props.basicForm.id,
      gender: props.basicForm.gender,
      address: props.basicForm.address,
      typeid: props.basicForm.typeid,
      phoneNumber: props.basicForm.phoneNumber,
      acceptTerms: true,
      errors: {
        name: [],
        lastName: [],
        id: [],
        address: [],
        phoneNumber: []
      }
    }
  }

  _renderTextError(errors) {
    if (errors.length > 0) {
      return <Text style={styles.error}>{errors[0]}</Text>
    }
  }

  render() {
    const id_types = {
      CIE: {
        label: 'CI-E',
      },
      CIV: {
        label: 'CI-V',
      }
    }

    const genders= {
      male: {
        label: 'Male'
      },
      female: {
        label: 'Female'
      }
    }
    return (
        <View style={styles.container}>
            <TextInput
              onFocus={() => {             
                this.setState({nameActive:true})
              }}
              style={
                [styles.input,
                  (this.state.nameActive) ? {color: '#0fa4ac'} :
                    (this.state.errors.name.length) ? {color: '#f76954'} : {color: '#2d2d30'}]
              }
              placeholder={strings.name}
              underlineColorAndroid={
                (this.state.nameActive) ? '#0fa4ac' :
                  (this.state.errors.name.length) ? '#f76954' :  '#d9d9d9'
              }
              onChangeText={(value) =>{
                const errors = revelio({name: value}, name_constraints)
                this.setState({
                    name: value,
                    errors: {
                      ...this.state.errors,
                      name: errors
                    }
                  }, ()=> this.props.setBasicField({name: value.trim(), errors})
                )
              }}
              onBlur={() => {
                this.setState({
                  nameActive: false,
                  name: this.state.name.trim()
                })
              }}
              autoCorrect={true}
              autoFocus={false}
              returnKeyType={'next'}
              value={this.state.name}
            >
            </TextInput>
            {this._renderTextError(this.state.errors.name)}

            <TextInput
                onFocus={() => {
                  this.setState({lastNameActive:true})
                }}
                style={
                  [styles.input,
                    (this.state.lastNameActive) ? {color: '#0fa4ac'} :
                      (this.state.errors.lastName.length) ? {color: '#f76954'} : {color: '#2d2d30'}]
                }
                placeholder={strings.lastName}
                underlineColorAndroid={
                  (this.state.lastNameActive) ? '#0fa4ac' :
                    (this.state.errors.lastName.length) ? '#f76954' :  '#d9d9d9'
                }
                onChangeText={(value) =>{
                  const errors = revelio({last: value}, lastname_constraints)
                  this.setState({
                      lastName: value,
                      errors: {
                        ...this.state.errors,
                        lastName: errors
                      }
                    }, ()=> this.props.setBasicField({lastName: value.trim(), errors})
                  )
                }}
                onBlur={() => {
                  this.setState({
                    lastNameActive: false,
                    lastName: this.state.lastName.trim()
                  })
                }}
                autoCorrect={true}
                autoFocus={false}
                returnKeyType={'next'}
                value={this.state.lastName}
            >
            </TextInput>
            {this._renderTextError(this.state.errors.lastName)}

            <View style={styles.row}>
                <View style={[styles.row, {flex: 1}]}>
                    <Select
                        models={id_types}
                        selectedKey={this.state.typeid}
                        placeholder={'CI-V'}
                        onChange={(key) =>
                            this.setState({typeid: key}, ()=> this.props.setBasicField({typeid: key}) )
                        }
                        labelStyle={styles.labelStyle}
                        style={styles.select}
                        value={this.state.typeid}
                    />
                    <Image
                        source={require('./images/arrow_drop_down.png')}
                        style={styles.icon}
                        resizeMode={Image.resizeMode.contain}
                    />
                </View>
                <TextInput
                    style={[styles.input,
                        (this.state.idActive) ? {color: '#0fa4ac'} :
                            (this.state.errors.id.length) ? {color: '#f76954'} : {color: '#2d2d30'}, {flex: 3}]
                    }
                    onFocus={() => {
                        this.setState({idActive:true})
                    }}
                    underlineColorAndroid={
                        (this.state.idActive) ? '#0fa4ac' :
                        (this.state.errors.id.length) ? '#f76954' :  '#d9d9d9'
                    }
                    onChangeText={(value) =>{
                        const errors = revelio({id: value}, idVe_constraints)
                        this.setState({
                            id: value,
                            errors: {
                                ...this.state.errors,
                                id: errors
                            }}, ()=> this.props.setBasicField({id: value, errors})
                        )
                    }}
                    onBlur={() => {
                        this.setState({
                            idActive: false
                        })
                    }}
                    value={this.state.id}
                    autoCorrect={true}
                    autoFocus={false}
                    returnKeyType={'next'}/>
            </View>
            {this._renderTextError(this.state.errors.id)}

            <View style={styles.row}>
                <Text style={styles.genderText}>
                    {strings.gender}
                </Text>
                <View style={[styles.row, {flex: 10}]}>
                    <Select
                        models={genders}
                        selectedKey={this.state.gender}
                        onChange={(key) =>
                            this.setState({gender: key}, ()=> this.props.setBasicField({typeid: key}) )
                        }
                        labelStyle={styles.labelStyle}
                        style={styles.select}
                        value={this.state.typeid}
                    />
                    <Image
                        source={require('./images/arrow_drop_down.png')}
                        style={styles.icon}
                        resizeMode={Image.resizeMode.contain}
                    />
                </View>
            </View>

            <TextInput
                style={[styles.input,
                    (this.state.addressActive) ? {color: '#0fa4ac'} :
                        (this.state.errors.address.length) ? {color: '#f76954'} : {color: '#2d2d30'}]
                }
                onFocus={() => {
                    this.setState({addressActive:true})
                }}
                underlineColorAndroid={
                    (this.state.addressActive) ? '#0fa4ac' :
                        (this.state.errors.address.length) ? '#f76954' :  '#d9d9d9'
                }
                onChangeText={(value) =>{
                    const errors = revelio({address: value}, address_constraints)
                    this.setState({
                      address: value,
                        errors: {
                            ...this.state.errors,
                            address: errors
                    }}, ()=> this.props.setBasicField({address: value.trim(), errors}))
                }}
                onBlur={() => {
                    this.setState({
                        addressActive: false,
                        address: this.state.address.trim()
                    })
                }}
                value={this.state.address}
                placeholder={strings.address}
                autoCorrect={true}
                autoFocus={false}
                returnKeyType={'next'}/>
                {this._renderTextError(this.state.errors.address)}

                <View style={styles.row}>
                    <View style={[styles.row, {flex: 1}]}>
                        <Select
                            models={id_types}
                            selectedKey={this.state.phoneNumber}
                            placeholder={'+58'}
                            onChange={(key) => this.setState({phoneNumber: key})}
                            labelStyle={styles.labelStyle}
                            style={styles.select}
                        />
                        <Image
                            source={require('./images/arrow_drop_down.png')}
                            style={styles.icon}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>

                    <TextInput
                        style={[styles.input,
                            (this.state.phoneActive) ? {color: '#0fa4ac'} :
                                (this.state.errors.phoneNumber.length) ? {color: '#f76954'} : {color: '#2d2d30'}, {flex: 3}]
                        }
                        onFocus={() => {
                            this.setState({phoneActive:true})
                        }}
                        underlineColorAndroid={
                            (this.state.phoneActive) ? '#0fa4ac' :
                                (this.state.errors.phoneNumber.length) ? '#f76954' :  '#d9d9d9'
                        }
                        onChangeText={(value) =>{
                            const errors = revelio({phone: value}, number_constraints)
                            this.setState({
                                phoneNumber: value,
                                errors: {
                                ...this.state.errors,
                                phoneNumber: errors
                            }}, ()=> this.props.setBasicField({phoneNumber: value, errors}))
                        }}
                        onBlur={() => {
                            this.setState({
                                phoneActive: false
                            })
                        }}
                        value={this.state.phoneNumber}
                        placeholder={strings.phone}
                        autoCorrect={true}
                        autoFocus={false}
                        returnKeyType={'next'}
                    >
                    </TextInput>
                </View>
                {this._renderTextError(this.state.errors.phoneNumber)}

                <View style={styles.terms}>
                    <CheckBox
                        onClick={() => {
                            this.setState({
                                acceptTerms: !this.state.acceptTerms
                            }, ()=> this.props.setBasicField({acceptTerms: this.state.acceptTerms})
                        )}}
                        isChecked={this.state.acceptTerms}
                    />
                    <Text style={styles.acceptText}>
                        {strings.acceptTerms}
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.termsText}> {strings.terms} </Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    height: 50,
    paddingTop: 5,
    fontSize: 16,
    color: '#9e9e9e',
    fontFamily: 'Muli-Regular',
  },
  select: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    // alignItems: 'center',
    // flex:1,
  },
  labelStyle: {
    fontFamily: 'Muli-Regular',
    fontSize: 16,
    color: '#2b2d30',
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: 11,
    width: 12,
    height: 12,
    zIndex: 1000,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  genderText: {
    fontFamily: 'Muli-Bold',
    color: '#2b2d30',
    fontSize: 16,
    marginRight: 15,
    paddingBottom: 3
  },
  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  acceptText: {
    fontFamily: 'Muli-Italic',
    fontSize: 16,
    color: '#2b2d30',
    paddingLeft: 10,
  },
  termsText: {
    fontFamily: 'Muli-BoldItalic',
    fontSize: 16,
    color: '#0fa4ac',
  },
});

export default BasicForm