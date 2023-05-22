import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import useFetch from '../hooks/useEffect';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Images from '../constants/Images';
import {BlogDetailContext} from '../Context/BlogDetailContext';
const BlogHomeScreen = ({navigation}) => {
  const {selectedItem, setBlogItem} = useContext(BlogDetailContext);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = useFetch(
    `https://www.lenasoftware.com/api/v1/en/maestro/1?page=${page}&count=10`,
  );

  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useFetch(`https://www.lenasoftware.com/api/v1/en/maestro/${page}`);

  useEffect(() => {
    console.log(data1);
    console.log(data2);
  }, [page]);

  if (loading1 || loading2) {
    return <Loading />;
  }

  if (error1 || error2) {
    return <Error />;
  }

  const handleItemPress = item => {
    setBlogItem(item);
    navigation.navigate('BlogDetail', {blogItem: item});
  };

  const recommendRenderItem = ({item}) => {
    return (
      <View style={styles.recommenendListC}>
        <TouchableOpacity onPress={() => handleItemPress(item)}>
          <View style={styles.imageandtitleC}>
            <Image
              style={styles.recommenendImage}
              source={{uri: item.banner}}
            />
            <Text style={styles.recommenendListText}>{item.title}</Text>
          </View>
          <View style={styles.timeC}>
            <Text style={styles.readingTimeText}>
              Okunma Süresi(dk): {Math.abs(item.totalReadingTime)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPage(page + 1);
    setRefreshing(false);
  };
  const handleLoadMore = () => {
    
    setPage(page + 1);
  };

  const RenderBlogs = ({item}) => {
    return (
      <View style={styles.blogListC}>
        <TouchableOpacity onPress={() => handleItemPress(item)}>
          <View style={styles.blogsRenderC}>
            <View style={styles.blogsBody}>
              <Image style={styles.blogsImage} source={{uri: item.banner}} />
              <View style={styles.titleandDescriptionC}>
                <Text style={styles.blogListTitleText}>{item.title}</Text>
                <Text style={styles.blogListSummaryText}>{item.summary}</Text>
                <Text style={styles.BlogreadingTimeText}>
                  Okunma Süresi(dk): {Math.abs(item.totalReadingTime)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <Header />
        </View>
        <View style={styles.recommenendC}>
          <Text style={styles.recommenendText}>Tavsiye Edilen</Text>
        </View>
        <View style={styles.recommenendFlatListC}>
          <FlatList
            data={data2?.result}
            keyExtractor={(item, index) => index.toString()}
            renderItem={recommendRenderItem}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <Image style={styles.lineimage} source={Images.bckImage.line} />
        <View style={styles.blogsC}>
          <FlatList
            data={data1?.result}
            keyExtractor={(item, index) => index.toString()}
            renderItem={RenderBlogs}
            showsHorizontalScrollIndicator={false}
            onEndReached={handleLoadMore} // Sayfa atlamasını tetikleyen fonksiyon
            onEndReachedThreshold={0.5}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.text.white,
  },
  recommenendC: {
    top: hp('5%'),
    left: wp('5%'),
  },
  recommenendText: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text.middleGrey,
  },
  recommenendListC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: wp('5%'),
  },
  imageandtitleC: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommenendFlatListC: {
    marginTop: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommenendImage: {
    width: 300,
    height: 176,
    resizeMode: 'contain',
    borderRadius: 30,
  },
  recommenendListText: {
    fontSize: 18,
    fontWeight: '700',

    width: wp('70%'),
    textAlign: 'left',
    marginTop: hp('1%'),
    color: Colors.text.black,
  },
  timeC: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: hp('1.5%'),
    marginRight: wp('3%'),
  },
  readingTimeText: {
    fontSize: 12,
    color: Colors.text.borderGrey,
  },
  lineimage: {
    marginTop: hp('2%'),
    width: wp('100%'),
  },
  blogsC: {},
  blogsRenderC: {
    flexDirection: 'column',
  },
  blogsImage: {
    width: 150,
    height: 79,
    resizeMode: 'contain',
    borderRadius: 25,
  },
  blogListC: {
    justifyContent: 'center',
    paddingBottom: hp('4%'),
  },
  blogsBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleandDescriptionC: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: wp('2%'),
  },
  blogListTitleText: {
    fontSize: 18,
    fontWeight: '700',
    width: wp('62%'),
    textAlign: 'left',
    marginTop: hp('1%'),
    color: Colors.text.black,
  },
  blogListSummaryText: {
    width: wp('60%'),
    colors: Colors.text.lightGrey,
  },
  BlogreadingTimeText: {
    textAlign: 'right',
    marginRight: wp('3.8%'),
    color: Colors.text.borderGrey,
    marginTop: hp('1%'),
  },
});

export default BlogHomeScreen;
