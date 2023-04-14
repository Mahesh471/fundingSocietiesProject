import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface PropsType {
  dob: string | undefined;
  setDob: Dispatch<SetStateAction<string | undefined>>;
}

const DobInputField = (props: PropsType) => {
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const {dob, setDob} = props;
  const [date, setDate] = useState<Date>(new Date());
  const handleDobChange = (txt: string) => {
    setDob(txt);
  };
  const handleCalPress = () => {
    setOpenDatePicker(true);
  };
  const handleConfirm = (date: Date) => {
    setDate(date);
    setOpenDatePicker(false);
  };
  const handleCancel = () => {
    setOpenDatePicker(false);
  };
  useEffect(() => {
    setDob(JSON.stringify(date).slice(1, 11));
  }, [date]);
  useEffect(() => {
    dob && setDate(new Date(dob));
  }, [dob]);
  return (
    <>
      {dob && dob.length > 0 && (
        <Text style={[styles.dobLabel]}>Date of Birth</Text>
      )}
      <View style={styles.dateView}>
        <TextInput
          placeholder="Dob"
          editable={false}
          style={[styles.inputField]}
          placeholderTextColor="white"
          value={dob}
          onChangeText={handleDobChange}
        />
        <View style={styles.calImgView}>
          <TouchableOpacity onPress={handleCalPress}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1869/1869397.png',
              }}
              style={styles.calImg}
            />
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={openDatePicker}
          date={date}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: '80%',
    height: 20,
    color: 'white',
    padding: 0,
    marginTop: 0,
    marginBottom: '7%',
    borderBottomColor: 'white',
  },
  calImgView: {
    borderBottomColor: 'white',
    width: '10%',
    height: 35,
    bottom: 15,
  },
  calImg: {
    width: '100%',
    height: 30,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dobLabel: {
    color: '#f3f3f3',
    fontSize: 10,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
});

export default DobInputField;
