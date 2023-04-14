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
import PasswordInputField from './PasswordInputField';

interface PropsType {
  handleCancel: (event: GestureResponderEvent) => void | undefined;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setOpenPasswordInputModal: Dispatch<SetStateAction<boolean>>;
  setIsPasswordFieldCorrect: Dispatch<SetStateAction<boolean>>;
}

const PasswordInputModal = (props: PropsType) => {
  const [password, setPassword] = useState('');
  const [oncePasswordFocused, setOncePasswordFocused] = useState(false);
  const refModalPassword = useRef<TextInput>(null);
  const [isPasswordFieldCorrect, setIsPasswordFieldCorrect] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      refModalPassword.current?.focus();
    }, 100);
    setPassword(props.password);
  }, []);
  const handleSave = () => {
    if (isPasswordFieldCorrect) {
      props.setPassword(password);
      props.setIsPasswordFieldCorrect(isPasswordFieldCorrect);
      props.setOpenPasswordInputModal(false);
    }
  };
  return (
    <Modal transparent={true}>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Enter your password</Text>
          <PasswordInputField
            setIsPasswordFieldCorrect={setIsPasswordFieldCorrect}
            password={password}
            setPassword={setPassword}
            oncePasswordFocused={oncePasswordFocused}
            setOncePasswordFocused={setOncePasswordFocused}
            refPassword={refModalPassword}
          />
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={props.handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSave}
              activeOpacity={isPasswordFieldCorrect ? 0.5 : 1}>
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

export default PasswordInputModal;
