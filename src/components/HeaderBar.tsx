import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTFAMILY, SPACING} from '../theme/theme';
import ProfilePic from './ProfilePic';
import MenuIcon from './MenuIcon';

const HeaderBar = (props:any) => {
  return (
    <View style={styles.container}>
      <MenuIcon></MenuIcon>
      <Text style={styles.text}>{props.text}</Text>
      <ProfilePic></ProfilePic>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_30,
    paddingVertical: SPACING.space_20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
