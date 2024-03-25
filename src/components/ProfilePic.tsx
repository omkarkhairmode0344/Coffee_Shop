import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_10,
    overflow: 'hidden',
  },
  image: {
    height: SPACING.space_30,
    width: SPACING.space_30,
  },
});

export default ProfilePic;
