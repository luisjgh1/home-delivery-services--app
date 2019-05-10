import {Navigation, ScreenVisibilityListener} from 'react-native-navigation'
// import * as NavConstants from './navigationConstants'
//Screens
import Welcome from '../components/welcome/welcome'
import Auth from '../components/authentication/auth'
import Login from '../components/authentication/login/login'
import Recovery from '../components/authentication/recovery/recovery'
import RecoveryForm from '../components/authentication/recovery/recoveryForm'
import RecoverySuccess from '../components/authentication/recovery/recoverySuccess'
import Loading from '../components/loading/loading'
import Basic from '../components/signup/basic/basic'
import Complete from '../components/signup/complete/complete'
import Selfie from '../components/signup/selfie/selfie'
import SelfieSuccess from '../components/signup/success/selfieSuccess'
import SignupFooter from '../components/signup/signupFooter'
import Verification from '../components/signup/verification'
import Register from '../components/signup/register/register'
import RegisterForm from '../components/signup/register/registerForm'
// Onborading screens
import Onboarding1 from '../components/onboarding/onboarding1'
import Onboarding2 from '../components/onboarding/onboarding2'
import Onboarding3 from '../components/onboarding/onboarding3'
// Request Wizard screens
import RequestWizard1 from '../components/requestWizard/1/requestWizard1'
import RequestWizard2 from '../components/requestWizard/2/requestWizard2'
import RequestWizard3 from '../components/requestWizard/3/requestWizard3'
import RequestWizard4 from '../components/requestWizard/4/requestWizard4'

import * as NavConstants from './navigationConstants'
// Camera
import Camera from '../components/camera'
// Dashboard
import Dashboard from '../components/dashboard/dashboard'
import Pending from '../components/dashboard/pending/'
import Processed from '../components/dashboard/processed/'
import Requests from '../components/dashboard/requests'
// Providers
import Providers from '../components/providers/providers'
import ProfileProvider from '../components/providers/profileProviders/profileProvider'
// Request Details
import RequestDetails from '../components/providers/requestDetails/requestDetails'
// Payment Service
import PaymentService from '../components/paymentService/paymentService'
import NewPaymentMethod from '../components/paymentService/newPaymentMethod/newPaymentMethod'
import PaymentSuccess from '../components/paymentService/paymentSuccess/paymentSuccess'
import PaymentError from '../components/paymentService/paymentError/paymentError'
// Service In Process
import ServiceInProcess from '../components/serviceInProcess/serviceInProcess'
// Profile
import Profile from '../components/profile/profile'
import EditProfile from '../components/profile/editProfile/editProfile'
import EditPassword from '../components/profile/editProfile/editPassword'
import PaymentMethods from '../components/profile/paymentMethods/paymentMethods'
import History from '../components/profile/history/history'
import Support from '../components/profile/support/support'
import SendComments from '../components/profile/support/sendComments'
import ReportProblem from '../components/profile/support/reportProblem'
// Settings
import Settings from '../components/settings/settings'


