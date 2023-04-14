import React, {Dispatch, SetStateAction} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

import {styles} from '../styles/ComponentStyle';

interface PropsType {
  children: React.ReactNode;
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
  setIsOtherSelected: Dispatch<SetStateAction<boolean>>;
}

const HeaderTabItem = (props: PropsType) => {
  const {isSelected, setIsSelected, setIsOtherSelected} = props;

  const handlePress = () => {
    setIsSelected(prev => !prev);
    setIsOtherSelected(prev => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[
          styles.HeaderTabItem.headerTabItem,
          {borderWidth: isSelected ? 1 : 0},
        ]}>
        <Text style={styles.HeaderTabItem.headerTabText}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HeaderTabItem;
