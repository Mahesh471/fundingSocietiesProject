import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import EmailInputField from '../components/EmailInputField';
import {RootStackParamList} from '../navigation/StackNavigator';

import {styles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

const ForgotPasswordScreen = ({navigation, route}: PropsType) => {
  const [email, setEmail] = useState('');
  const [onceEmailFocused, setOnceEmailFocused] = useState(false);
  const [isEmailFieldCorrect, setIsEmailFieldCorrect] = useState(false);

  const handleNextButtonPress = () => {
    if (isEmailFieldCorrect) {
      setEmail('');
      setOnceEmailFocused(false);
      navigation.navigate('ResetPasswordScreen');
    }
  };

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
      style={styles.ForgotPasswordScreen.lgContainer}>
      <ScrollView>
        <View style={styles.ForgotPasswordScreen.container}>
          <View style={styles.ForgotPasswordScreen.upperContainer}>
            <View style={styles.ForgotPasswordScreen.promptTextView}>
              <Text style={styles.ForgotPasswordScreen.promptText}>
                Enter your registered email address to reset password
              </Text>
            </View>
            <EmailInputField
              setIsEmailFieldCorrect={setIsEmailFieldCorrect}
              email={email}
              setEmail={setEmail}
              onceEmailFocused={onceEmailFocused}
              setOnceEmailFocused={setOnceEmailFocused}
            />
          </View>
          <View style={styles.ForgotPasswordScreen.bottomContainer}>
            <View style={styles.ForgotPasswordScreen.bottomContentsView}>
              <Text style={styles.ForgotPasswordScreen.continueText}>
                Continue
              </Text>
              <TouchableOpacity
                style={styles.ForgotPasswordScreen.nextButtonImgView}
                activeOpacity={isEmailFieldCorrect ? 0.5 : 1}
                onPress={handleNextButtonPress}>
                <Image
                  source={require('../assets/images/nextButton.png')}
                  style={styles.ForgotPasswordScreen.nextButtonImg}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ForgotPasswordScreen;
