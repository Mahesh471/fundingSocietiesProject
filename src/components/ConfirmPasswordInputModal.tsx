import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ConfirmPasswordInputField from './ConfirmPasswordInputField';

interface PropsType {
  handleCancel: (event: GestureResponderEvent) => void | undefined;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  setOpenConfirmPasswordInputModal: Dispatch<SetStateAction<boolean>>;
  password: string;
  setIsConfirmPasswordFieldCorrect: Dispatch<SetStateAction<boolean>>;
}

const ConfirmPasswordInputModal = (props: PropsType) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [onceConfirmPasswordFocused, setOnceConfirmPasswordFocused] =
    useState(false);
  const refModalConfirmPassword = useRef<TextInput>(null);
  const [isConfirmPasswordFieldCorrect, setIsConfirmPasswordFieldCorrect] =
    useState(false);
  useEffect(() => {
    setTimeout(() => {
      refModalConfirmPassword.current?.focus();
    }, 100);
    setConfirmPassword(props.confirmPassword);
  }, []);
  const handleSave = () => {
    console.log('Confirm Password Modal Closed');
    console.log(isConfirmPasswordFieldCorrect);
    if (isConfirmPasswordFieldCorrect) {
      console.log('Entered inside');
      props.setConfirmPassword(confirmPassword);
      props.setIsConfirmPasswordFieldCorrect(isConfirmPasswordFieldCorrect);
      props.setOpenConfirmPasswordInputModal(false);
    }
  };
  return (
    <Modal transparent={true}>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Enter your confirm password</Text>
          <ConfirmPasswordInputField
            setIsConfirmPasswordFieldCorrect={setIsConfirmPasswordFieldCorrect}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            onceConfirmPasswordFocused={onceConfirmPasswordFocused}
            setOnceConfirmPasswordFocused={setOnceConfirmPasswordFocused}
            refConfirmPassword={refModalConfirmPassword}
            password={props.password}
          />
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={props.handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSave}
              activeOpacity={isConfirmPasswordFieldCorrect ? 0.5 : 1}>
              <Text style={[styles.buttonText, {marginRight: 0}]}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#424242',
    height: Dimensions.get('window').height / 3.5,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    borderTopLeftRadius: 5,
    borderBottomEndRadius: 5,
    padding: 7,
    paddingVertical: 15,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 15,
    marginBottom: '3%',
    marginLeft: '5%',
    alignSelf: 'flex-start',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#25D366',
    fontSize: 13,
    marginHorizontal: '7%',
  },
});

export default ConfirmPasswordInputModal;
