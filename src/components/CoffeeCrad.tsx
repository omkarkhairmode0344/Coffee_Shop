import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
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
import AddIcon from './AddIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeeCardProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: any;
  name: string;
  special_ingredient: string;
  average_rating: number;
  prices: any;
  price:any;
  buttonPressHandler: any;
}

const CoffeeCrad: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  prices,
  price,
  buttonPressHandler,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imagelink_square}
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.imageBackgroundContainer}>
          <Image
            source={require('../assets/app_images/C_Star.png')}
            style={styles.imagerating}></Image>
          <Text style={styles.textrating}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.cardtitle}>{name}</Text>
      <Text style={styles.cardsubtitle}>{special_ingredient}</Text>
      <View style={styles.CardFooterRow}>
        <Text style={styles.cardcurency}>
          $ <Text style={styles.cardcurencyprice}>{prices.price}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            buttonPressHandler({
              id,
              index,
              type,
              roasted,
              imagelink_square,
              name,
              special_ingredient,
              prices: [{...price, quantity: 1}],
            });
          }}>
          <AddIcon></AddIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
  },
  imageBackground: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    marginBottom: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_20,
    overflow: 'hidden',
  },
  imageBackgroundContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    paddingHorizontal: SPACING.space_10,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    gap: 6,
  },
  imagerating: {
    height: SPACING.space_12,
    width: SPACING.space_12,
    tintColor: COLORS.primaryOrangeHex,
  },
  textrating: {
    fontFamily: FONTFAMILY.poppins_semibold,
    lineHeight: 22,
    color: COLORS.primaryWhiteHex,
  },
  cardtitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  cardsubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_12,
  },
  CardFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.space_10,
  },
  cardcurency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_16,
  },
  cardcurencyprice: {
    color: COLORS.primaryWhiteHex,
  },
});

export default CoffeeCrad;
