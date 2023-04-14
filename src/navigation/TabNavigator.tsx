import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import DummyScreen from '../screens/DummyScreen';
import FundsScreen from '../screens/FundsScreen';
import SettingScreen from '../screens/SettingScreen';
import PortfolioScreen from '../screens/PortfolioScreen';

type RootTabParamList = {
  DummyScreen1: undefined;
  PortfolioScreen: undefined;
  DummyScreen3: undefined;
  FundsScreen: undefined;
  SettingScreen: undefined | {email: string; dob: string; fileResponse: string};
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="PortfolioScreen"
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: '#00264D',
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: {fontSize: 15},
        tabBarIcon: ({focused}) => {
          return TabBarIcon({focused, route});
        },
        tabBarStyle: {
          backgroundColor: '#00264D',
          height: '9%',
          borderTopWidth: 0.5,
          borderColor: 'white',
        },
        tabBarItemStyle: {paddingBottom: '2.5%'},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="DummyScreen1"
        component={DummyScreen}
        options={{title: 'Dummy1'}}
      />
      <Tab.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{title: 'Portfolio'}}
      />
      <Tab.Screen
        name="DummyScreen3"
        component={DummyScreen}
        options={{title: 'Dummy3'}}
      />
      <Tab.Screen
        name="FundsScreen"
        component={FundsScreen}
        options={{title: 'Funds'}}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{title: 'Settings'}}
      />
    </Tab.Navigator>
  );
};

export {type RootTabParamList};
export default TabNavigator;
