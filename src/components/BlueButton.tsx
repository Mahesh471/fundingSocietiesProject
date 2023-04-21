import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';

import {styles} from '../styles/ComponentStyle';
import {getButtonColor, getTextColor} from '../assets/utilities/utility';

interface PropsType {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isEmailFieldCorrect?: boolean;
  isPasswordFieldCorrect?: boolean;
  isConfirmPasswordFieldCorrect?: boolean;
  isCountryScreen?: boolean;
  isRegister?: boolean;
  fullWidth?: boolean;
  isDisabled?: boolean;
}
const BlueButton = (props: PropsType) => {
  let emailFieldNotProvided = true;
  let passwordFieldNotProvided = true;
  let confirmPasswordFieldNotProvided = true;
  let countryNotProvided = true;
  if (props.isEmailFieldCorrect != undefined) {
    emailFieldNotProvided = props.isEmailFieldCorrect;
  }
  if (props.isConfirmPasswordFieldCorrect != undefined) {
    confirmPasswordFieldNotProvided = props.isConfirmPasswordFieldCorrect;
  }
  if (props.isPasswordFieldCorrect != undefined) {
    passwordFieldNotProvided = props.isPasswordFieldCorrect;
  }
  if (props.isCountryScreen != undefined) {
    countryNotProvided = props.isCountryScreen;
  }

  return (
    <>
      <TouchableOpacity
        disabled={props.isDisabled}
        activeOpacity={
          emailFieldNotProvided &&
          passwordFieldNotProvided &&
          confirmPasswordFieldNotProvided &&
          countryNotProvided
            ? 0.5
            : 1
        }
        style={[
          styles.BlueButton.buttonView,
          emailFieldNotProvided &&
          passwordFieldNotProvided &&
          confirmPasswordFieldNotProvided &&
          countryNotProvided
            ? {backgroundColor: getButtonColor(true)}
            : {backgroundColor: getButtonColor(false)},
          props.isDisabled
            ? {
                backgroundColor: getButtonColor(false),
              }
            : {backgroundColor: getButtonColor(true)},
          props.fullWidth && {
            width: '100%',
            borderRadius: 0,
            marginTop: 0,
            marginBottom: 0,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          },
        ]}
        onPress={props.onPress}>
        <Text
          style={[
            styles.BlueButton.buttonText,
            emailFieldNotProvided &&
            passwordFieldNotProvided &&
            confirmPasswordFieldNotProvided &&
            countryNotProvided
              ? {color: getTextColor(true)}
              : {color: getTextColor(false)},
            props.isDisabled
              ? {
                  color: getTextColor(false),
                }
              : {color: getTextColor(true)},
          ]}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default BlueButton;
