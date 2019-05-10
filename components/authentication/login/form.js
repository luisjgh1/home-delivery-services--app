/**
 * Created by Humbee on 28/8/2017.
 */
import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  ActivityIndicator
} from 'react-native'
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

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: '',
      formatError: false,
      loading: false
    }
    this.animatedValue = new Animated.Value(0)
  }

  animate() {
    this.animatedValue.setValue(0)
    Animated.sequence([
      Animated.timing(this.animatedValue,
        {
          toValue: 1,
          duration: 100,
          easing: Easing.linear
        }),
      Animated.timing(this.animatedValue,
        {
          toValue: 0.5,
          duration: 100,
          easing: Easing.linear
        }),
      Animated.timing(this.animatedValue,
        {
          toValue: 0,
          duration: 100,
          easing: Easing.linear
        })
    ]).start()
  }

  renderError() {
    if (this.state.formatError) {
      return <Text style={styles.errorText}>Invalid email/password</Text>
    } else if (this.props.error) {
      switch (this.props.error.code) {
        case 2:
          return <Text style={styles.errorText}>Please, verify your email</Text>
        case 'auth/user-not-found':
          return <Text style={styles.errorText}>Wrong email/password</Text>
        case 'auth/timeout':
          return <Text style={styles.errorText}>Check your connection</Text>
        default:
          return <Text style={styles.errorText}>Oops, something went wrong</Text>
      }
    }
  }

  login = async () => {
    console.log('etv')
    const userErrors = revelio({email: this.state.user}, email_constraints)
    const passwordErrors = revelio({password: this.state.password}, password_constraints)
    if (!userErrors.length && !passwordErrors.length) {
      this.setState({
        formatError: false,
        loading: true
      })
      const login = await this.props.login(this.state.user, this.state.password, this.props.navigator)
      this.setState({
        loading: false
      })
      if (login) this.animate()
    } else {
      this.setState({
        formatError: true
      })
    }
  }

  renderButton = ()=> {
    if (this.state.loading)
      return (
        <ActivityIndicator
          color="#4013b3"
          size={'large'}/>
      )
    else
      return (
        <TouchableWithoutFeedback onPress={()=> this.login()}>
          <View style={styles.btnLogin}>
            <Text style={styles.loginText}>{strings.login.toUpperCase()}</Text>
            <Image
              source={require('./images/icon_arrow_right.png')}
              style={styles.nextIcon}
              resizeMode={Image.resizeMode.contain}
            />
          </View>
        </TouchableWithoutFeedback>
      )
  }

  render() {
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 10, 0]
    })
    return (
      <Animated.View style={{
        backgroundColor: '#fff',
        marginHorizontal: 50,
        padding: 20,
        marginTop: -50,
        marginBottom: 30,
        // borderWidth: 1,
        elevation: 20,
        borderRadius: 3,
        transform: [{
          translateX: movingMargin
        }]
      }}>
        <TextInput
          style={styles.input}
          placeholder={strings.email}
          underlineColorAndroid={'#d9d9d9'}
          onChangeText={(value) => {
            this.setState({user: value})
          }}
          autoCorrect={true}
          autoFocus={false}
          returnKeyType={'next'}
        >
        </TextInput>

        <TextInput
          style={styles.input}
          placeholder={strings.password}
          underlineColorAndroid={'#d9d9d9'}
          onChangeText={(value) => {
            this.setState({password: value})
          }}
          autoCorrect={true}
          autoFocus={false}
          returnKeyType={'next'}
          secureTextEntry
        >
        </TextInput>
        {this.renderButton()}
        {this.renderError()}
      </Animated.View>
    )
  }
}

let styles = StyleSheet.create({
  input: {
    height: 50,
    paddingTop: 5,
    fontSize: 16,
    color: '#9e9e9e',
    fontFamily: 'Muli-Regular',
    marginBottom: 10,
  },
  btnLogin: {
    backgroundColor: '#c7e00b',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 3,
  },
  loginText: {
    color: '#fff',
    fontFamily: 'Muli-Bold',
    fontSize: 16,
  },
  nextIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  errorText: {
    fontSize: 12,
    color: '#ff6e6e',
    fontFamily: 'Muli-Regular',
    textAlign: 'center',
    marginTop: -5
  },
});

export default Form