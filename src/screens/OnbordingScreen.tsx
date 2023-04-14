import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BlueButton from '../components/BlueButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigator';
import {onboardingData} from '../assets/data/onboardingData';

type PropsType = NativeStackScreenProps<RootStackParamList, 'OnboardingScreen'>;

const OnboardingScreen = ({navigation, route}: PropsType) => {
  const [DATA, setDATA] = useState(onboardingData);
  const handleSignUpPress = () => {
    navigation.navigate('SelectCountryScreen', {isRegister: true});
  };
  const handleClosePress = () => {
    navigation.navigate('WelcomeScreen');
  };
  const [screen, setScreen] = useState(0);
  const width = Dimensions.get('window').width;
  const currentScreen = (e: any) => {
    setScreen(e.nativeEvent.contentOffset.x / width);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClosePress} style={styles.closeView}>
        <Image
          style={styles.close}
          source={require('../assets/images/close.png')}
        />
      </TouchableOpacity>
      <View style={{flex: 9}}>
        <FlatList
          horizontal
          data={DATA}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={currentScreen}
          pagingEnabled={true}
          renderItem={({item}) => {
            return (
              <View style={styles.listView}>
                <Image style={styles.listImg} source={item.img} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.message}>{item.message}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
        <View style={styles.dotView}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  screen === 0
                    ? 'rgba(255,255,255,0.8)'
                    : 'rgba(255,255,255,0.2)',
              },
            ]}></View>
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  screen === 1
                    ? 'rgba(255,255,255,0.8)'
                    : 'rgba(255,255,255,0.2)',
              },
            ]}></View>
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  screen === 2
                    ? 'rgba(255,255,255,0.8)'
                    : 'rgba(255,255,255,0.2)',
              },
            ]}></View>
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  screen === 3
                    ? 'rgba(255,255,255,0.8)'
                    : 'rgba(255,255,255,0.2)',
              },
            ]}></View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <BlueButton onPress={handleSignUpPress}>Sign Up</BlueButton>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#171f46'},
  closeView: {
    marginTop: '3%',
    marginRight: '3%',
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  close: {
    opacity: 0.5,
    height: 18,
    width: 18,
  },
  listView: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingVertical: '7%',
  },
  listImg: {
    resizeMode: 'stretch',
    height: '45%',
    width: '75%',
    margin: '5%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    margin: '5%',
  },
  message: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    margin: '5%',
  },
  dotView: {
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    marginHorizontal: '1%',
  },
  buttonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
