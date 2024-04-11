import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constant/Constant';

export const style = StyleSheet.create({
  btnPrimary: {
    padding: SIZES.paddingSmall,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  btnTextColorWhite: {
    color: COLORS.white,
    fontWeight: '700',
    textAlign: 'center',
  },
  btnOutLine: {
    padding: SIZES.paddingSmall,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});
