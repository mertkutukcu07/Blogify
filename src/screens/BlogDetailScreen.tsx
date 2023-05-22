import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/Header';
import {BlogDetailContext} from '../Context/BlogDetailContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Images from '../constants/Images';

const BlogDetailScreen = ({navigation}) => {
  const {selectedItem} = useContext(BlogDetailContext);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Header />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backBtn} source={Images.bckImage.back} />
        </TouchableOpacity>
        <View style={styles.bodyC}>
          <Image
            style={styles.blogsImage}
            source={{uri: selectedItem.banner}}
          />
          <View style={styles.timeC}>
            <Text style={styles.blogCreatedAtText}  >{selectedItem.createdAt}</Text>
            <Text style={styles.BlogreadingTimeText}>
              Okunma Süresi(dk): {Math.abs(selectedItem.totalReadingTime)}
            </Text>
          </View>
          <Text style={styles.contentText}>{selectedItem.content}</Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BlogDetailScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyC: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  blogsImage: {
    width: wp('90%'),
    height: hp('30%'),
    resizeMode: 'contain',
    borderRadius: 25,
  },
  contentText: {
    marginTop: hp('4%'),
    width: wp('90%'),
  },
  backBtn: {
    width: 27,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp('5%'),
    bottom: hp('1%'),
  },
  timeC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1.5%'),
  },
  BlogreadingTimeText:{
    color:Colors.text.middleGrey,
    
  },
  blogCreatedAtText:{
    color:Colors.text.middleGrey,
    marginRight: wp('15%'),
   
  },
});
