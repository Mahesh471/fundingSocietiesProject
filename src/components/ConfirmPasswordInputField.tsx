import React, {RefObject, useEffect, useState} from 'react';
import {SetStateAction} from 'react';
import {Dispatch} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import InvalidText from './InvalidText';

import {styles} from '../styles/ComponentStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface PropsType {
  setIsConfirmPasswordFieldCorrect: Dispatch<SetStateAction<boolean>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  onceConfirmPasswordFocused: boolean;
  setOnceConfirmPasswordFocused: Dispatch<SetStateAction<boolean>>;
  password: string;
  refConfirmPassword: RefObject<TextInput>;
  needPencil?: boolean;
  handleEdit?: ((event: GestureResponderEvent) => void) | undefined;
}

const ConfirmPasswordInputField = (props: PropsType) => {
  const {confirmPassword, setConfirmPassword} = props;
  const [isConfirmEyeButtonOn, setIsConfirmEyeButtonOn] = useState(true);
  const [isConfirmSecuredEntry, setIsConfirmSecuredEntry] = useState(true);
  const {
    onceConfirmPasswordFocused: onceFocused,
    setOnceConfirmPasswordFocused: setOnceFocused,
  } = props;
  const [validationConfirmPassword, setValidationConfirmPassword] =
    useState('');

  const handleConfirmEyeButtonPress = () => {
    setIsConfirmEyeButtonOn(prevEyeButton => !prevEyeButton);
  };

  const handleConfirmPasswordChange = (txt: string) => {
    setConfirmPassword(txt);
  };

  useEffect(() => {
    setIsConfirmSecuredEntry(isConfirmEyeButtonOn);
  }, [isConfirmEyeButtonOn]);
  useEffect(() => {
    props.setIsConfirmPasswordFieldCorrect(false);
    if (onceFocused) {
      if (confirmPassword.length === 0) {
        setValidationConfirmPassword('Confirm Password should not be empty');
      } else if (props.password !== confirmPassword) {
        setValidationConfirmPassword(
          "Password and Confirm Password doesn't match",
        );
      } else {
        setValidationConfirmPassword('');
        props.setIsConfirmPasswordFieldCorrect(true);
      }
    } else {
      setValidationConfirmPassword('');
    }
  }, [onceFocused]);

  return (
    <>
      {confirmPassword.length > 0 && (
        <Text style={styles.ConfirmPasswordInputField.passLabel}>
          Confirm Password
        </Text>
      )}
      <View style={styles.ConfirmPasswordInputField.passInputView}>
        <TextInput
          placeholder="Confirm Password"
          editable={props.needPencil != undefined ? false : true}
          style={[
            styles.ConfirmPasswordInputField.inputField,
            props.needPencil
              ? {width: '80%'}
              : confirmPassword.length > 0
              ? {width: '85%'}
              : {width: '90%'},
            {
              borderBottomColor: validationConfirmPassword
                ? '#ff9933'
                : 'white',
              borderBottomWidth: props.needPencil != undefined ? 0 : 1,
            },
          ]}
          placeholderTextColor="white"
          keyboardType="ascii-capable"
          secureTextEntry={isConfirmSecuredEntry}
          textContentType="password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          ref={props.refConfirmPassword}
          onBlur={() => {
            setOnceFocused(true);
          }}
          onFocus={() => setOnceFocused(false)}
        />
        {props.needPencil && (
          <View
            style={{
              width: '10%',
              borderBottomColor: validationConfirmPassword
                ? '#ff9933'
                : 'white',
              borderBottomWidth: props.needPencil != undefined ? 0 : 1,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={props.handleEdit}>
              <FontAwesome name="pencil" size={14} color="white" />
            </TouchableOpacity>
          </View>
        )}
        {confirmPassword.length > 0 &&
          !props.needPencil &&
          isConfirmEyeButtonOn && (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.ConfirmPasswordInputField.eyeIconView,
                {
                  borderBottomColor: validationConfirmPassword
                    ? '#ff9933'
                    : 'white',
                },
              ]}
              onPress={handleConfirmEyeButtonPress}>
              <Icon
                name="eye"
                size={15}
                color="white"
                style={styles.ConfirmPasswordInputField.eyeIcon}
              />
            </TouchableOpacity>
          )}
        {confirmPassword.length > 0 &&
          !props.needPencil &&
          !isConfirmEyeButtonOn && (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.ConfirmPasswordInputField.eyeIconView,
                {
                  borderBottomColor: validationConfirmPassword
                    ? '#ff9933'
                    : 'white',
                },
              ]}
              onPress={handleConfirmEyeButtonPress}>
              <Icon
                name="eye-off"
                size={15}
                color="white"
                style={styles.ConfirmPasswordInputField.eyeIcon}
              />
            </TouchableOpacity>
          )}
      </View>
      <InvalidText>{validationConfirmPassword}</InvalidText>
    </>
  );
};

export default ConfirmPasswordInputField;
