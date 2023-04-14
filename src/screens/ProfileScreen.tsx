import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {pickSingle, types} from 'react-native-document-picker';
import {RootStackParamList} from '../navigation/StackNavigator';
import EmailInputField from '../components/EmailInputField';
import PasswordInputField from '../components/PasswordInputField';
import ConfirmPasswordInputField from '../components/ConfirmPasswordInputField';
import BlueButton from '../components/BlueButton';
import DobInputField from '../components/DobInputField';
import EmailInputModal from '../components/EmailInputModal';
import PasswordInputModal from '../components/PasswordInputModal';
import ConfirmPasswordInputModal from '../components/ConfirmPasswordInputModal';

type PropsType = NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>;

const ProfileScreen = ({navigation, route}: PropsType) => {
  const [fileResponse, setFileResponse] = useState<string>();
  const {
    userImage,
    setUserImage,
    userEmail,
    setUserEmail,
    userDob,
    setUserDob,
  } = route.params;
  const [dob, setDob] = useState<string>();
  const [email, setEmail] = useState('');
  const [onceEmailFocused, setOnceEmailFocused] = useState(false);
  const [isEmailFieldCorrect, setIsEmailFieldCorrect] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordFieldCorrect, setIsPasswordFieldCorrect] = useState(false);
  const [oncePasswordFocused, setOncePasswordFocused] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordFieldCorrect, setIsConfirmPasswordFieldCorrect] =
    useState(false);
  const [onceConfirmPasswordFocused, setOnceConfirmPasswordFocused] =
    useState(false);
  const [openEmailInputModal, setOpenEmailInputModal] =
    useState<boolean>(false);
  const [openPasswordInputModal, setOpenPasswordInputModal] =
    useState<boolean>(false);
  const [openConfirmPasswordInputModal, setOpenConfirmPasswordInputModal] =
    useState<boolean>(false);

  const refPassword = useRef<TextInput>(null);
  const refConfirmPassword = useRef<TextInput>(null);

  useEffect(() => {
    if (userImage) {
      setFileResponse(userImage);
    }
    setEmail(userEmail);
    setIsEmailFieldCorrect(true);
    setDob(userDob);
  }, []);

  const handleUploadImage = async () => {
    try {
      const response = await pickSingle({
        presentationStyle: 'fullScreen',
        type: [types.images],
      });
      setFileResponse(response.uri);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdateButtonPress = () => {
    console.log(
      isEmailFieldCorrect,
      isPasswordFieldCorrect,
      isConfirmPasswordFieldCorrect,
    );
    if (
      isEmailFieldCorrect &&
      isPasswordFieldCorrect &&
      isConfirmPasswordFieldCorrect
    ) {
      console.log(
        isEmailFieldCorrect,
        isPasswordFieldCorrect,
        isConfirmPasswordFieldCorrect,
      );
      setUserEmail(email);
      setUserDob(dob);
      fileResponse && setUserImage(fileResponse);
      console.log('update finished');
      navigation.navigate('MyTab');
    }
    setEmail('');
    setPassword('');
    setOnceEmailFocused(false);
    setOncePasswordFocused(false);
    setConfirmPassword('');
    setOnceConfirmPasswordFocused(false);
  };
  const handleEmailEdit = () => {
    setOpenEmailInputModal(true);
  };
  const handleEmailCancel = () => {
    setOpenEmailInputModal(false);
  };
  const handlePasswordEdit = () => {
    setOpenPasswordInputModal(true);
  };
  const handlePasswordCancel = () => {
    setOpenPasswordInputModal(false);
  };
  const handleConfirmPasswordEdit = () => {
    setOpenConfirmPasswordInputModal(true);
  };
  const handleConfirmPasswordCancel = () => {
    setOpenConfirmPasswordInputModal(false);
  };
  return (
    <View style={styles.lgContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              margin: '5%',
            }}>
            <Image
              source={
                fileResponse
                  ? {uri: fileResponse}
                  : require('../assets/images/emptyProfile.jpg')
              }
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={handleUploadImage}
              style={{position: 'absolute', top: 70, left: 60}}>
              <Image
                source={require('../assets/images/camera.jpg')}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputFieldsView}>
            <EmailInputField
              setIsEmailFieldCorrect={setIsEmailFieldCorrect}
              email={email}
              setEmail={setEmail}
              onceEmailFocused={onceEmailFocused}
              setOnceEmailFocused={setOnceEmailFocused}
              refPassword={refPassword}
              needPencil={true}
              handleEmailEdit={handleEmailEdit}
            />
            <PasswordInputField
              password={password}
              setPassword={setPassword}
              setIsPasswordFieldCorrect={setIsPasswordFieldCorrect}
              oncePasswordFocused={oncePasswordFocused}
              setOncePasswordFocused={setOncePasswordFocused}
              refPassword={refPassword}
              refConfirmPassword={refConfirmPassword}
              needPencil={true}
              handleEdit={handlePasswordEdit}
            />
            <ConfirmPasswordInputField
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              setIsConfirmPasswordFieldCorrect={
                setIsConfirmPasswordFieldCorrect
              }
              onceConfirmPasswordFocused={onceConfirmPasswordFocused}
              setOnceConfirmPasswordFocused={setOnceConfirmPasswordFocused}
              password={password}
              refConfirmPassword={refConfirmPassword}
              needPencil={true}
              handleEdit={handleConfirmPasswordEdit}
            />
            <DobInputField dob={dob} setDob={setDob} />
            <BlueButton
              onPress={handleUpdateButtonPress}
              isEmailFieldCorrect={isEmailFieldCorrect}
              isPasswordFieldCorrect={isPasswordFieldCorrect}
              isConfirmPasswordFieldCorrect={isConfirmPasswordFieldCorrect}>
              Update
            </BlueButton>
          </View>
        </View>
      </ScrollView>
      {openEmailInputModal && (
        <EmailInputModal
          handleCancel={handleEmailCancel}
          setOpenEmailInputModal={setOpenEmailInputModal}
          email={email}
          setEmail={setEmail}
          setIsEmailFieldCorrect={setIsEmailFieldCorrect}
        />
      )}
      {openPasswordInputModal && (
        <PasswordInputModal
          handleCancel={handlePasswordCancel}
          setOpenPasswordInputModal={setOpenPasswordInputModal}
          password={password}
          setPassword={setPassword}
          setIsPasswordFieldCorrect={setIsPasswordFieldCorrect}
        />
      )}
      {openConfirmPasswordInputModal && (
        <ConfirmPasswordInputModal
          handleCancel={handleConfirmPasswordCancel}
          setOpenConfirmPasswordInputModal={setOpenConfirmPasswordInputModal}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          password={password}
          setIsConfirmPasswordFieldCorrect={setIsConfirmPasswordFieldCorrect}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  lgContainer: {
    flex: 1,
    backgroundColor: '#00264D',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  inputFieldsView: {width: '100%', alignItems: 'center', marginVertical: '2%'},
});

export default ProfileScreen;
