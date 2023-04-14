import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../styles/ComponentStyle';

interface PropsType {
  title: string;
  curr: string;
  setCurr: Dispatch<SetStateAction<string>>;
}

const FlatListItem2 = (props: PropsType) => {
  const [bgColor, setBgColor] = useState<string>('rgba(255,255,255,0.2)');
  const [txtColor, setTxtColor] = useState<string>('#C3C3BB');
  const handlePress = () => {
    props.setCurr(props.title);
  };
  useEffect(() => {
    if (props.title != props.curr) {
      setBgColor('rgba(255,255,255,0.2)');
      setTxtColor('#C3C3BB');
    } else {
      setBgColor('blue');
      setTxtColor('white');
    }
  }, [props.curr]);
  return (
    <TouchableOpacity
      style={[styles.FlatListItem2.itemContainer, {backgroundColor: bgColor}]}
      onPress={handlePress}>
      {props.title === 'Any' && (
        <FontAwesomeIcon name="th" size={17} color={txtColor} />
      )}
      {props.title === 'Ongoing' && (
        <FontAwesomeIcon name="refresh" size={17} color={txtColor} />
      )}
      {props.title === 'Completed' && (
        <FontAwesomeIcon name="check-circle" size={17} color={txtColor} />
      )}
      {props.title === 'Defaulted' && (
        <FontAwesomeIcon name="calendar-times-o" size={17} color={txtColor} />
      )}
      <Text style={[styles.FlatListItem2.titleText, {color: txtColor}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default FlatListItem2;
