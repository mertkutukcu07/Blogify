import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Images from '../constants/Images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const Loading = () => {
  return (
    <View style={styles.LoadingC}>
      <Image style={styles.LoadingImage} source={Images.bckImage.loading} />
    </View>
  );
};

export default Loading;

export const styles = StyleSheet.create({
  LoadingC: {
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('40%'),
  },
  LoadingImage:{
    width:50,
    height:50,
  },
});
