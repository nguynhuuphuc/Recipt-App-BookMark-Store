import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/Constant';
import {Icon} from 'react-native-vector-icons/Icon';

export const style = StyleSheet.create({
  colorGray: {
    color: COLORS.gray,
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
    width: 32,
    height: 32,
    borderRadius: 16,
    marginEnd: SIZES.marginSmaller,
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
});