export const registerScreens = (store, Provider) => {
    //Welcome screen
    Navigation.registerComponent(NavConstants.WELCOME, () => Welcome, store, Provider);
    // Authentication Screens
    Navigation.registerComponent(NavConstants.AUTH, () => Auth, store, Provider);
    Navigation.registerComponent(NavConstants.LOGIN, () => Login, store, Provider);
    Navigation.registerComponent(NavConstants.RECOVERY_SUCCESS, () => RecoverySuccess, store, Provider);
    Navigation.registerComponent(NavConstants.RECOVERY, () => Recovery, store, Provider);
    Navigation.registerComponent(NavConstants.RECOVERY_FORM, () => RecoveryForm, store, Provider);
    // Dashboard Screens
    // Navigation.registerComponent('dashboard.Dashboard', ()=> Dashboard, store, Provider)
    // Loading Screens
    Navigation.registerComponent(NavConstants.LOADING, () => Loading, store, Provider);
    // Signup Screens
    Navigation.registerComponent(NavConstants.BASIC, () => Basic, store, Provider);
    Navigation.registerComponent(NavConstants.COMPLETE, () => Complete, store, Provider);
    Navigation.registerComponent(NavConstants.SELFIE, () => Selfie, store, Provider);
    Navigation.registerComponent(NavConstants.SELFIE_SUCCESS, () => SelfieSuccess, store, Provider);
    Navigation.registerComponent('signup.SignupFooter', () => SignupFooter, store, Provider);
    Navigation.registerComponent('signup.Verification', () => Verification, store, Provider);
    Navigation.registerComponent('signup.register.Register', () => Register, store, Provider);
    Navigation.registerComponent('signup.register.RegisterForm', () => RegisterForm, store, Provider);
    // Onboarding screens
    Navigation.registerComponent(NavConstants.ONBOARDING_1, () => Onboarding1, store, Provider);
    Navigation.registerComponent(NavConstants.ONBOARDING_2, () => Onboarding2, store, Provider);
    Navigation.registerComponent(NavConstants.ONBOARDING_3, () => Onboarding3, store, Provider)
    // Camera screens
    Navigation.registerComponent(NavConstants.CAMERA, ()=> Camera, store, Provider)
    // Dashboard
    Navigation.registerComponent(NavConstants.REQUESTS, ()=> Requests, store, Provider)
    Navigation.registerComponent(NavConstants.DASHBOARD, ()=> Dashboard, store, Provider)
    Navigation.registerComponent(NavConstants.PENDING, ()=> Pending, store, Provider)
    Navigation.registerComponent(NavConstants.PROCESSED, ()=> Processed, store, Provider)

    Navigation.registerComponent(NavConstants.ONBOARDING_3, () => Onboarding3, store, Provider);
    // Request Wizard screens
    Navigation.registerComponent(NavConstants.REQUESTWIZARD_1, () => RequestWizard1, store, Provider);
    Navigation.registerComponent(NavConstants.REQUESTWIZARD_2, () => RequestWizard2, store, Provider);
    Navigation.registerComponent(NavConstants.REQUESTWIZARD_3, () => RequestWizard3, store, Provider);
    Navigation.registerComponent(NavConstants.REQUESTWIZARD_4, () => RequestWizard4, store, Provider);
    // Providers
    Navigation.registerComponent(NavConstants.PROVIDERS, ()=> Providers, store, Provider)
    Navigation.registerComponent(NavConstants.PROFILE_PROVIDERS, ()=> ProfileProvider, store, Provider)
    // Request Details
    Navigation.registerComponent(NavConstants.REQUEST_DETAILS, ()=> RequestDetails, store, Provider)
    // Payment Service
    Navigation.registerComponent(NavConstants.PAYMENT_SERVICE, ()=> PaymentService, store, Provider)
    Navigation.registerComponent(NavConstants.NEW_PAYMENT_METHOD, ()=> NewPaymentMethod, store, Provider)
    Navigation.registerComponent(NavConstants.PAYMENT_SUCCESS, ()=> PaymentSuccess, store, Provider)
    Navigation.registerComponent(NavConstants.PAYMENT_ERROR, ()=> PaymentError, store, Provider)
    // Service In Process
    Navigation.registerComponent(NavConstants.SERVICE_IN_PROCESS, ()=> ServiceInProcess, store, Provider)
    // Profile
    Navigation.registerComponent(NavConstants.PROFILE, ()=> Profile, store, Provider)
    Navigation.registerComponent(NavConstants.EDIT_PROFILE, ()=> EditProfile, store, Provider)
    Navigation.registerComponent(NavConstants.EDIT_PASSWORD, ()=> EditPassword, store, Provider)
    Navigation.registerComponent(NavConstants.ADM_PAYMENT, ()=> PaymentMethods, store, Provider)
    Navigation.registerComponent(NavConstants.HISTORY, ()=> History, store, Provider)
    Navigation.registerComponent(NavConstants.SUPPORT, ()=> Support, store, Provider)
    Navigation.registerComponent(NavConstants.SEND_COMMENTS, ()=> SendComments, store, Provider)
    Navigation.registerComponent(NavConstants.REPORT_PROBLEM, ()=> ReportProblem, store, Provider)
    // Settings
    Navigation.registerComponent(NavConstants.SETTINGS, ()=> Settings, store, Provider)

};

/*export const registerScreenVisibilityListener = () => {
 new ScreenVisibilityListener({
 willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
 didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
 willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
 didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
 }).register();
 }*/