import React from 'react';
import {Image, ScrollView, Share, Text, View} from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import BlueButton from '../components/BlueButton';

import {styles} from '../styles/ScreenStyle';

const ReferScreen = () => {
  const handleShareButtonPress = () => {
    Share.share({
      message: 'https://fundingsocieties.com/',
      url: 'file:///home/deottam/Github/fundingSocietiesProject/src/assets/images/fsLogo.svg',
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  return (
    <View style={styles.ReferScreen.lgContainer}>
      <ScrollView>
        <View style={styles.ReferScreen.container}>
          <View style={styles.ReferScreen.handshakeImgView}>
            <Image
              source={require('../assets/images/handshake.png')}
              style={styles.ReferScreen.handshakeImg}
            />
          </View>
          <Text style={styles.ReferScreen.descText}>
            Funding Societies Refer a Friend Campaign, Get for You and Your
            Friend, Unlimited Referrals!
          </Text>
          <Text style={styles.ReferScreen.scanInfo}>
            Scan the QR code or click on the button to visit our site
          </Text>
          <View style={styles.ReferScreen.qrCodeView}>
            <QRCode value="https://fundingsocieties.com/" size={100} />
          </View>
          <Text style={styles.ReferScreen.orText}>or</Text>
          <BlueButton onPress={handleShareButtonPress}>Share</BlueButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReferScreen;
