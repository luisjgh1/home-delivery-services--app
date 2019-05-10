/**
 * Created by lgonzalez on 23/08/17.
 */
import * as NavConstants from '../../screens/navigationConstants'
import {strings} from '../../locale/index'
import {Platform} from 'react-native'
import {Navigation} from 'react-native-navigation'


//BIENVENIDO A UBI
export const goToWelcome = (props) => {
  props.navigator.resetTo({
    screen: NavConstants.WELCOME,
    navigatorStyle: {
      navBarHidden: true,
    },
  })
};

//LOGIN
export const goToLogin = (props) => {
  props.navigator.push({
    screen: NavConstants.LOGIN,
    title: strings.login,
    navigatorStyle: {
      navBarTransparent: true,
      navBarNoBorder: true,
      drawUnderNavBar: true,
      navBarButtonColor: '#fff',
      navBarTextColor: '#fff',
      navBarTextFontSize: 20,
      navBarTextFontFamily: 'Muli-Bold',
      navBarTitleTextCentered: true
    },
    animationType: (Platform.OS === 'ios') ? 'fade' : 'fade'
  })
}

//REGISTRO
export const goToRegister = (props) => {
  props.navigator.push({
    screen: NavConstants.REGISTER,
    title: strings.signup,
    navigatorStyle: {
      navBarTextFontSize: 20,
      navBarTextFontFamily: 'Muli-Bold',
      navBarTitleTextCentered: true,
      navBarBackgroundColor: '#fff',
    },
    animationType: 'fade'
  })
};

export const goToRegisterBasicInfo = (props) => {
  props.navigator.push({
    screen: NavConstants.BASIC,
    title: strings.basicInfo,
    navigatorStyle: {
      navBarTextFontSize: 20,
      navBarTextFontFamily: 'Muli-Bold',
      navBarTitleTextCentered: true,
      navBarBackgroundColor: '#fff',
    },
    animationType: 'slide-horizontal',
    overrideBackPress: true // This property is a MUST if backButton needs an special event. Android only
  })
};

export const goToRegisterSuccessful = (props) => {
  props.navigator.push({
    screen: NavConstants.COMPLETE,
    navigatorStyle: {
      navBarHidden: true,
    },
    animationType: 'slide-horizontal',
    overrideBackPress: true
  })
}

export const goToSelfie = (props) => {
  props.navigator.push({
    screen: NavConstants.SELFIE,
    navigatorStyle: {
      navBarHidden: true,
    },
    animationType: 'slide-horizontal',
    overrideBackPress: true // This property is a MUST if backButton needs an special event. Android only
  })
};

export const goToSelfieSuccess = (props) => {
  props.navigator.push({
    screen: NavConstants.SELFIE_SUCCESS,
    navigatorStyle: {
      navBarHidden: true,
    },
    animationType: 'slide-horizontal',
    overrideBackPress: true // This property is a MUST if backButton needs an special event. Android only
  })
};

//RECUPERAR PASSWORD
export const goToRecovery = (props) => {
  props.navigator.push({
    screen: NavConstants.RECOVERY,
    title: strings.forgot,
    navigatorStyle: {
      navBarTransparent: true,
      navBarNoBorder: true,
      drawUnderNavBar: true,
      navBarButtonColor: '#fff',
      navBarTextColor: '#fff',
      navBarTextFontSize: 20,
      navBarTextFontFamily: 'Muli-Bold',
      navBarTitleTextCentered: true,
    },
    animationType: (Platform.OS === 'ios') ? 'fade' : 'fade'
  })
};

export const goToRecoverySuccess = (props) => {
  props.navigator.push({
    screen: NavConstants.RECOVERY_SUCCESS,
    title: strings.forgot,
    navigatorStyle: {
      navBarTransparent: true,
      navBarNoBorder: true,
      drawUnderNavBar: true,
      navBarButtonColor: '#fff',
      navBarTextColor: '#fff',
      navBarTextFontSize: 20,
      navBarTextFontFamily: 'Muli-Bold',
      navBarTitleTextCentered: true,
    },
    animationType: (Platform.OS === 'ios') ? 'fade' : 'fade'
  })
};

