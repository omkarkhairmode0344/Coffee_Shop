import React from 'react';
import {
  Image,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
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

interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.ItemBackgroundImage}>
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => {
                BackHandler();
              }}>
              <View style={styles.container}>
                <Image
                  source={require('../assets/app_images/C_Back.png')}
                  style={styles.image}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}>
              <View style={styles.container}>
                <Image
                  source={require('../assets/app_images/C_Fav.png')}
                  style={[
                    styles.image,
                    {
                      tintColor: favourite
                        ? COLORS.primaryRedHex
                        : COLORS.primaryLightGreyHex,
                    },
                  ]}></Image>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}>
              <View style={styles.container}>
                <Image
                  source={require('../assets/app_images/C_Fav.png')}
                  style={[
                    styles.image,
                    {
                      tintColor: favourite
                        ? COLORS.primaryRedHex
                        : COLORS.primaryLightGreyHex,
                    },
                  ]}></Image>
              </View>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubtitleText}>
                  {special_ingredient}
                </Text>
              </View>

              <View style={styles.ItemPropertiesContainer}>
                <View style={styles.containertype}>
                  <Image
                    source={
                      type == 'Bean'
                        ? require('../assets/app_images/C_Bean.png')
                        : require('../assets/app_images/C_Coffee.png')
                    }
                    style={
                      type == 'Bean'
                        ? styles.beanimagestyle
                        : styles.coffeeimagestyle
                    }></Image>
                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {
                        marginTop:
                          type == 'Bean' ? SPACING.space_4 : SPACING.space_2,
                      },
                    ]}>
                    {type}
                  </Text>
                </View>

                <View style={styles.containertype}>
                  <Image
                    source={
                      type == 'Bean'
                        ? require('../assets/app_images/C_Location.png')
                        : require('../assets/app_images/C_Milk.png')
                    }
                    style={
                      type == 'Bean'
                        ? styles.beanimagestyle
                        : styles.coffeeimagestyle
                    }></Image>
                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {
                        marginTop:
                          type == 'Bean' ? SPACING.space_4 : SPACING.space_2,
                      },
                    ]}>
                    {ingredients}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.InfoContainerRow}>
              <View style={styles.RatingContainer}>
                <Image
                  source={require('../assets/app_images/C_Star.png')}
                  style={styles.starimage}></Image>
                <Text style={{color: COLORS.primaryWhiteHex}}>
                  {average_rating}
                </Text>
                <Text style={{color: COLORS.primaryWhiteHex}}>
                  ({ratings_count})
                </Text>
              </View>
              <View style={styles.RoastedContainer}>
                <Text style={styles.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 21 / 25,
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ImageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
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
    height: SPACING.space_15 - 1,
    width: SPACING.space_15 - 1,
    resizeMode: 'contain',
    tintColor: COLORS.primaryLightGreyHex,
  },
  ImageInfoOuterContainer: {
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_25,
    borderTopRightRadius: BORDERRADIUS.radius_25,
  },
  ImageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  InfoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 21,
    color: COLORS.primaryWhiteHex,
  },
  ItemSubtitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ItemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  containertype: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_15,
    backgroundColor: COLORS.primaryBlackHex,
  },
  coffeeimagestyle: {
    height: SPACING.space_28,
    width: SPACING.space_28,
    resizeMode: 'contain',
    tintColor: COLORS.primaryOrangeHex,
  },
  beanimagestyle: {
    height: SPACING.space_24,
    width: SPACING.space_24,
    resizeMode: 'contain',
    tintColor: COLORS.primaryOrangeHex,
  },
  PropertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  RatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  starimage: {
    height: SPACING.space_20,
    width: SPACING.space_20,
    resizeMode: 'contain',
    tintColor: COLORS.primaryOrangeHex,
  },
  RoastedContainer: {
    height: 44,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  DescriptionContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
  },
  DescriptionText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  DescriptionSubText: {
    color: COLORS.primaryWhiteHex,
    fontSize: SPACING.space_12,
    fontFamily: FONTFAMILY.poppins_medium,
  },
});

export default ImageBackgroundInfo;
