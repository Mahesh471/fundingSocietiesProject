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
import EmailInputField from './EmailInputField';

interface PropsType {
  handleCancel: (event: GestureResponderEvent) => void | undefined;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setOpenEmailInputModal: Dispatch<SetStateAction<boolean>>;
  setIsEmailFieldCorrect: Dispatch<SetStateAction<boolean>>;
}

const EmailInputModal = (props: PropsType) => {
  const [email, setEmail] = useState('');
  const [onceEmailFocused, setOnceEmailFocused] = useState(false);
  const refModalEmail = useRef<TextInput>(null);
  const [isEmailFieldCorrect, setIsEmailFieldCorrect] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      refModalEmail.current?.focus();
    }, 100);
    setEmail(props.email);
  }, []);
  const handleSave = () => {
    if (isEmailFieldCorrect) {
      props.setEmail(email);
      props.setIsEmailFieldCorrect(isEmailFieldCorrect);
      props.setOpenEmailInputModal(false);
    }
  };
  return (
    <Modal transparent={true}>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Enter your email</Text>
          <EmailInputField
            setIsEmailFieldCorrect={setIsEmailFieldCorrect}
            email={email}
            setEmail={setEmail}
            onceEmailFocused={onceEmailFocused}
            setOnceEmailFocused={setOnceEmailFocused}
            refModalEmail={refModalEmail}
          />
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={props.handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSave}
              activeOpacity={isEmailFieldCorrect ? 0.5 : 1}>
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

export default EmailInputModal;
