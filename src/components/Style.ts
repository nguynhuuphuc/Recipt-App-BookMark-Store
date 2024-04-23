import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constant/Constant';
import TabIcon from './TabIcon';
import {Icon} from 'react-native-vector-icons/Icon';

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
  marginSmall: {
    margin: SIZES.marginSmaller,
  },
  marginEndSmall: {
    marginEnd: SIZES.marginSmall,
  },
  tabIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonLine: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '100%',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  inputView: {
    flexDirection: 'row',
    backgroundColor: COLORS.light_gray,
    padding: SIZES.paddingSmallest,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
  },
  itemImg: {
    borderRadius: 10,
    width: 230,
    height: 280,
  },
  itemContent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    padding: SIZES.paddingSmall,
  },
  itemTitle: {
    fontWeight: '700',
  },
  itemTextColor: {
    color: COLORS.white,
  },
  textColorBlack: {
    color: COLORS.black,
  },
  itemCard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  itemCategory: {
    position: 'absolute',
    flexDirection: 'row',
    padding: SIZES.paddingSmaller,
    margin: SIZES.marginSmaller,
    top: 0,
    backgroundColor: 'rgba(52,52,52,0.8)',
    borderRadius: 10,
  },
  itemContainerContent: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.paddingSmall,
    margin: SIZES.marginSmaller,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(52,52,52,0.8)',
    borderRadius: 10,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  borderRadius: {
    borderRadius: 10,
  },
  cItemCategory: {
    marginTop: SIZES.marginSmall,
    flexDirection: 'row',
    padding: SIZES.paddingSmall,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
  },
  itemCategoryImg: {
    borderRadius: 10,
    width: 80,
    height: 80,
  },
  itemCategoryWrapper: {
    marginLeft: SIZES.marginSmall,
    marginRight: SIZES.marginSmall,
    flex: 1,
    justifyContent: 'space-between',
  },
  itemCategoryTitle: {
    fontSize: FONTS.fontSmallMedium,
    fontWeight: '500',
  },
});
