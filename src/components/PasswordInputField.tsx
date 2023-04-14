import React, {RefObject, SetStateAction, useEffect, useState} from 'react';
import {Dispatch} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import InvalidText from './InvalidText';

import {styles} from '../styles/ComponentStyle';

interface PropsType {
  setIsPasswordFieldCorrect: Dispatch<SetStateAction<boolean>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  oncePasswordFocused: boolean;
  setOncePasswordFocused: Dispatch<SetStateAction<boolean>>;
  isLoginScreen?: boolean;
  refPassword?: RefObject<TextInput>;
  refConfirmPassword?: RefObject<TextInput>;
  needPencil?: boolean;
  handleEdit?: ((event: GestureResponderEvent) => void) | undefined;
}

const PasswordInputField = (props: PropsType) => {
  const {password, setPassword} = props;
  const [isEyeButtonOn, setIsEyeButtonOn] = useState(true);
  const [isSecuredEntry, setIsSecuredEntry] = useState(true);
  const {
    oncePasswordFocused: onceFocused,
    setOncePasswordFocused: setOnceFocused,
  } = props;
  const [validationPassword, setValidationPassword] = useState('');
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const handleEyeButtonPress = () => {
    setIsEyeButtonOn(prevEyeButton => !prevEyeButton);
  };

  const handlePasswordChange = (txt: string) => {
    setPassword(txt);
  };

  useEffect(() => {
    setIsSecuredEntry(isEyeButtonOn);
  }, [isEyeButtonOn]);

  useEffect(() => {
    props.setIsPasswordFieldCorrect(false);
    if (onceFocused) {
      if (password.length === 0) {
        setValidationPassword('Password should not be empty');
      } else if (password.length < 6 && !props.isLoginScreen) {
        setValidationPassword('Minimum 6 characters');
      } else if (password.length > 16 && !props.isLoginScreen) {
        setValidationPassword('Maximum 16 characters');
      } else if (!passwordRegex.test(password) && !props.isLoginScreen) {
        setValidationPassword(
          'Password should atleast contain a digit and a special character',
        );
      } else {
        setValidationPassword('');
        props.setIsPasswordFieldCorrect(true);
      }
    } else {
      setValidationPassword('');
    }
  }, [onceFocused]);

  return (
    <>
      {password.length > 0 && (
        <Text style={styles.PasswordInputField.passLabel}>Password</Text>
      )}
      <View style={styles.PasswordInputField.passInputView}>
        <TextInput
          placeholder={
            props.needPencil != undefined ? 'New Password' : 'Password'
          }
          editable={props.needPencil != undefined ? false : true}
          style={[
            styles.PasswordInputField.inputField,
            props.needPencil
              ? {width: '80%'}
              : password.length > 0
              ? {width: '85%'}
              : {width: '90%'},
            {
              borderBottomColor: validationPassword ? '#ff9933' : 'white',
              borderBottomWidth: props.needPencil != undefined ? 0 : 1,
            },
          ]}
          placeholderTextColor="white"
          keyboardType="ascii-capable"
          secureTextEntry={isSecuredEntry}
          textContentType="password"
          value={password}
          onChangeText={handlePasswordChange}
          ref={props.refPassword}
          onSubmitEditing={() => {
            props.refConfirmPassword?.current?.focus();
          }}
          onBlur={() => {
            setOnceFocused(true);
          }}
          onFocus={() => {
            setOnceFocused(false);
          }}
        />
        {props.needPencil && (
          <View
            style={{
              width: '10%',
              borderBottomColor: validationPassword ? '#ff9933' : 'white',
              borderBottomWidth: props.needPencil != undefined ? 0 : 1,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={props.handleEdit}>
              <FontAwesome name="pencil" size={14} color="white" />
            </TouchableOpacity>
          </View>
        )}
        {!props.needPencil && password.length > 0 && isEyeButtonOn && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.PasswordInputField.eyeIconView,
              {borderBottomColor: validationPassword ? '#ff9933' : 'white'},
            ]}
            onPress={handleEyeButtonPress}>
            <Icon
              name="eye"
              size={15}
              color="white"
              style={styles.PasswordInputField.eyeIcon}
            />
          </TouchableOpacity>
        )}
        {!props.needPencil && password.length > 0 && !isEyeButtonOn && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.PasswordInputField.eyeIconView,
              {borderBottomColor: validationPassword ? '#ff9933' : 'white'},
            ]}
            onPress={handleEyeButtonPress}>
            <Icon
              name="eye-off"
              size={15}
              color="white"
              style={styles.PasswordInputField.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <InvalidText>{validationPassword}</InvalidText>
    </>
  );
};

export default PasswordInputField;
