import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View style={styles.headerC} >
      <Text style={styles.headerText}>Blogify</Text>
    </View>
  );
};

export default Header;

export const styles = StyleSheet.create({
  headerC:{
    alignItems:'center',
    justifyContent:'center',
    top: hp('2%'),
  },
  headerText:{
    fontSize:25,
    fontWeight:'800',
    fontStyle:'italic',
    color: Colors.text.black,

  },
});
