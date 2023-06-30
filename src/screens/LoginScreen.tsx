import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SvgLogoImg from '../assets/images/logo.svg';
import BlueButton from '../components/BlueButton';
import EmailInputField from '../components/EmailInputField';
import PasswordInputField from '../components/PasswordInputField';
import {RootStackParamList} from '../navigation/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {fetchToken} from '../apiCalls/apiCalls';
import {styles} from '../styles/ScreenStyle';
import ActivityLoader from '../components/ActivityLoader';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginContext} from '../components/Main';
import {getLoanData, setUser} from '../services/database';
import {UserData} from '../assets/constants/interface';

GoogleSignin.configure({
  webClientId:
    '515657898760-sc6eb7ajrs1hsouikmbt1n0v1mfelm4p.apps.googleusercontent.com',
});

type PropsType = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation, route}: PropsType) => {
  const [email, setEmail] = useState('');
  const [onceEmailFocused, setOnceEmailFocused] = useState(false);
  const [oncePasswordFocused, setOncePasswordFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [isEmailFieldCorrect, setIsEmailFieldCorrect] = useState(false);
  const [isPasswordFieldCorrect, setIsPasswordFieldCorrect] = useState(false);
  const refPassword = useRef<TextInput>(null);
  const [loading, setLoading] = useState<React.ReactNode>(null);
  const [loader, setLoader] = useState<boolean>(false);

  const handleTokenReceived = async () => {
    const resData = await fetchToken(email, password);
    if (!resData.error) {
      navigation.navigate('MyTab');
    } else {
      setLoading(null);
    }
    setEmail('');
    setPassword('');
  };

  const handleSignInPress = () => {
    if (isEmailFieldCorrect && isPasswordFieldCorrect) {
      setLoading(<ActivityLoader />);
      const key = '3794593294324';
      const userData: UserData = {
        email: email,
        investorType: 'Retail',
        name: '',
        photo: '',
        countryCode: 'MY',
        password: password,
        loginType: 'email',
      };
      signIn(key, userData);
    }
  };
  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPasswordScreen');
  };
  useEffect(() => {
    setEmail('');
    setPassword('');
    setLoading(null);
  }, []);

  const {userInfo, setUserInfo, loggedIn, setLoggedIn} =
    useContext(LoginContext);

  const googleSignIn = async () => {
    setLoader(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const key = userInfo.user.id;
      const userData: UserData = {
        email: userInfo.user.email,
        investorType: 'Retail',
        name: userInfo.user.name || '',
        photo: userInfo.user.photo || '',
        countryCode: 'MY',
        password: '',
        loginType: 'SSO',
      };
      signIn(key, userData);
      // setUserInfo(userInfo);
      // setLoggedIn(true);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
        console.log(error);
      }
    }
    setLoader(false);
  };

  const signIn = (key: string, userData: UserData) => {
    setUser(key, userData);
    getLoanData();
    navigation.navigate('MyTab');
    console.log(JSON.stringify(userInfo));
  };

  useEffect(() => {
    if (loggedIn) {
    }
  }, [userInfo, loggedIn]);

  return (
    <LinearGradient
      colors={[
        '#000B18',
        '#00172D',
        '#00264D',
        '#02386E',
        '#00498D',
        '#0052A2',
      ]}
      style={styles.LoginScreen.lgContainer}>
      {loader && <ActivityLoader />}
      {loading}
      <ScrollView>
        <View style={styles.LoginScreen.container}>
          <View style={styles.LoginScreen.titleView}>
            <SvgLogoImg height={40} width={40} />
            <View style={styles.LoginScreen.fsTitleView}>
              <Text style={styles.LoginScreen.fundingText}>funding</Text>
              <Text style={styles.LoginScreen.societiesText}>societies</Text>
            </View>
          </View>
          <View style={styles.LoginScreen.inputFieldsView}>
            <EmailInputField
              setIsEmailFieldCorrect={setIsEmailFieldCorrect}
              email={email}
              setEmail={setEmail}
              onceEmailFocused={onceEmailFocused}
              setOnceEmailFocused={setOnceEmailFocused}
              refPassword={refPassword}
            />
            <PasswordInputField
              setIsPasswordFieldCorrect={setIsPasswordFieldCorrect}
              password={password}
              setPassword={setPassword}
              oncePasswordFocused={oncePasswordFocused}
              setOncePasswordFocused={setOncePasswordFocused}
              isLoginScreen={true}
              refPassword={refPassword}
            />
          </View>
          <BlueButton
            onPress={handleSignInPress}
            isEmailFieldCorrect={isEmailFieldCorrect}
            isPasswordFieldCorrect={isPasswordFieldCorrect}>
            Sign In
          </BlueButton>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.LoginScreen.forgotPassTextView}>
            <Text
              style={styles.LoginScreen.forgotPassText}
              onPress={handleForgotPasswordPress}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <GoogleSigninButton
            style={styles.LoginScreen.googleSignInButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={googleSignIn}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default LoginScreen;
