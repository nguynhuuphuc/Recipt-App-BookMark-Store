import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/Constant';

export const style = StyleSheet.create({
  textColorBlack: {
    color: COLORS.black,
  },
  home: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  toolBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.paddingSmall,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  toolBarTitle: {
    fontSize: FONTS.fontMedium,
    color: COLORS.primary,
    fontWeight: '700',
  },
  toolBarSubTitle: {
    color: COLORS.dark_gray,
  },
  searchContainer: {
    paddingStart: SIZES.paddingSmall,
    paddingEnd: SIZES.paddingSmall,
  },
  cHintRecipe: {
    backgroundColor: COLORS.light_green,
    borderRadius: 10,
    padding: SIZES.paddingSmall,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.marginSmall,
  },
  subHintRecipe: {
    flex: 1,
  },
  imgHintRecipe: {width: 80, height: 80},
  texHintRecipe: {
    marginTop: SIZES.marginSmall,
    color: COLORS.black,
    flex: 1,
  },
  hintLink: {
    color: COLORS.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
    position: 'absolute',
    bottom: 0,
  },
  cTrending: {
    padding: SIZES.paddingSmall,
  },
  titleTrending: {
    fontSize: FONTS.fontMedium,
    color: COLORS.black,
    fontWeight: '700',
    marginBottom: SIZES.marginSmall,
  },
  cCategory: {
    padding: SIZES.paddingSmall,
  },
  cCategoryTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: FONTS.fontMedium,
    fontWeight: '700',
  },
});
