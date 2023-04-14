import React from 'react';
import {StyleSheet, View} from 'react-native';

interface PropsType {
  children: React.ReactNode;
}

const ProfileCard = (props: PropsType) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    padding: '5%',
    marginBottom: '2%',
  },
});

export default ProfileCard;
