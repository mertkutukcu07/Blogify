import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import Images from '../constants/Images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const Error = () => {
  return (
    <View style={styles.errorC}>
      <Image style={styles.errorImage} source={Images.bckImage.error} />
      <Text style={styles.errorText} >Bir hata oluştu.</Text>
    </View>
  );
};

export default Error;

export const styles = StyleSheet.create({
  errorC: {
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('40%'),
  },
  errorImage:{
   width:75,
   height:75,
  },
  errorText:{
    fontSize:18,
    marginTop: hp('2%'),
  },
});
