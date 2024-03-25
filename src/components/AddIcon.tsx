import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';

const AddIcon = () => {
  return (
    <View style={styles.plusimagecontainer}>
      <Image
        source={require('../assets/app_images/C_Plus.png')}
        style={styles.plusimage}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  plusimagecontainer: {
    height: SPACING.space_28,
    width: SPACING.space_28,
    borderRadius: BORDERRADIUS.radius_8,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusimage: {
    height: SPACING.space_8,
    width: SPACING.space_8,
  },
});

export default AddIcon;
