/**
 * Created by lgonzalez on 23/08/17.
 */
import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  ActivityIndicator} from 'react-native'
import { strings } from '../../../locale'
import revelio from '../../../lib/validator'

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

class RecoveryForm extends Component {
    constructor() {
        super();
        this.state = {
          mail: false,
          email: '',
          formatError: false
        }
    }

    _renderButton() {
      if (this.props.activity) return (
        <ActivityIndicator
          color="#4013b3"
          size={'large'}/>
      )
      else return (
          <TouchableWithoutFeedback title={strings.recovery} onPress={() => {
            const emailErrors = revelio({email: this.state.email}, email_constraints)
            if (emailErrors.length) {
              this.setState({
                formatError: true
              })
            } else {
              this.setState({
                formatError: false
              })
              this.props.recovery(this.props, this.state.email)
            }
          }}>
              <View style={styles.btn}>
                  <Text style={styles.btnText}>{strings.recovery.toUpperCase()}</Text>
                  <Image
                    source={require('./images/icon_arrow_reset.png')}
                    style={styles.btnIcon}
                    resizeMode={Image.resizeMode.contain}
                  />
              </View>
          </TouchableWithoutFeedback>
        )
    }

    _renderError() {
      if (this.state.formatError) return <Text style={styles.errorText}>Invalid email</Text>
      if (this.props.error) return <Text>Oops, something went wrong</Text>
    }

  render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.messageText}>
                        {strings.messageRecovery}
                    </Text>
                    <TextInput
                        onFocus={ () => this.setState({mail: true}) }
                        style={[styles.input,(this.state.mail) ? {color:'#0fa4ac'} : {color:'#9e9e9e'}]}
                        placeholder={strings.email}
                        underlineColorAndroid={(this.state.mail) ? '#0fa4ac' : '#d9d9d9'}
                        onChangeText={(value) => {
                           this.setState({email: value})
                        }}
                        autoCorrect={true}
                        autoFocus={false}
                        returnKeyType={'next'}
                        value={this.state.email}
                    >
                    </TextInput>
                  {this._renderError()}
                </View>
                {this._renderButton()}
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {},
    form: {
        backgroundColor: '#fff',
        margin: 40,
        padding: 20,
        marginTop: -50,
        marginBottom: 10,
        elevation: 20,
        borderRadius: 3,
    },
    input: {
        height: 50,
        paddingTop: 5,
        fontSize: 16,
        color: '#9e9e9e',
        fontFamily: 'Muli-Regular',
        marginBottom: 10,
    },
    messageText: {
        color: '#2b2d30',
        fontSize: 14,
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: 'Muli-Regular',
        lineHeight: 25,
    },
    btn: {
        backgroundColor: '#0fa4ac',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 70,
        borderRadius: 3,
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Muli-Bold',
        fontSize: 16,
        flex: 4,
        textAlign: 'center',
        lineHeight: 22,
    },
    btnIcon: {
        width: 18,
        height: 18,
        flex: 1,
        marginLeft: -20
    },
    errorText: {
        fontSize: 12,
        color: '#ff6e6e',
        fontFamily: 'Muli-Regular',
        textAlign: 'center',
        marginTop: -5,
    },
});

export default RecoveryForm