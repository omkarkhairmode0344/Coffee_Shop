import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from './ImageBackgroundInfo';

const FavoritesItemCard = (props: any) => {
  return (
    <View style={styles.CardContainer}>
      <ImageBackgroundInfo
        EnableBackHandler={false}
        imagelink_portrait={props.imagelink_portrait}
        type={props.type}
        id={props.id}
        favourite={props.favourite}
        name={props.name}
        special_ingredient={props.special_ingredient}
        ingredients={props.ingredients}
        average_rating={props.average_rating}
        ratings_count={props.ratings_count}
        roasted={props.roasted}
        ToggleFavourite={props.ToggleFavouriteItem}
      />
      <View style={styles.DescriptionContainer}></View>
      <Text style={styles.DescriptionText}>Description</Text>
      <Text style={styles.DescriptionSubText}>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  ContainerLinearGradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },
  DescriptionContainer: {
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_15,
  },
  DescriptionText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    marginBottom: SPACING.space_10,
  },
  DescriptionSubText: {
    color: COLORS.primaryWhiteHex,
    fontSize: SPACING.space_12,
    fontFamily: FONTFAMILY.poppins_regular,
    marginBottom: SPACING.space_15,
  },
});

export default FavoritesItemCard;
