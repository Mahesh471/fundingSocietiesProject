import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../navigation/StackNavigator';
import SvgLogoImg from '../assets/images/logo.svg';
import CountryCard from '../components/CountryCard';
import BlueButton from '../components/BlueButton';

import {styles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<
  RootStackParamList,
  'SelectCountryScreen'
>;

const SelectCountryScreen = ({navigation, route}: PropsType) => {
  const [selectCountry, setSelectCountry] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleSignInPress = () => {
    if (
      selectCountry[0] ||
      selectCountry[1] ||
      selectCountry[2] ||
      selectCountry[3]
    )
      if (route.params.isRegister) navigation.navigate('RegisterScreen');
      else navigation.navigate('LoginScreen');
  };

  return (
    <LinearGradient
      style={styles.SelectCountryScreen.lgcontainer}
      colors={[
        '#000B18',
        '#00172D',
        '#00264D',
        '#02386E',
        '#00498D',
        '#0052A2',
      ]}>
      <View style={styles.SelectCountryScreen.titleView}>
        <SvgLogoImg height={50} width={100} />
        <Text style={styles.SelectCountryScreen.fundingText}>funding</Text>
        <Text style={styles.SelectCountryScreen.societiesText}>societies</Text>
      </View>
      <Text style={styles.SelectCountryScreen.fundingText}>
        Select your Country
      </Text>
      <Text style={styles.SelectCountryScreen.randomText}>
        Please select the country you'd like to access our platfrom for
      </Text>
      <View style={styles.SelectCountryScreen.countryView}>
        <CountryCard
          text={'Thailand'}
          img={require('../assets/images/thailand.png')}
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
        />
        <CountryCard
          text={'Singapore'}
          img={require('../assets/images/singapore.png')}
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
        />
        <CountryCard
          text={'Malaysia'}
          img={require('../assets/images/malaysia.png')}
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
        />
        <CountryCard
          text={'Indonesia'}
          img={require('../assets/images/indonesia.png')}
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
        />
      </View>
      <BlueButton
        onPress={handleSignInPress}
        isCountryScreen={
          selectCountry[0] ||
          selectCountry[1] ||
          selectCountry[2] ||
          selectCountry[3]
        }>
        Continue
      </BlueButton>
    </LinearGradient>
  );
};

export default SelectCountryScreen;
