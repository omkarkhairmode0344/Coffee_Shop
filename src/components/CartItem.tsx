import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

const CartItem = (props: any) => {
  return (
    <View>
      {props.prices.length != 1 ? (
        <View style={styles.CartItemContainer}>
          <View style={styles.CartItemRow}>
            <Image
              style={styles.CartItemImage}
              source={props.imagelink_square}></Image>
            <View style={styles.CartItemInfo}>
              <View>
                <Text style={styles.CartItemTitle}>{props.name}</Text>
                <Text style={styles.CartItemSubTitle}>
                  {props.special_ingredient}
                </Text>
              </View>
              <View style={styles.CartItemRoastedContainer}>
                <Text style={styles.CartItemRoastedText}>{props.roasted}</Text>
              </View>
            </View>
          </View>
          {props.prices.map((data: any, index: any) => (
            <View
              key={index.toString()}
              style={styles.CartItemSizeRowContainer}>
              <View style={styles.CartItemSizeValueContainer}>
                <View style={styles.SizeBox}>
                  <Text
                    style={[
                      styles.SizeText,
                      {
                        fontSize:
                          props.type == 'Bean'
                            ? FONTSIZE.size_12
                            : FONTSIZE.size_16,
                      },
                    ]}>
                    {data.size}
                  </Text>
                </View>
                <Text style={styles.SizeCurrency}>
                  {data.currency}
                  <Text style={styles.SizePrice}> {data.price}</Text>
                </Text>
              </View>
              <View style={styles.CartItemSizeValueContainer}>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => {
                    props.decrementCartItemQuantityHandler(props.id, data.size);
                  }}>
                  <Image
                    source={require('../assets/app_images/C_Minus.png')}
                    style={[
                      styles.image,
                      {tintColor: COLORS.primaryWhiteHex},
                    ]}></Image>
                </TouchableOpacity>
                <View style={styles.CartItemQuantityContainer}>
                  <Text style={styles.CartItemQuantityText}>
                    {data.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => {
                    props.incrementCartItemQuantityHandler(props.id, data.size);
                  }}>
                  <Image
                    source={require('../assets/app_images/C_Plus.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.CartItemContainer}>
          <View style={styles.CartItemRow}>
            <Image
              style={styles.CartItemSingleImage}
              source={props.imagelink_square}></Image>
            <View style={styles.CartItemInfo}>
              <View>
                <Text style={styles.CartItemTitle}>{props.name}</Text>
                <Text style={styles.CartItemSubTitle}>
                  {props.special_ingredient}
                </Text>
              </View>

              <View style={styles.CartItemSizeValueContainer}>
                <View style={styles.SizeSingleBox}>
                  <Text
                    style={[
                      styles.SizeText,
                      {
                        fontSize:
                          props.type == 'Bean'
                            ? FONTSIZE.size_12
                            : FONTSIZE.size_16,
                      },
                    ]}>
                    {props.prices[0].size}
                  </Text>
                </View>
                <Text style={styles.SizeCurrency}>
                  {props.prices[0].currency}
                  <Text style={styles.SizePrice}> {props.prices[0].price}</Text>
                </Text>
              </View>

              <View style={styles.CartItemSizeValueContainer}>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => {
                    props.decrementCartItemQuantityHandler(
                      props.id,
                      props.size,
                    );
                  }}>
                  <Image
                    source={require('../assets/app_images/C_Minus.png')}
                    style={[
                      styles.image,
                      {tintColor: COLORS.primaryWhiteHex},
                    ]}></Image>
                </TouchableOpacity>
                <View style={styles.CartItemQuantitySingleContainer}>
                  <Text style={styles.CartItemQuantityText}>
                    {props.prices[0].quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.CartItemIcon}
                  onPress={() => {
                    props.incrementCartItemQuantityHandler(
                      props.id,
                      props.size,
                    );
                  }}>
                  <Image
                    source={require('../assets/app_images/C_Plus.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  CartItemContainer: {
    flex: 1,
    gap: SPACING.space_12,
    backgroundColor: COLORS.primaryGreyHex,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemRow: {
    flexDirection: 'row',
    gap: SPACING.space_12,
    flex: 1,
  },
  CartItemImage: {
    height: 130,
    width: 130,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CartItemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
  },
  CartItemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSubTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CartItemRoastedContainer: {
    height: 50,
    width: 50 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  CartItemRoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSizeRowContainer: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.space_15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  CartItemSizeValueContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 80,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  SizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  SizePrice: {
    color: COLORS.primaryWhiteHex,
  },
  CartItemIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_10,
  },
  image: {
    height: 10,
    width: 10,
  },
  CartItemQuantityContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 60,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: SPACING.space_4,
  },
  CartItemQuantityText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSingleImage: {
    height: 140,
    width: 140,
    borderRadius: BORDERRADIUS.radius_20,
  },
  SizeSingleBox:{
    backgroundColor: COLORS.primaryBlackHex,
    height: 35,
    width: 70,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CartItemQuantitySingleContainer:{
    backgroundColor: COLORS.primaryBlackHex,
    width: 50,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: SPACING.space_4,
  },
});

export default CartItem;
