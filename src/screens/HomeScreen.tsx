import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert, BackHandler} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SvgLogoImg from '../assets/images/logo.svg';
import {RootStackParamList} from '../navigation/StackNavigator';

import {styles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({navigation, route}: PropsType) => {
  const handleLogoutPress = () => {
    navigation.navigate('WelcomeScreen');
  };
  const backAction = () => {
    Alert.alert('Exit App', 'Exiting the application?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => {
          BackHandler.exitApp();
        },
      },
    ]);
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
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
      style={styles.HomeScreen.lgContainer}>
      <View style={styles.HomeScreen.container}>
        <View style={styles.HomeScreen.titleView}>
          <SvgLogoImg height={40} width={40} />
          <View style={styles.HomeScreen.fsTitleView}>
            <Text style={styles.HomeScreen.fundingText}>funding</Text>
            <Text style={styles.HomeScreen.societiesText}>societies</Text>
          </View>
        </View>
        <Text style={styles.HomeScreen.homeText}>Home Page</Text>
        <TouchableOpacity
          style={styles.HomeScreen.accountView}
          onPress={handleLogoutPress}>
          <Text style={styles.HomeScreen.accountText}>logout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
