import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import {COLORS} from '../theme/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/app_images/C_Home.png')}
              style={{
                height: 24,
                width: 24,
                resizeMode: 'contain',
                tintColor: focused
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex,
              }}></Image>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/app_images/C_Cart.png')}
              style={{
                height: 24,
                width: 24,
                resizeMode: 'contain',
                tintColor: focused
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex,
              }}></Image>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/app_images/C_Fav.png')}
              style={{
                height: 24,
                width: 24,
                resizeMode: 'contain',
                tintColor: focused
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex,
              }}></Image>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Order"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/app_images/C_Order.png')}
              style={{
                height: 24,
                width: 24,
                resizeMode: 'contain',
                tintColor: focused
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex,
              }}></Image>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    height: 60,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
});

export default TabNavigator;
