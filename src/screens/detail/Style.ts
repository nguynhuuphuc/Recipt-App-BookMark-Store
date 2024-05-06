import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/Constant';
import {Icon} from 'react-native-vector-icons/Icon';

export const style = StyleSheet.create({
  colorBlack: {
    color: COLORS.black,
  },
  colorGray: {
    color: COLORS.gray,
  },
  textAlignRight: {
    textAlign: 'right',
  },
  flex_end: {
    alignSelf: 'flex-end',
  },
  icon32: {
    width: 32,
    height: 32,
  },
  tintColorWhite: {
    tintColor: COLORS.white,
  },
  icon24: {
    width: 24,
    height: 24,
  },
  tintPrimary: {
    tintColor: COLORS.primary,
  },
  tintWhite: {
    tintColor: COLORS.white,
  },
  headerToolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerAbsolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: SIZES.paddingSmall,
    justifyContent: 'space-between',
  },
  authorWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    padding: SIZES.paddingSmall,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 24,
    marginEnd: SIZES.marginSmaller,
  },
  avatarLeft: {
    width: 42,
    height: 42,
    borderRadius: 24,
    marginLeft: -SIZES.marginSmall,
  },
  authorMore: {
    position: 'absolute',
    right: 0,
  },
  authorName: {
    fontWeight: '500',
    color: COLORS.white,
  },
  borderRadiusBlurViewInside: {
    overflow: 'hidden',
    borderRadius: 16,
  },
  bodyContainer: {
    padding: SIZES.paddingSmall,
  },
  bTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bTitleText: {
    flex: 1,
    fontSize: FONTS.fontMedium,
    fontWeight: '500',
  },
  bSubText: {
    color: COLORS.dark_gray,
    fontSize: FONTS.fontSmall,
    alignSelf: 'flex-end',
  },
  bIngredientText: {
    marginTop: SIZES.marginMedium,
    fontWeight: '700',
  },
  bIngredientItems: {
    marginTop: SIZES.marginSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
