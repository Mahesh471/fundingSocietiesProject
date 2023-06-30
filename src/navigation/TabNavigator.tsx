import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import AboutScreen from '../screens/AboutScreen';
import FundsScreen from '../screens/FundsScreen';
import SettingScreen from '../screens/SettingScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import CrowdfundingScreen from '../screens/CrowdfundingScreen';

type RootTabParamList = {
  AboutScreen: undefined;
  PortfolioScreen: undefined;
  CrowdfundingScreen: undefined;
  FundsScreen: undefined;
  SettingScreen: undefined | {email: string; dob: string; fileResponse: string};
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="AboutScreen"
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
        name="AboutScreen"
        component={AboutScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{title: 'Portfolio'}}
      />
      <Tab.Screen
        name="CrowdfundingScreen"
        component={CrowdfundingScreen}
        options={{title: 'Funding'}}
      />
      <Tab.Screen
        name="FundsScreen"
        component={FundsScreen}
        options={{title: 'Funds'}}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{title: 'Settings', headerShown: true}}
      />
    </Tab.Navigator>
  );
};

export {type RootTabParamList};
export default TabNavigator;
