import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';

const MenuIcon = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/app_images/C_Menu.png')}
        style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    borderWidth: 1,
    borderColor: COLORS.secondaryDarkGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_10,
    overflow: 'hidden',
    backgroundColor: COLORS.secondaryDarkGreyHex,
  },
  image: {
    height: SPACING.space_15-1,
    width: SPACING.space_15-1,
    resizeMode: 'contain',
    tintColor: COLORS.primaryLightGreyHex,
  },
});

export default MenuIcon;
