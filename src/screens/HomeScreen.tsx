import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import {useStore} from '../store/store';
import CoffeeCrad from '../components/CoffeeCrad';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};

const HomeScreen = ({navigation}: any) => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);

  const BeanList = useStore((state: any) => state.BeanList);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );

  const [searchText, setSearchText] = useState('');

  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });

  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const ListRef: any = useRef<FlatList>();

  const tabBarHeight = useBottomTabBarHeight();

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };

  const addToCart = useStore((state: any) => state.addToCart);

  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const CoffeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{...price, quantity: 1}],
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}></StatusBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <HeaderBar></HeaderBar>

        <Text style={styles.text}>Find the best{'\n'}coffee for you</Text>

        <View style={styles.serachContainer}>
          <TouchableOpacity
            onPress={() => {
              searchCoffee(searchText);
            }}>
            <Image
              source={require('../assets/app_images/C_Search.png')}
              style={[
                styles.serach,
                searchText.length > 0
                  ? {tintColor: COLORS.primaryOrangeHex}
                  : {tintColor: COLORS.primaryLightGreyHex},
              ]}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
            <TextInput
              placeholder="Find Your Coffee..."
              placeholderTextColor={COLORS.primaryLightGreyHex}
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
                searchCoffee(text);
              }}
              autoCapitalize="none"
              style={styles.textInput}></TextInput>
          </TouchableOpacity>

          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchCoffee();
              }}>
              <Image
                source={require('../assets/app_images/C_Close.png')}
                style={styles.close}></Image>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              style={styles.CategoryScrollViewContainer}
              key={index.toString()}>
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({index: index, category: categories[index]});
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
                }}>
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory}></View>
                ) : (
                  <View></View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <FlatList
          ref={ListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.FlatListContainer}
          data={sortedCoffee}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.CategoryText}>No Coffee Found</Text>
            </View>
          }
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    type: item.type,
                    id: item.id,
                  });
                }}>
                <CoffeeCrad
                  name={item.name}
                  id={item.id}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  prices={item.prices[2]}
                  average_rating={item.average_rating}
                  index={item.index}
                  buttonPressHandler={CoffeCardAddToCart}></CoffeeCrad>
              </TouchableOpacity>
            );
          }}></FlatList>

        <Text style={styles.beantitle}>Coffee beans</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.FlatListContainer,
            {marginBottom: tabBarHeight},
          ]}
          data={BeanList}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    type: item.type,
                    id: item.id,
                  });
                }}>
                <CoffeeCrad
                  name={item.name}
                  id={item.id}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  prices={item.prices[2]}
                  average_rating={item.average_rating}
                  index={item.index}
                  buttonPressHandler={CoffeCardAddToCart}></CoffeeCrad>
              </TouchableOpacity>
            );
          }}></FlatList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  text: {
    fontSize: SPACING.space_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
    lineHeight: SPACING.space_32,
  },
  serachContainer: {
    marginHorizontal: SPACING.space_30,
    marginVertical: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  serach: {
    height: SPACING.space_20,
    width: SPACING.space_20,
    marginHorizontal: SPACING.space_18,
  },
  close: {
    height: SPACING.space_15,
    width: SPACING.space_15,
    marginHorizontal: SPACING.space_18,
    tintColor: COLORS.primaryLightGreyHex,
  },
  textInput: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_10,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    color: COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_15,
    paddingHorizontal: SPACING.space_30,
    paddingVertical: SPACING.space_20,
  },
  emptyContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 2.95,
  },
  beantitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
    marginLeft: SPACING.space_30,
    fontSize: FONTSIZE.size_16,
  },
});

export default HomeScreen;
