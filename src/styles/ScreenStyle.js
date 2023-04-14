import {Dimensions, StyleSheet} from 'react-native';

export const styles = {
  ForgotPasswordScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingTop: '2%',
      height: Dimensions.get('window').height,
    },
    upperContainer: {
      flex: 7,
      alignItems: 'center',
      borderBottomColor: 'white',
      borderBottomWidth: 0.4,
    },
    promptTextView: {
      width: '90%',
      marginVertical: '5%',
    },
    promptText: {
      color: 'white',
    },
    bottomContainer: {
      flex: 2,
    },
    bottomContentsView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: '2%',
    },
    continueText: {
      color: 'white',
      fontWeight: 'bold',
      marginTop: '2%',
    },
    nextButtonImgView: {
      marginHorizontal: '5%',
    },
    nextButtonImg: {
      height: 36,
      width: 36,
      borderRadius: 50,
    },
  }),
  HomeScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: '5%',
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '20%',
    },
    fsTitleView: {
      flexDirection: 'row',
      marginLeft: '4%',
    },
    fundingText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 23,
      marginRight: 5,
    },
    societiesText: {
      color: 'white',
      fontSize: 23,
      fontWeight: '300',
    },
    homeText: {
      fontSize: 23,
      color: 'white',
    },
    accountView: {},
    accountText: {
      color: 'white',
      fontSize: 15,
    },
  }),
  LoginScreen: StyleSheet.create({
    lgContainer: {
      flex: 1
    },
    container: {
      flex: 1,
      paddingTop: '20%',
      alignItems: 'center',
      height: Dimensions.get('window').height,
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20%',
    },
    fsTitleView: {
      flexDirection: 'row',
      marginLeft: '4%',
    },
    fundingText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 23,
      marginRight: 5,
    },
    societiesText: {
      color: 'white',
      fontSize: 23,
      fontWeight: '300',
    },
    inputFieldsView: {
      width: '100%',
      alignItems: 'center',
      marginTop: '2%',
    },
    forgotPassTextView: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      paddingRight: '5%',
    },
    forgotPassText: {
      color: 'white',
      fontSize: 12,
    },
    googleSignInButton: {
      height: 43,
      width: '90%',
      borderRadius: 20,
      marginTop: '2%',
      marginBottom: '4%',
    }
  }),
  RegisterScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: '20%',
      height: Dimensions.get('window').height,
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20%',
    },
    fsTitleView: {
      flexDirection: 'row',
      marginLeft: '4%',
    },
    fundingText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 23,
      marginRight: 5,
    },
    societiesText: {
      color: 'white',
      fontSize: 23,
      fontWeight: '300',
    },
    inputFieldsView: {
      width: '100%',
      alignItems: 'center',
      marginVertical: '2%',
    },
  }),
  ResetPasswordScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: '5%',
      height: Dimensions.get('window').height,
    },
    promptTextView: {
      width: '90%',
      marginVertical: '10%',
    },
    promptText: {
      color: 'white',
      fontSize: 23,
    },
  }),
  WelcomeScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    welcomeTextView: {
      marginTop: '5%',
    },
    welcomeText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    welcomeTextDescView: {
      marginTop: 5,
      alignItems: 'center',
      marginBottom: '20%',
    },
    welcomeTextDesc: {
      color: 'white',
      fontSize: 14,
    },
    signInView: {
      marginVertical: '5%',
    },
    signInText: {
      color: 'white',
    },
  }),
  SettingScreen: StyleSheet.create({
    container: {
      backgroundColor: '#00264D',
      flex: 1,
      paddingHorizontal: '5%',
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      fontWeight: '400',
      marginBottom: '0.5%',
      padding: '2%',
    },
    tileView: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
  
    buttonView: {
      flex: 1,
      borderColor: 'rgba(255,255,255,0.3)',
      flexDirection: 'row',
      padding: '3%',
    },
    titleView: {
      marginHorizontal: '5%',
      paddingRight: '10%',
    },
    titleText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '700',
      margin: '1%',
    },
    descriptionText: {
      color: 'white',
      fontSize: 13,
      fontWeight: '200',
      margin: '1%',
    },
    img: {
      height: 20,
      width: 20,
      alignSelf: 'flex-start',
      marginLeft: '3%',
      marginTop: '1%',
    },
  }),
  SelectCountryScreen : StyleSheet.create({
    lgcontainer: {
      flex: 1,
      height: Dimensions.get('window').height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '7%',
      justifyContent: 'center',
    },
    fundingText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 23,
      marginRight: 5,
    },
    societiesText: {
      color: 'white',
      fontSize: 23,
      fontWeight: '300',
    },
    randomText: {
      color: '#f1f1f1',
      fontSize: 15,
      fontWeight: '200',
      marginTop: '5%',
      textAlign: 'center',
    },
    countryView: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'center',
    },
  }),
  PortfolioScreen: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00264D',
      justifyContent: 'flex-start',
      paddingHorizontal: '3%',
    },
    sectionTitle: {
      backgroundColor: '#00264D',
      paddingVertical: 2,
    },
    lottieView: {flex: 6, justifyContent: 'center', alignItems: 'center'},
    lottieStyle: {
      height: 130,
      width: 130,
      marginBottom: '5%',
    },
    currText: {fontSize: 18, color: 'white', fontWeight: 'bold'},
  }),
  ReferScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
      backgroundColor: '#00264D',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      height: Dimensions.get('window').height,
    },
    handshakeImgView: {
      borderWidth: 20,
      borderColor: 'rgba(255,255,255,0.2)',
      borderRadius: 70,
      marginBottom: '5%',
    },
    handshakeImg: {
      height: 70,
      width: 70,
      borderRadius: 35,
      resizeMode: 'contain',
    },
    descText: {
      fontSize: 17,
      color: 'white',
      width: '80%',
      marginBottom: '5%',
      textAlign: 'center',
    },
    scanInfo: {
      fontSize: 13,
      width: '90%',
      textAlign: 'center',
      color: 'white',
      marginBottom: '5%',
    },
    orText: {
      fontSize: 17,
      width: '90%',
      textAlign: 'center',
      color: 'white',
      marginVertical: '2.5%',
    },
    qrCodeView: {
      borderWidth: 2,
      borderColor: 'white',
    }
  }),
};
