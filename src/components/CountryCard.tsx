import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface PropsType {
  text: string;
  img: ImageSourcePropType;
  selectCountry: boolean[];
  setSelectCountry: Dispatch<SetStateAction<boolean[]>>;
}

const CountryCard = (props: PropsType) => {
  const [pressed, setPressed] = useState(false);
  const [pressedCountry, setPressedCountry] = useState(false);

  const {selectCountry: selectCountry, setSelectCountry: setSelectCountry} =
    props;
  const handleOnPress = () => {
    setPressed(!pressed);
    if (pressed) setPressedCountry(true);
  };

  const bgColor = () => {
    if (props.text == 'Thailand' && selectCountry[0] == true)
      return 'rgba(255,255,255,0.9)';
    else if (props.text == 'Singapore' && selectCountry[1] == true)
      return 'rgba(255,255,255,0.9)';
    else if (props.text == 'Malaysia' && selectCountry[2] == true)
      return 'rgba(255,255,255,0.9)';
    else if (props.text == 'Indonesia' && selectCountry[3] == true)
      return 'rgba(255,255,255,0.9)';
    else return 'rgba(255,255,255,0.2)';
  };

  const textColor = () => {
    if (props.text == 'Thailand' && selectCountry[0] == true) return 'black';
    else if (props.text == 'Singapore' && selectCountry[1] == true)
      return 'black';
    else if (props.text == 'Malaysia' && selectCountry[2] == true)
      return 'black';
    else if (props.text == 'Indonesia' && selectCountry[3] == true)
      return 'black';
    else return 'white';
  };

  useEffect(() => {
    if (pressed || pressedCountry) {
      if (props.text == 'Thailand')
        setSelectCountry([true, false, false, false]);
      if (props.text == 'Singapore')
        setSelectCountry([false, true, false, false]);
      if (props.text == 'Malaysia')
        setSelectCountry([false, false, true, false]);
      if (props.text == 'Indonesia')
        setSelectCountry([false, false, false, true]);
    } else setSelectCountry([false, false, false, false]);
  }, [pressed]);

  useEffect(() => {
    bgColor();
    textColor();
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleOnPress}
        style={[
          styles.cardView,
          {
            backgroundColor: bgColor(),
          },
        ]}>
        <Image style={styles.flagImg} source={props.img} />

        <Text style={[styles.countryName, {color: textColor()}]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  cardView: {
    height: '35%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
    padding: '9%',
  },
  countryName: {
    color: 'white',
    fontSize: 15,
    marginTop: '5%',
    fontWeight: '300',
  },
  flagImg: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
});
