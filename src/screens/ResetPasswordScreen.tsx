import React, {useEffect, useRef, useState} from 'react';
import {View, Text, ScrollView, TextInput, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import BlueButton from '../components/BlueButton';
import ConfirmPasswordInputField from '../components/ConfirmPasswordInputField';
import PasswordInputField from '../components/PasswordInputField';
import {RootStackParamList} from '../navigation/StackNavigator';

import {styles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<
  RootStackParamList,
  'ResetPasswordScreen'
>;

const ResetPasswordScreen = ({navigation, route}: PropsType) => {
  const [password, setPassword] = useState('');
  const [isPasswordFieldCorrect, setIsPasswordFieldCorrect] = useState(false);
  const [oncePasswordFocused, setOncePasswordFocused] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordFieldCorrect, setIsConfirmPasswordFieldCorrect] =
    useState(false);
  const [onceConfirmPasswordFocused, setOnceConfirmPasswordFocused] =
    useState(false);
  const refConfirmPassword = useRef<TextInput>(null);

  const handleResetButtonPress = () => {
    if (isPasswordFieldCorrect && isConfirmPasswordFieldCorrect) {
      navigation.navigate('LoginScreen');
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
      style={styles.ResetPasswordScreen.lgContainer}>
      <ScrollView>
        <View style={styles.ResetPasswordScreen.container}>
          <View style={styles.ResetPasswordScreen.promptTextView}>
            <Text style={styles.ResetPasswordScreen.promptText}>
              Create new password
            </Text>
          </View>
          <PasswordInputField
            password={password}
            setPassword={setPassword}
            setIsPasswordFieldCorrect={setIsPasswordFieldCorrect}
            oncePasswordFocused={oncePasswordFocused}
            setOncePasswordFocused={setOncePasswordFocused}
            refConfirmPassword={refConfirmPassword}
          />
          <ConfirmPasswordInputField
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            setIsConfirmPasswordFieldCorrect={setIsConfirmPasswordFieldCorrect}
            onceConfirmPasswordFocused={onceConfirmPasswordFocused}
            setOnceConfirmPasswordFocused={setOnceConfirmPasswordFocused}
            password={password}
            refConfirmPassword={refConfirmPassword}
          />
          <BlueButton
            isPasswordFieldCorrect={isPasswordFieldCorrect}
            isConfirmPasswordFieldCorrect={isConfirmPasswordFieldCorrect}
            onPress={handleResetButtonPress}>
            Reset
          </BlueButton>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ResetPasswordScreen;
