import React from 'react';
import {View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {ParamListBase, RouteProp} from '@react-navigation/native';

import {TABBARICON} from '../assets/constants/colorCodes';

interface PropsType {
  focused: boolean;
  route: RouteProp<ParamListBase>;
}

const TabBarIcon = (props: PropsType) => {
  const {focused, route} = props;
  if (route.name === 'DummyScreen1') {
    return focused ? (
      <FontAwesomeIcon name="user" size={25} color={TABBARICON.FOCUSED} />
    ) : (
      <FontAwesomeIcon name="user" size={25} color={TABBARICON.UNFOCUSED} />
    );
  } else if (route.name === 'PortfolioScreen') {
    return focused ? (
      <MaterialIcon name="table-chart" size={25} color={TABBARICON.FOCUSED} />
    ) : (
      <MaterialIcon name="table-chart" size={25} color={TABBARICON.UNFOCUSED} />
    );
  } else if (route.name === 'DummyScreen3') {
    return focused ? (
      <MaterialIcon name="insert-chart" size={27} color={TABBARICON.FOCUSED} />
    ) : (
      <MaterialIcon
        name="insert-chart"
        size={27}
        color={TABBARICON.UNFOCUSED}
      />
    );
  } else if (route.name === 'FundsScreen') {
    return focused ? (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 25,
          width: 25,
          borderRadius: 12.5,
          backgroundColor: TABBARICON.FOCUSED,
        }}>
        <FontAwesomeIcon name="dollar" size={15} color="black" />
      </View>
    ) : (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 25,
          width: 25,
          borderRadius: 12.5,
          backgroundColor: TABBARICON.UNFOCUSED,
        }}>
        <FontAwesomeIcon name="dollar" size={15} color="black" />
      </View>
    );
  } else if (route.name === 'SettingScreen') {
    return focused ? (
      <IonIcon name="settings" size={25} color={TABBARICON.FOCUSED} />
    ) : (
      <IonIcon name="settings" size={25} color={TABBARICON.UNFOCUSED} />
    );
  }
};

export default TabBarIcon;