//ONBOARDING
export const goToOnboarding1 = (navigator) => {
  navigator.push({
    screen: NavConstants.ONBOARDING_1,
    navigatorStyle: {
      navBarHidden: true,
    },
    animationType: 'slide-horizontal',
  })
};

export const goToOnboarding2 = (props) => {
  props.navigator.push({
    screen: NavConstants.ONBOARDING_2,
    navigatorStyle: {
      navBarHidden: true,
    },
    animationType: 'slide-horizontal',
  })
};

export const goToOnboarding3 = (props) => {
  props.navigator.push({
    screen: NavConstants.ONBOARDING_3,
    navigatorStyle: {
      navBarHidden: true,
    },
    animationType: 'slide-horizontal',
  })
};

export const helperPop = (navigator, bool = false, animationType = 'fade') => {
  bool ?
    navigator.popToRoot({
      animated: true,
      animationType
    }) :
    navigator.pop({
      animated: true,
      animationType
    })
}

export const goToCamera = (navigator, navigationObject, setter) => {
  navigator.push({
    screen: NavConstants.CAMERA,
    navigatorStyle: {
      navBarHidden: true,
    },
    animationType: 'slide-horizontal',
    passProps: { navigationObject, setter }
  })
}

export const goToDashboard = (props) => {
  props.navigator.resetTo({
    screen: NavConstants.DASHBOARD,
    navigatorStyle: {
      navBarHidden: true,
    },
    animationType: 'slide-horizontal',
  })
}

export const startTabs = (tabs) => {
  Navigation.startTabBasedApp({
    tabs,
    tabsStyle: {
      tabBarBackgroundColor: '#ffffff',
      navBarButtonColor: '#12010e',
      tabBarButtonColor: '#ddd',
      navBarTextColor: '#12010e',
      tabBarSelectedButtonColor: '#4013b3',
      navigationBarColor: '#000',
      navBarBackgroundColor: '#ffffff',
      statusBarColor: '#12010e',
      tabFontFamily: 'BioRhyme-Bold',
    },
    appStyle: {
      tabBarBackgroundColor: '#ffffff',
      navBarButtonColor: '#12010e',
      tabBarButtonColor: '#aaa',
      navBarTextColor: '#12010e',
      tabBarSelectedButtonColor: '#4013b3',
      navigationBarColor: '#000',
      navBarBackgroundColor: '#ffffff',
      statusBarColor: '#12010e',
      tabFontFamily: 'BioRhyme-Bold',
    }
  })
}

// Go to Providers
export const goToProviders = (navigator) => {
  navigator.push({
    screen: NavConstants.PROVIDERS,
    title: strings.providers,
    navigatorStyle: {
      navBarHidden: false,
    },
    animationType: 'slide-horizontal',
  })
}

//Request wizard

export const goToRequestWizard2 = (navigator)=> {
  navigator.push({
    screen: NavConstants.REQUESTWIZARD_2,
    title: 'etv',
    navigatorStyle: {
      navBarHidden: true
    },
    animationType: 'slide-horizontal'
  })
}

export const goToRequestWizard3 = (navigator)=> {
  navigator.push({
    screen: NavConstants.REQUESTWIZARD_3,
    title: 'etvvv',
    navigatorStyle: {
      navBarHidden: true
    },
    animationType: 'slide-horizontal'
  })
}

export const goToRequestWizard4 = (navigator)=> {
  navigator.push({
    screen: NavConstants.REQUESTWIZARD_4,
    title: 'etv4',
    navigatorStyle: {
      navBarHidden: true
    },
    animationType: 'slide-horizontal'
  })
}

export const goToPayment = (navigator)=> {
  navigator.push({
    screen: NavConstants.PAYMENT_SERVICE,
    title: 'Payment Service',
    navigatorStyle: {
      navBarHidden: true,
      tabBarHidden: true
    },
    animationType: 'slide-horizontal'
  })
}


